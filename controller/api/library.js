const data = [
	{
		id : 1,
		title : "高性能JavaScript",
		description : "",
		content : "",
		image : ["http://static.ikindness.cn/image/logo.png"]
	},
	{
		id : 2,
		title : "Maintainable JavaScript",
		description : "",
		content : "",
		image : ["http://static.ikindness.cn/image/logo.png"]
	},
	{
		id : 3,
		title : "Web性能权威指南",
		description : "",
		content : "",
		image : ["http://static.ikindness.cn/image/logo.png"]
	}
];
export default [
	{
		from : "fetch",
		method : "get",
		signType : [0, 1, 2],
		callback(req, res){
			let length = req.query.length;
			res.json({
				code : 0,
				data : length ? data.filter((list, index) => index < req.query.length) : data,
				message : "success"
			});
		}
	},
	{
		from : "fetch/:id",
		method : "get",
		signType : [0, 1, 2],
		callback(req, res){
			res.json({
				code : 0,
				data : data.filter(list => list.id == req.params.id)[0],
				message : "success"
			})
		}
	}
];