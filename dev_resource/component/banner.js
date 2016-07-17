import React, {Component} from "react";
class Button extends Component{
	constructor(props){
		super(props);
		let userClass = this.props.userClass.props.userClass;
		this.handleClick = () => {
			userClass.setState({
				index : this.props.index
			});
		};
	}
	render(){
		let props = this.props,
			index = props.index,
			currentIndex = props.userClass.props.userClass.state.index;
		return (
			<em className={index === currentIndex ? "current" : null} key={index} onClick={this.handleClick}></em>
		);
	}
}
class Indicator extends Component{
	constructor(props){
		super(props);
	}
	render(){
		let userClass = this.props.userClass,
			option = userClass.props.option;
		return (
			<div className="indicator">
				{
					option.map((list, index) => {
						return (
							<Button index={index} userClass={this} key={index} />
						);
					})
				}
			</div>
		);
	}
}
export default class Banner extends Component{
	constructor(props){
		super(props);
		this.state = {
			index : 0
		};
	}
	auto(){
		let t, index,
			optionLen = this.props.option.length;
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
	componentDidMount(){
		this.auto();
	}
	render(){
		let option = this.props.option,
			currentIndex = this.state.index;
		return (
			<div className={`banner ${this.props.type}`}>
				{
					option.map((list, index) => {
						return (
							<a className={`img${index === currentIndex ? " current" : ""}`} title={list.name} href={list.anchorHref} style={
								{
									backgroundImage : `url(${list.imgSrc})`
								}
							} target="_blank" key={index}></a>
						);
					})
				}
				<Indicator userClass={this} />
			</div>
		);
	}
}
Banner.defaultProps = {
	option : [
		{
			name : "砖雕艺术馆",
			anchorHref : "/",
			imgSrc : "/image/banner/1.png"
		},
		{
			name : "砖雕科学馆",
			anchorHref : "http://tech.ikindness.cn/",
			imgSrc : "/image/banner/2.png"
		}
	]
};