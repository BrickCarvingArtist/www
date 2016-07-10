import {Route as RouteStatic} from "./static/index";
import {Route as RouteApi} from "./api/index";
let ligalRoute = [];
const assembleLigalRoute = (route, signType) => {
		return route.filter(list => {
			return ~list.signType.indexOf(signType);
		});
	},
	getLigalRoute = (signType, pathType) => {
		return assembleLigalRoute(pathType ? RouteApi : RouteStatic, signType);
	};
export default (router) => {
	let mongoPromise,
		specificOption,
		pathType;
	router
		.all("*", (req, res, next) => {
			pathType = ~req.path.search(/^\/api\/.*/);
			specificOption = getLigalRoute(req.session.name ? 1 : 0, pathType).filter(list => {
				return req.path === list.route && (req.method.toLowerCase() === list.method || "get");
			})[0];
			if(specificOption){
				next();
			}else{
				if(pathType){
					res.json({
						code : 1,
						message : "登录超时请刷新页面重新登录或无权限访问"
					});
				}else{
					res.redirect(`/?referer=${req.path}`);
				}
			}
		});
	return router;
};