import React, {Component} from "react";
import fetch from "isomorphic-fetch";
class Button extends Component{
	constructor(props){
		super(props);
		this.state = props;
		this.handleClick = () => {
			this.state.clickEvent(props.index);
		};
	}
	componentWillReceiveProps(nextProps){
		this.setState(nextProps);
	}
	render(){
		let state = this.state;
		return (
			<em className={state.index === state.currentIndex ? "current" : null} onClick={this.handleClick}></em>
		);
	}
}
export default class Banner extends Component{
	constructor(props){
		super(props);
		this.state = {
			index : 0,
			option : []
		};
		this.handleClick = index => {
			console.log(index)
			this.setState({
				index 
			});
		};
	}
	auto(){
		let t, index,
			optionLen = this.state.option.length;
		const change = () => {
			t = setTimeout(() => {
				clearTimeout(t);
				index = this.state.index;
				index = index >= optionLen - 1 ? 0 : ++index;
				this.setState({
					index
				}, () => {
					change();
				});
			}, 4000);
		};
		change();
	}
	componentWillMount(){
		fetch("/api/other/getBanner").then(res => (
			res.status === 200 ? res.json() : {
				code : 400,
				data : null,
				message : "wrong"
			}
		)).then(data => {
			this.setState({
				option : data.data
			}, () => {
				this.auto();
			});
		});
	}
	render(){
		let option = this.state.option,
			currentIndex = this.state.index;
		return (
			<div className={`banner ${this.props.type}`}>
				{
					option.map((list, index) => (
						<a className={`img${index === currentIndex ? " current" : ""}`} title={list.name} href={list.anchorHref} style={
							{
								backgroundImage : `url(${list.imgSrc})`
							}
						} target="_blank" key={index}></a>
					))
				}
				<div className="indicator">
					{
						option.map((list, index) => (
							<Button index={index} currentIndex={currentIndex} clickEvent={this.handleClick} key={index} />
						))
					}
				</div>
			</div>
		);
	}
}