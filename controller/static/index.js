import React, {createFactory} from "react";
import {renderToString} from "react-dom/server";
import {ServerConfig} from "../../config";
import template from "./template";
import {Page as home} from "../../dev_resource/pack/home";
import {Page as article} from "../../dev_resource/pack/article";
import {Page as articleDetail} from "../../dev_resource/pack/article/detail";
import lost from "../../dev_resource/component/lost";
const Corp = "砖雕艺术馆",
	LocalServer = `http://${ServerConfig.host}:${ServerConfig.port}`,
	Enum = [
		{
			route : "/",
			signType : [0, 1, 2],
			callback(req, res){
				res.end(template({
					style : [
						"/css/home.css"
					],
					script : [
						"/js/home.js"
					],
					title : `${Corp}`,
					keyword : ["ikindness", "砖雕艺术家", "砖雕艺术馆", "前端", "前端开发", "前端培训"],
					description : "砖雕艺术馆前端培训，砖雕艺术家的个人站",
					page : renderToString(createFactory(home)())
				}));
			}
		},
		{
			route : "/article",
			signType : [0, 1, 2],
			callback(req, res){
				(async () => {
					try{
						const {data} = await fetch(`${LocalServer}/api/article/fetch`).then(res => res.json()).then();
						res.end(template({
							style : [
								"/css/article.css"
							],
							script : [
								"/js/article.js"
							],
							title : `文章列表-${Corp}`,
							keyword : data.map(list => {
								return list.title
							}).join(" ,"),
							description : "砖雕艺术馆前端培训，砖雕艺术家的个人站",
							page : renderToString(createFactory(article)({
								data
							}))
						}));
					}catch(err){
						res.json({
							code : 400,
							data : err,
							message : "请求失败"
						});
					}
				})();
			}
		},
		{
			route : "/article/:id",
			signType : [0, 1, 2],
			callback(req, res){
				(async () => {
					try{
						const {data} = await fetch(`${LocalServer}/api/article/fetch/${req.params.id}`).then(res => res.json()).then()
						res.end(template({
							style : [
								"/css/article.css"
							],
							script : [
								"/js/articleDetail.js"
							],
							title : `${data.title}-${Corp}`,
							keyword : data.keyword,
							description : data.description,
							page : renderToString(createFactory(articleDetail)({
								data
							}))
						}));
					}catch(err){
						res.json({
							code : 0,
							data : err,
							message : "请求失败"
						});
					}
				})();
			}
		},
		{
			route : "*",
			signType : [0, 1, 2],
			callback(req, res){
				res.end(template({
					style : [],
					script : [],
					title : `努力建设中-${Corp}`,
					keyword : ["ikindness", "砖雕艺术家", "砖雕艺术馆", "前端", "前端开发", "前端培训"],
					description : "砖雕艺术馆前端培训，砖雕艺术家的个人站",
					page : renderToString(createFactory(lost)())
				}));
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