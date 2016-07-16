export default [
	{
		from : "get",
		method : "get",
		cross : 1,
		signType : [0, 1, 2],
		callback(req, res){
			const data = [
				{
					name : "我是图片1",
					anchorHref : "https://www.baidu.com/",
					imageUrl : "http://www.ikindness.cn/image/banner/1.jpg"
				},
				{
					name : "我是图片2",
					anchorHref : "http://www.qq.com/",
					imageUrl : "http://www.ikindness.cn/image/banner/2.jpg"
				},
				{
					name : "我是图片3",
					anchorHref : "https://www.taobao.com/",
					imageUrl : "http://www.ikindness.cn/image/banner/3.jpg"
				},
				{
					name : "我是图片4",
					anchorHref : "https://www.tmall.com/",
					imageUrl : "http://www.ikindness.cn/image/banner/4.jpg"
				},
				{
					name : "我是图片5",
					anchorHref : "http://www.163.com/",
					imageUrl : "http://www.ikindness.cn/image/banner/5.jpg"
				},
				{
					name : "我是图片6",
					anchorHref : "http://lol.qq.com/",
					imageUrl : "http://www.ikindness.cn/image/banner/6.jpg"
				}
			];
			let len = parseInt(req.query.len);
			res.json({
				code : 0,
				data : isNaN(len) ? data : data.filter(function(list, index){
					return index < len;
				}),
				message : "success"
			});
		}
	},
	{
		from : "post",
		method : "post",
		cross : 1,
		signType : [0, 1, 2],
		callback(req, res){
			let body = req.body;
			res.json({
				code : 0,
				data : body,
				message : "success"
			});
		}
	},
	{
		from : "message",
		method : "get",
		cross : 1,
		signType : [0, 1, 2],
		callback(req, res){
			let tel = req.query.tel;
			res.json(tel && ~tel.search(/^\d{11}$/) ? {
				code : 0,
				data : tel.substring(5, 11),
				message : "success"
			} : {
				code : 400,
				data : null,
				message : "wrong"
			});	
		}
	},
	{
		from : "signUp",
		method : "post",
		cross : 1,
		signType : [0, 1, 2],
		callback(req, res){
			let body = req.body,
				tel = body.tel,
				password = body.password,
				code = body.code;
			res.json(tel && password && code && ~tel.search(/^\d{11}$/) && !~password.search(/\s/g) && code === tel.substring(5, 11) ? {
				code : 0,
				data : `你的手机号${tel}注册成功！`,
				message : "success"
			} : {
				code : 400,
				data : null,
				message : "wrong"
			});
		}
	}
];