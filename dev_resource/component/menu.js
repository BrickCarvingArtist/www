import React, {Component} from "react";
import {Link} from "react-router";
import {parse} from "querystring";
class Case extends Component{
	constructor(props){
		super(props);
		this.state = props;
		this.handleClick = e => {
			let state = this.state,
				index = state.index,
				userClass = state.userClass;
			userClass.setState({
				index
			});
		};
	}
	componentWillReceiveProps(nextProps){
		this.setState(nextProps);
	}
	render(){
		let state = this.state,
			option = state.option;
		return (
			<Link className={state.status ? "current" : "normal"} to={option.to} onClick={this.handleClick}>
				{option.label}
			</Link>
		);
	}
}
export default class Menu extends Component{
	constructor(props){
		super(props);
		this.state = props;
	}
	shouldComponentUpdate(nextProps, nextState){
		return this.state.index !== nextState.index;
	}
	componentWillReceiveProps(nextProps){
		this.setState(nextProps);
	}
	render(){
		let lists = [],
			state = this.state,
			option = state.option;
		option.map((list, index) => {
			lists.push(
				<Case option={
					{
						label : list.name,
						to : list.to
					}
				} key={index} index={index} userClass={this} status={index === state.index ? 1 : 0} />
			);
		});
		return (
			<div className={`menu ${state.direction}`}>
				{
					state.direction === "horizontal" ? (
						<div className="w1200">
							{lists}
						</div>
					) : lists
				}
			</div>
		);
	}
}
Menu.defaultProps = {
	index : 0
};