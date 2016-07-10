import React, {Component} from "react";
import Validate from "./validate";
export default class InputRow extends Component{
	constructor(props){
		super(props);
		this.state = props;
		this.validate = e => {
			let state = this.state,
				validate = state.validate,
				option = state.option;
			if(validate){
				let message = Validate.validate(option.id, option.label, e.target.value, option.validate);
				validate(option.id, message);
			}
		};
		this.handleSubmit = e => {
			e.keyCode === 13 && this.state.form && this.state.form.handleSubmit();
		};
	}
	componentWillReceiveProps(nextProps){
		this.setState(nextProps);
	}
	render(){
		let state = this.state,
			option = state.option;
		return (
			<div className={`row ${option.rowBorder ? "border" : "normal"}`}>
				<label htmlFor={option.id}>
					{`${option.label}`}
				</label>
				<input 
					id={option.id}
					className={`ipt-txt${state.value || state.value === null ? " disabled" : ""}`}
					type={option.type}
					placeholder={`请输入${option.label}`}
					maxLength={option.maxlength}
					readOnly={option.readOnly}
					value={state.value}
					onChange={this.validate}
					onBlur={this.validate}
					onKeyDown={this.handleSubmit}
					ref="ipt" />
				{
					option.unit ? <em>{option.unit}</em> : []
				}
			</div>
		);
	}
};