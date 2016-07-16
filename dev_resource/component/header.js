import React, {Component} from "react";
export class TopNav extends Component{
	super(props){}
	render(){
		let option = this.props.option;
		return (
			<div className="topNav">
				<div className="w1200">
					{
						option.map((list, index) => {
							return list.set ? (
								<div className="supNav">
									<i className="column"></i>
									<a href={list.href}>
										{list.name}
									</a>
									<div className="subNav">
										{
											list.set.map((list, index) => {
												return (
													<div className="section" key={index}>
														<h1>
															<span>
																{list.method}
															</span>
															<strong>
																{list.name}
															</strong>
															<b>
																{list.description}
															</b>
														</h1>
														<h2>
															<span>
																{list.url}
															</span>
															{
																list.key && list.key.map((list, index) => {
																	return (
																		<b title={list.description}>
																			{list.name}
																		</b>
																	)
																})
															}
														</h2>
													</div>
												);
											})
										}
									</div>
								</div>
							) : (
								<a className="supNav" href={list.href}>
									{list.name}
								</a>
							);
						})
					}
				</div>
			</div>
		);
	}
};
TopNav.defaultProps = {
	option : [
		{
			name : "登录",
			href : "/signIn"
		},
		{
			name : "注册",
			href : "/signUp"
		},
		{
			name : "接口",
			href : "/interface",
			set : [
				{
					name : "获取数据",
					url : "/api/info/test",
					description : "学习ajax,获取数据",
					method : "get",
					key : [
						{
							name : "len",
							description : "number类型，返回值中的data长度"
						}
					]
				},
				{
					name : "提交数据",
					url : "/api/info/testPost",
					description : "学习ajax,提交数据",
					method : "post"
				},
				{
					name : "获取验证码",
					url : "/api/info/message",
					description : "学习ajax,表单学习",
					method : "get"
				},
				{
					name : "注册",
					url : "/api/info/signUp",
					description : "学习ajax,同步与异步提交表单",
					method : "post",
					key : [
						{
							name : "tel",
							description : "number类型，11位手机号码"
						},
						{
							name : "password",
							description : "string类型，密码，不能有空格"
						},
						{
							name : "code",
							description : "number类型，手机号后6位"
						}
					]
				}
			]
		}
	]
};
export class Header extends Component{
	super(props){}
	render(){
		return (
			<div className="header">
				<div className="w1200">
				</div>
			</div>
		);
	}
};
Header.defaultProps = {

};