import React, {Component} from "react";
export class TopNav extends Component{
	constructor(props){
		super(props);
	}
	render(){
		let option = this.props.option;
		return (
			<div className="topNav">
				<div className="w1200">
					{
						option.map((list, index) => {
							return list.set ? (
								<div className="supNav" key={index}>
									<i className="icon20 column"></i>
									<a href={list.href} target="_blank">
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
																		<b title={list.description} key={index}>
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
								<a className="supNav" href={list.href} target="_blank" key={index}>
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
			href : "http://auth.ikindness.cn/signIn"
		},
		{
			name : "注册",
			href : "http://auth.ikindness.cn/signUp"
		},
		{
			name : "接口",
			href : "/interface",
			set : [
				{
					name : "获取数据",
					url : "/api/test/get",
					description : "学习ajax，获取数据",
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
					url : "/api/test/post",
					description : "学习ajax，提交数据",
					method : "post",
					key : [
						{
							name : "任意参数",
							description : "任意类型,任意参数"
						}
					]
				},
				{
					name : "获取验证码",
					url : "/api/test/message",
					description : "学习ajax，表单学习",
					method : "get",
					key : [
						{
							name : "tel",
							description : "number类型，11位手机号码"
						}
					]
				},
				{
					name : "注册",
					url : "/api/test/signUp",
					description : "学习ajax，同步与异步提交表单",
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
				},
				{
					name : "获取游戏玩家信息",
					url : "/api/test/getGameInfo",
					description : "项目实战，游戏商城练习",
					method : "get",
					key : [
						{
							name : "qq",
							description : "number类型，5-10位qq号码"
						}
					]
				},
				{
					name : "获取游戏商城商品",
					url : "/api/test/getGameProduct",
					description : "项目实战，游戏商城练习",
					method : "get",
					key : [
						{
							name : "type",
							description : "number类型，1为生命，2为护甲，3为魔抗，4为攻击，5为魔法"
						},
						{
							name : "grade",
							description : "number类型，等级1-3"
						},
						{
							name : "status",
							description : "number类型，1为全部，2为可用，3为不可用"
						}
					]
				},
				{
					name : "购买游戏商城道具",
					url : "/api/test/gameBuy",
					description : "项目实战，游戏商城练习",
					method : "post",
					key : [
						{
							name : "qq",
							description : "number类型，5-10位qq号码"
						},
						{
							name : "productId",
							description : "number类型，商品id"
						},
						{
							name : "sum",
							description : "number类型，购买商品数量"
						}
					]
				},
				{
					name : "获取众筹列表",
					url : "/api/test/getFund",
					description : "项目实战，商品列表练习",
					method : "get",
					key : [
						{
							name : "type",
							description : "number类型, 商品类型"
						}
					]
				},
				{
					name : "获取用户信息",
					url : "/api/test/getInfo",
					description : "项目实战，商品筛选列表练习",
					method : "get",
					key : [
						{
							name : "userId",
							description : "number类型，用户id"
						}
					]
				},
				{
					name : "获取商品列表",
					url : "/api/test/getProduct",
					description : "项目实战，商品筛选列表练习",
					method : "get",
					key : [
						{
							name : "type",
							description : "number类型，商品类型"
						},
						{
							name : "min",
							description : "number类型，最低价格"
						},
						{
							name : "max",
							description : "number类型，最高价格"
						},
						{
							name : "sort",
							description : "number类型，0为无序，1为价格升序，2为价格降序"
						}
					]
				},
				{
					name : "购买商品",
					url : "/api/test/buy",
					description : "项目实战，商品筛选列表练习",
					method : "post",
					key : [
						{
							name : "userId",
							description : "number类型，用户id"
						},
						{
							name : "product",
							description : "array类型，商品信息，元素为number类型，[{productId : 商品id, sum : 购买商品数量}]"
						}
					]
				}
			]
		}
	]
};
class Search extends Component{
	render(){
		return (
			<div className="search"></div>
		);
	}
}
export class Header extends Component{
	constructor(props){
		super(props);
	}
	render(){
		let option = this.props.option.reverse();
		return (
			<div className="header">
				<div className="w1200">
					<div className="logoPart">
						<a className="logo" title="砖雕艺术馆" href="/"></a>
						<Search />
						{
							option.map((list, index) => {
								return (
									<a className="anchor" href={list.href} target="_blank" key={index}>
										{list.name}
									</a>
								);
							})
						}
					</div>
				</div>
			</div>
		);
	}
};
Header.defaultProps = {
	option : [
		{
			name : "艺术馆",
			href : "/"
		},
		{
			name : "科技馆",
			href : "http://tech.ikindness.cn/"
		},
		{
			name : "美食馆",
			href : "http://food.ikindness.cn/"
		},
		{
			name : "运动馆",
			href : "http://sport.ikindness.cn/"
		},
		{
			name : "App",
			href : "http://app.ikindness.cn/"
		}
	]
};