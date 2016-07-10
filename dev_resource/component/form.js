import React, {Component} from "react";
import Warning from "./warning";
import InputRow from "./input";
import Validate from "./validate";
export default class Form extends Component{
	constructor(props){
		super(props);
		this.state = props;
		this.getIptType = type => {
			return ~["text", "password"].indexOf(type);
		};
		this.getLabelName = () => {
			let validateStore = Validate.store,
				labelName;
			for(let i in validateStore){
				if(!validateStore[i]){
					this.state.option.map(list => {
						if(list.id === i){
							return labelName = list.label;
						}
					});
				}
			}
			return labelName;
		};
		this.getValidateIpt = () => {
			let option = this.state.option,
				_option = [];
			for(let i of option){
				i.id && _option.push(i.id);
			}
			return _option;
		};
		this.setValidate = () => {
			Validate.setSetting(this.getValidateIpt());
		};
		this.handleValidate = (id, result) => {
			let labelName = this.getLabelName();
			this.setState(JSON.parse(`{"${id}":"${result.status ? result.value : undefined}"}`), () => {
				this.refs.warning.setState({
					message : result.status ? labelName ? `您的${labelName}输入有误` : "" : result.value
				});
			});
		};
		this.afterValidate = callback => {
			Validate.getIsDone() && callback(this.getData());
		};
		this.getData = () => {
			let validateIpt = this.getValidateIpt(),
				data = {};
			for(let i in validateIpt){
				data[validateIpt[i]] = this.state[validateIpt[i]];
			}
			return data;
		};
		this.setValidate();
	}
	render(){
		let lists = [],
			state = this.state,
			title = state.title,
			option = state.option;
		option.map((list, index) => {
			lists.push(
				this.getIptType(list.type) ? (
					<InputRow option={list} key={index} validate={this.handleValidate} />
				) : list
			);
		});
		return (
			<form>
				{
					title ? (
						<h1>
							{title}
						</h1>
					) : null
				}
				<Warning ref="warning" />
				{lists}
			</form>
		);
	}
};