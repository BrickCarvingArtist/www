import {requestJavaServer} from "./util";
import article from "./article";
import news from "./news";
import library from "./library";
import stream from "./stream";
import upload from "./upload";
import other from "./other";
import test from "./test";
const
	Enum = {
		article,
		news,
		library,
		stream,
		upload,
		other,
		test
	},
	Route = article.concat(news).concat(library).concat(stream).concat(upload).concat(other).concat(test),
	Router = (router) => {
		let reqType;
		for(let i in Enum){
			reqType = `/api/${i}/`;
			Enum[i].map(list => {
				router.route(`${reqType}${list.from}`)[list.method]((req, res) => {
					list.cross && res.set({
						"Access-Control-Allow-Origin" : "*",
						"Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept",
						"Access-Control-Allow-Methods" : list.method
					});
					list.callback(req, res);
				});
			});
		}
		return router;
	};
for(let i in Enum){
	Enum[i].map(list => {
		Route.push({
			route : `/api/${i.toLowerCase()}/${list.from}`,
			method : list.method,
			signType : list.signType
		});
	});
}
export {
	Route,
	Router
};