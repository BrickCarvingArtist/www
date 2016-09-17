import mongoose from "mongoose";
import article from "../../../database/model/article";
const Article = article(mongoose);
export default [
	{
		from : "fetch",
		method : "get",
		signType : [0, 1, 2],
		callback(req, res){
			let length = req.query.length;
			(async () => {
				try{
					res.json({
						code : 0,
						data : await Article.find().select("-content"),
						message : "success"
					});
				}catch(err){
					res.json({
						code : 400,
						data : err,
						message : "failed"
					});
				}
			})();
		}
	},
	{
		from : "fetch/:id",
		method : "get",
		signType : [0, 1, 2],
		callback(req, res){
			(async () => {
				try{
					res.json({
						code : 0,
						data : await Article.where({
							_id : req.params.id
						}).findOne().select("-__v"),
						message : "获取文章详情成功"
					});
				}catch(err){
					res.json({
						code : 400,
						data : err,
						message : "no such data searched"
					});
				}
			})();
		}
	}
];