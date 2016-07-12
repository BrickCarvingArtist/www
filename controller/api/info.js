export default [
	{
		from : "test",
		method : "get",
		signType : [0, 1, 2],
		callback(req, res){
			// let referer = req.headers.referer;
			// if(referer && ~referer.search(/1|(^http:\/\/www.ikindness.cn)/)){
			// 	res.set({
			// 		"Content-Type" : "application/json; charset=utf-8"
			// 	}).send(`${req.query.callback}({code:0,data:[{a:1,b:2}],message:"success"})`);
			// }else{
			// 	res.json({
			// 		code : 5,
			// 		message : "非法请求"
			// 	});
			// }
			const data = [
				{
					name : "我是图片1",
					anchorHref : "https://www.baidu.com/",
					imageUrl : "/case1/image/banner/1.jpg"
				},
				{
					name : "我是图片2",
					anchorHref : "http://www.qq.com/",
					imageUrl : "/case1/image/banner/2.jpg"
				},
				{
					name : "我是图片3",
					anchorHref : "https://www.taobao.com/",
					imageUrl : "/case1/image/banner/3.jpg"
				},
				{
					name : "我是图片4",
					anchorHref : "https://www.tmall.com/",
					imageUrl : "/case1/image/banner/4.jpg"
				},
				{
					name : "我是图片5",
					anchorHref : "http://www.163.com/",
					imageUrl : "/case1/image/banner/5.jpg"
				},
				{
					name : "我是图片6",
					anchorHref : "http://lol.qq.com/",
					imageUrl : "/case1/image/banner/6.jpg"
				},
				{
					name : "我是图片7",
					anchorHref : "https//www.douyu.com/",
					imageUrl : "/case1/image/banner/7.jpg"
				}
			];
			let len = parseInt(req.query.len);
			res.set({
				"Access-Control-Allow-Origin" : "*",
				"Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept",
				"Access-Control-Allow-Methods" : "GET"
			}).json({
				code : 0,
				data : isNaN(len) ? data : data.filter(function(list, index){
					return index < len;
				}),
				message : "success"
			});
		}
	},
	{
		from : "testPost",
		method : "post",
		signType : [0, 1, 2],
		callback(req, res){
			let body = req.body;
			res.set({
				"Access-Control-Allow-Origin" : "*",
				"Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept",
				"Access-Control-Allow-Methods" : "POST"
			}).json({
				code : 0,
				data : body,
				message : "success"
			});
		}
	},
	{
		from : "message",
		method : "get",
		signType : [0, 1, 2],
		callback(req, res){
			let tel = req.query.tel;
			res.set({
				"Access-Control-Allow-Origin" : "*",
				"Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept",
				"Access-Control-Allow-Methods" : "GET"
			});
			if(tel && ~tel.search(/^\d{11}$/)){
				res.json({
					code : 0,
					data : parseInt(tel.substring(5, 11)),
					message : "success"
				});	
			}else{
				res.json({
					code : 400,
					data : null,
					message : "wrong"
				});
			}
		}
	},
	{
		from : "signUp",
		method : "post",
		signType : [0, 1, 2],
		callback(req, res){
			let body = req.body,
				tel = body.tel,
				password = body.password,
				code = body.code;
			res.set({
				"Access-Control-Allow-Origin" : "*",
				"Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept",
				"Access-Control-Allow-Methods" : "POST"
			});
			if(tel && password && code && ~tel.search(/^\d{11}$/) || ~password.search(/^\s*/) && code === tel.substring(5, 11)){
				res.json({
					code : 0,
					data : parseInt(tel.substring(5, 11)),
					message : "success"
				});
			}else{
				res.json({
					code : 400,
					data : `你的手机号{tel}注册成功！`,
					message : "wrong"
				});
			}
		}
	}
];