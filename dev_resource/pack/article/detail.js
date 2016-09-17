import React, {Component} from "react";
import fetch from "isomorphic-fetch";
import marked from "../library/markdown";
class FixedNav extends Component{
	render(){
		return (
			<div className="fixedNav full">
				<div className="w1200">
					<a className="btn left" href="/">首页</a>
					<a className="btn left" href="/article">精选</a>
					<a className="btn right">顶部</a>
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
		let data = this.state.data;
		fetch(`/api/article/fetch/${data ? data._id : location.pathname.replace(/\/.*\//g, "")}`).then(res => res.json()).then(data => {
			this.setState({
				data : data.data
			});
		});
	}
	render(){
		let data = this.state.data || {},
			title = data.title;
		return (
			<div className="article full">
				<div className="w1200">
					{
						data.image ? data.image.map((list, index) => (
							<img src={list} title={title} alt={title} key={index} />
						)) : null
					}
					<div dangerouslySetInnerHTML={
						{
							__html : data.content ? marked(data.content) : ""
						}
					}></div>
				</div>
			</div>
		);
	}
}
export class Page extends Component{
	render(){
		let data = this.props.data;
		return (
			<div className="page">
				<FixedNav />
				<Article data={data} />
			</div>
		);
	}
}
export const init = render => {
	render(
		<Page />,
		document.querySelector(".main")
	);
};