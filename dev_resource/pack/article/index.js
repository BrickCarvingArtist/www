import React, {Component} from "react";
import {Router, Route, hashHistory, Link} from "react-router";
import fetch from "isomorphic-fetch";
class FixedNav extends Component{
	render(){
		return (
			<div className="fixedNav full">
				<div className="w1200">
					<a className="btn left" href="/">首页</a>
					<Link className="btn left" to="/">精选</Link>
					<a className="btn right">顶部</a>
				</div>
			</div>
		);
	}
}
class Home extends Component{
	constructor(){
		super();
		this.state = {};
	}
	componentWillMount(){
		fetch("/api/article/fetch").then(res => {
			return res.status === 200 ? res.json() : {
				code : 400,
				data : null,
				message : "wrong"
			};
		}).then(data => {
			this.setState({
				data : data.data
			});
		});
	}
	render(){
		let data = this.state.data || [];
		return (
			<div className="home full">
				<div className="w1200">
					{
						data.map((list, index) => (
							<div className="case" key={index}>
								<Link to={`${list.id}`}>
									<img src={list.image[0]} />
									<h1>
										{list.title}
									</h1>
								</Link>
								<p>
									{list.description}
								</p>
							</div>
						))
					}
				</div>
			</div>
		);
	}
}
class Article extends Component{
	constructor(props){
		super(props);
		this.state = props;
	}
	componentWillMount(){
		fetch(`/api/article/fetch/${this.props.params.id}`).then(res => (
			res.status === 200 ? res.json() : {
				code : 400,
				data : null,
				message : "wrong"
			}
		)).then(data => {
			this.setState({
				option : data.data
			});
		});
	}
	render(){
		let option = this.state.option,
			title = option ? option.title : "";
		return (
			<div className="article full">
				<div className="w1200">
					<div className="section">
						<h1>
							{title}
						</h1>
						{
							option ? option.image.map((list, index) => (
								<img src={list} title={title} alt={title} />
							)) : null
						}
						<div dangerouslySetInnerHTML={
							{
								__html : option ? option.content : ""
							}
						}></div>
					</div>
				</div>
			</div>
		);
	}
}
class Page extends Component{
	render(){
		return (
			<div className="page">
				<FixedNav />
				{this.props.children}
			</div>
		);
	}
}
export const routes = (
	<Route component={Page} keywords={
		["Chrome", "浏览器", "控制台", "报错信息", "js", "javascript", "JavaScript"]
	}>
		<Route path="/" component={Home} />
		<Route path=":id" component={Article} />
	</Route>
);
export const init = render => render(
	<Router routes={routes} history={hashHistory} />,
	document.querySelector(".main")
);