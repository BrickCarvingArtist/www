export default [
	{
		from : "getBanner",
		method : "get",
		signType : [0, 1, 2],
		callback(req, res){
			res.json({
				code : 0,
				data : [
					{
						name : "砖雕艺术馆",
						anchorHref : "/",
						imgSrc : "http://static.ikindness.cn/image/banner/1.png"
					},
					{
						name : "砖雕科学馆",
						anchorHref : "http://tech.ikindness.cn/",
						imgSrc : "http://static.ikindness.cn/image/banner/2.png"
					}
				],
				message : "success"
			});
		}
	}
];