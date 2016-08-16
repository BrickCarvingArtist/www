import React, {createFactory} from "react";
import {renderToString} from "react-dom/server";
import {ServerConfig} from "../../config";
import {Page as home} from "../../dev_resource/pack/home";
import {Page as article} from "../../dev_resource/pack/article";
import {Page as articleDetail} from "../../dev_resource/pack/article/detail";
import lost from "../../dev_resource/component/lost";
const Corp = "砖雕艺术馆",
	LocalServer = `http://${ServerConfig.host}:${ServerConfig.port}`,
	renderPage = (option) => {
		const style = option.style,
			script = option.script,
			title = option.title,
			keyword = option.keyword,
			description = option.description,
			page = option.page;
		return `
			<!DOCTYPE html>
			<html>
				<head>
					<meta charset="utf-8" />
					<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
					<meta name="viewport" content="width=1200" />
					<meta keywords="${keyword.join(", ")}" />
					<meta description="${description}" />
					<meta author="杨鹏程, BrickCarvingArtist" />
					<link rel="shortcut icon" type="image/ico" href="http://static.ikindness.cn/image/favicon.ico" />
					${
						style.map(list => {
							return `<link rel="stylesheet" href="${list}" />`
						})
					}
					<title>${title}</title>
					<body>
						<div class="main">
							${page}
						</div>
						<script src="/lib/dependencies.min.js"></script>
						${
							script.map(list => {
								return `<script src="${list}""></script>`
							})
						}
					</body>
				</head>
			</html>
		`;
	},
	Enum = [
		{
			route : "/",
			signType : [0, 1, 2],
			callback(req, res){
				res.end(renderPage({
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
				fetch(`${LocalServer}/api/article/fetch`).then(res => res.json()).then(data => {
					let _data = data.data;
					res.end(renderPage({
						style : [
							"/css/article.css"
						],
						script : [
							"/js/article.js"
						],
						title : `文章列表-${Corp}`,
						keyword : _data.map(list => {
							return list.title
						}),
						description : "砖雕艺术馆前端培训，砖雕艺术家的个人站",
						page : renderToString(createFactory(article)({
							data : _data
						}))
					}));
				});
			}
		},
		{
			route : "/article/:id",
			signType : [0, 1, 2],
			callback(req, res){
				fetch(`${LocalServer}/api/article/fetch/${req.params.id}`).then(res => res.json()).then(data => {
					let _data = data.data;
					if(data.code){
						res.redirect("/lost");
					}else{
						let _data = data.data;
						res.end(renderPage({
							style : [
								"/css/article.css"
							],
							script : [
								"/js/articleDetail.js"
							],
							title : `${_data.title}-${Corp}`,
							keyword : _data.keyword,
							description : _data.description,
							page : renderToString(createFactory(articleDetail)({
								data : _data
							}))
						}));
					}
				});
			}
		},
		{
			route : "*",
			signType : [0, 1, 2],
			callback(req, res){
				res.end(renderPage({
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