const Corp = "-砖雕艺术馆",
	ViewModel = "./index",
	Enum = [
		{
			route : "/",
			signType : [0, 1],
			callback(req, res){
				res.render(ViewModel , {
					style : [
						"/css/home.css"
					],
					script : [
						/*"/js/home.js"*/
					],
					title : `首页${Corp}`,
					page : "<center>浙ICP备15038011号</center>"
				});
			}
		},
		{
			route : "/user",
			signType : [0, 1],
			callback(req, res){
				res.render(ViewModel , {
					style : [
						"/css/user.css"
					],
					script : [
						"/js/user.js"
					],
					title : `安全中心${Corp}`,
					page : "维护更新中"
				});
			}
		},
		{
			route : "/manage/corporation",
			signType : [2],
			callback(req, res){
				res.render(ViewModel, {
					style : [
						"/css/corporation.css"
					],
					script : [
						"/lib/jquery.form@3.51.0.min.js",
						"/js/corporation.js"
					],
					title : `企业信息${Corp}`,
					page : "维护更新中"
				});
			}
		},
		{
			route : "/manage/project",
			signType : [2],
			callback(react, reactDOMServer, req, res){
				res.render(ViewModel, {
					style : [
						"/css/project.css"
					],
					script : [
						"/lib/jquery.form@3.51.0.min.js",
						"/js/project.js"
					],
					title : `我的项目${Corp}`,
					page : "维护更新中"
				});
			}
		},
		{
			route : "/manage/bill",
			signType : [2],
			callback(req, res){
				res.render(ViewModel, {
					style : [
						"/css/bill.css"
					],
					script : [
						"/lib/jquery.form@3.51.0.min.js",
						"/js/bill.js"
					],
					title : `我的订单${Corp}`,
					page : "维护更新中"
				});
			}
		},
		{
			route : "/manage/loan",
			signType : [2],
			callback(req, res){
				res.render(ViewModel, {
					style : [
						"/css/loan.css"
					],
					script : [
						"/js/loan.js"
					],
					title : `我的放款${Corp}`,
					page : "维护更新中"
				});
			}
		},
		{
			route : "/manage/contract",
			signType : [2],
			callback(req, res){
				res.render(ViewModel, {
					style : [
						"/css/contract.css"
					],
					script : [
						"/js/contract.js"
					],
					title : `我的合同${Corp}`,
					page : "维护更新中"
				});
			}
		},
		{
			route : "/message/entrance",
			signType : [2],
			callback(req, res){
				res.render(ViewModel, {
					style : [
						"/css/messageentrance.css"
					],
					script : [
						"/js/messageentrance.js"
					],
					title : `合同签约-短信验证${Corp}`,
					page : "维护更新中"
				});
			}
		},
		{
			route : "/manage/manufacturer",
			signType : [2],
			callback(req, res){
				res.render(ViewModel, {
					style : [
						"/css/manufacturer.css"
					],
					script : [
						"/lib/jquery.form@3.51.0.min.js",
						"/js/manufacturer.js"
					],
					title : `合作厂家${Corp}`,
					page : "维护更新中"
				});
			}
		}
	],
	Router = (router) => {
		Enum.map(list => {
			router.route(list.route).get(list.callback);
		});
		return router;
	};
let Route = [];
Enum.map(list => {
	Route.push({
		route : list.route,
		signType : list.signType
	});
});
export {
	Route,
	Router 
};