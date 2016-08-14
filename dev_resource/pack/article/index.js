import React, {Component} from "react";
import {fetchList} from "./action";
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
class Home extends Component{
	constructor(props){
		super(props);
		this.state = props;
	}
	componentWillMount(){
		fetchList(data => this.setState({data}));
	}
	render(){
		let data = this.state.data;
		return (
			<div className="home full">
				<div className="w1200">
					{
						data.map((list, index) => (
							<div className="case" key={index}>
								<a href={`/article/${list._id}`}>
									<img src={list.image[0]} />
									<h1>
										{list.title}
									</h1>
								</a>
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
export class Page extends Component{
	render(){
		let data = this.props.data || [];
		return (
			<div className="page">
				<FixedNav />
				<Home data={data} />
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