import React, {Component} from "react";
export default class Footer extends Component{
	super(props){}
	render(){
		let props = this.props,
			nav = props.nav,
			legal = props.legal;
		return (
			<div className="footer">
				<div className="w1200">
					<div className="top">
						{
							nav.map((list, index) => {
								return (
									<a href={list.href} key={index}>
										{list.name}
									</a>
								);
							})
						}
					</div>
					<div className="bottom">
						{legal.map((list, index) => {
							return (
								<p key={index}>
									<a href={list.href} key={index} dangerouslySetInnerHTML={{__html : list.name}}></a>
								</p>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
};
Footer.defaultProps = {
	nav : [
		{
			name : "公司简介",
			href : "/corporation"
		},
		{
			name : "个人中心",
			href : "/user"
		},
		{
			name : "帮助中心",
			href : "/help"
		},
		{
			name : "联系我们",
			href : "/contact"
		}
	],
	legal : [
		{
			name : "Copyright&copy;2015-2016 B.C.A. All Rights Reserved 砖雕艺术馆",
			href : "http://www.ikindness.cn/"
		},
		{
			name : "浙ICP备15038011号",
			href : "http://icp.chinaz.com/info?q=%E6%B5%99ICP%E5%A4%8715038011%E5%8F%B7"
		}
	]
};