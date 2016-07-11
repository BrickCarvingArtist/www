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
			res.set({
				"Access-Control-Allow-Origin" : "*",
				"Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept",
				"Access-Control-Allow-Methods" : "GET"
			}).json({
				code : 0,
				data : [
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
				],
				message : "success"
			});
		}
	}
];