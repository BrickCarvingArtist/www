import React, {Component} from "react";
import {TopNav, Header, Nav} from "../../component/header";
import Banner from "../../component/banner"
import Footer from "../../component/footer";
class Category extends Component{
	constructor(props){
		super(props);
	}
	render(){
		let option = this.props.option;
		return (
			<div className="category">
				{
					option.map((list, index) => {
						return (
							<div className="section" key={index}>
								<a className="sup">
									{list.name}
								</a>
								{
									list.set.map((list, index) => {
										return (
											<a className="sub" href={list.href} target="_blank" key={index}>
												{list.name}
											</a>
										);
									})
								}
							</div>
						);
					})
				}
			</div>
		);
	}
}
Category.defaultProps = {
	option : [
		{
			name : "栏目",
			href : "/column",
			set : [
				{
					name : "子栏目",
					href : "/column"
				},
				{
					name : "子栏目",
					href : "/column"
				},
				{
					name : "子栏目",
					href : "/column"
				}
			]
		},
		{
			name : "栏目",
			href : "/column",
			set : [
				{
					name : "子栏目",
					href : "/column"
				},
				{
					name : "子栏目",
					href : "/column"
				},
				{
					name : "子栏目",
					href : "/column"
				}
			]
		},
		{
			name : "栏目",
			href : "/column",
			set : [
				{
					name : "子栏目",
					href : "/column"
				},
				{
					name : "子栏目",
					href : "/column"
				},
				{
					name : "子栏目",
					href : "/column"
				}
			]
		},
		{
			name : "栏目",
			href : "/column",
			set : [
				{
					name : "子栏目",
					href : "/column"
				},
				{
					name : "子栏目",
					href : "/column"
				},
				{
					name : "子栏目",
					href : "/column"
				}
			]
		},
		{
			name : "栏目",
			href : "/column",
			set : [
				{
					name : "子栏目",
					href : "/column"
				},
				{
					name : "子栏目",
					href : "/column"
				},
				{
					name : "子栏目",
					href : "/column"
				}
			]
		},
		{
			name : "栏目",
			href : "/column",
			set : [
				{
					name : "子栏目",
					href : "/column"
				},
				{
					name : "子栏目",
					href : "/column"
				},
				{
					name : "子栏目",
					href : "/column"
				}
			]
		},
		{
			name : "栏目",
			href : "/column",
			set : [
				{
					name : "子栏目",
					href : "/column"
				},
				{
					name : "子栏目",
					href : "/column"
				},
				{
					name : "子栏目",
					href : "/column"
				}
			]
		}
	]
};
export class Page extends Component{
	render(){
		return (
			<div className="page">
				<TopNav />
				<Header />
				<Nav />
				<div className="facade">
					<Banner type="fade" />
					<div className="w1200">
						<Category />
					</div>
				</div>
				<Footer />
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