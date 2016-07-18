import {requestJavaServer} from "./util";
import info from "./info";
import user from "./user";
import manage from "./manage";
import stream from "./stream";
import upload from "./upload";
import message from "./message";
import test from "./test";
const
	Enum = {
		info,
		user,
		manage,
		stream,
		upload,
		message,
		test
	},
	Route = user.concat(manage).concat(stream).concat(message),
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