import {Page as home} from "../../dev_resource/pack/home";
const Corp = "-砖雕艺术馆",
	ViewModel = "./index",
	Enum = [
		{
			route : "/",
			signType : [0, 1],
			callback(req, res, createFactory, renderToString){
				res.render(ViewModel , {
					style : [
						"/css/home.css"
					],
					script : [
						"/js/home.js"
					],
					title : `首页${Corp}`,
					page : renderToString(createFactory(home)({}))
				});
			}
		},
		{
			route : "*",
			signType : [0, 1, 2],
			callback(req, res, createFactory, renderToString){
				res.render(ViewModel , {
					style : [
						// "/css/column.css"
					],
					script : [
						// "/js/column.js"
					],
					title : `努力建设中...${Corp}`,
					page : "努力建设中..."//renderToString(createFactory(column)({}))
				});
			}
		}
	],
	Router = (router, createFactory, renderToString) => {
		Enum.map(list => {
			router.route(list.route).get((req, res) => {
				list.callback(req, res, createFactory, renderToString);
			});
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