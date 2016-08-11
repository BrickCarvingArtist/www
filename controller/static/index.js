import React, {createFactory} from "react";
import {renderToString} from "react-dom/server";
import {match, RouterContext} from "react-router";
import {Page as home} from "../../dev_resource/pack/home";
import {routes as article} from "../../dev_resource/pack/article";
import lost from "../../dev_resource/component/lost";
const Corp = "砖雕艺术馆",
	ViewModel = "./index",
	Enum = [
		{
			route : "/",
			signType : [0, 1, 2],
			callback(req, res){
				res.render(ViewModel , {
					style : [
						"/css/home.css"
					],
					script : [
						"/js/home.js"
					],
					title : `${Corp}`,
					keywords : ["ikindness", "砖雕艺术家", "砖雕艺术馆", "前端", "前端开发", "前端培训"].join(", "),
					description : "砖雕艺术馆前端培训，砖雕艺术家的个人站",
					page : renderToString(createFactory(home)())
				});
			}
		},
		{
			route : "/article",
			signType : [0, 1, 2],
			callback(req, res){
				match({
					routes : article,
					location : req.url
				}, (error, redirectLocation, renderProps) => {
					res.render(ViewModel, {
						style : [
							"/css/article.css"
						],
						script : [
							"/js/article.js"
						],
						title : `文章-${Corp}`,
						keywords : renderProps.routes[0].keywords.join(", "),
						description : "砖雕艺术馆前端培训，砖雕艺术家的个人站",
						page : renderToString(<RouterContext {...renderProps} />)
					});
				});
			}
		},
		{
			route : "*",
			signType : [0, 1, 2],
			callback(req, res){
				res.render(ViewModel , {
					style : [
						// "/css/column.css"
					],
					script : [
						// "/js/lost.js"
					],
					title : `努力建设中-${Corp}`,
					page : renderToString(createFactory(lost)())
				});
			}
		}
	],
	Router = router => {
		Enum.map(list => {
			router.route(list.route).get((req, res) => {
				list.callback(req, res);
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