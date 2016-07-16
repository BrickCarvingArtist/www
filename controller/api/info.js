export default [
	{
		from : "test",
		method : "get",
		signType : [0, 1, 2],
		callback(req, res){
			let referer = req.headers.referer;
			if(referer && ~referer.search(/1|(^http:\/\/www.ikindness.cn)/)){
				res.set({
					"Content-Type" : "application/json; charset=utf-8"
				}).send(`${req.query.callback}({code:0,data:[{a:1,b:2}],message:"success"})`);
			}else{
				res.json({
					code : 5,
					message : "非法请求"
				});
			}
		}
	}
];