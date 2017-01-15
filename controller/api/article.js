import mongoose from "mongoose";
import article from "../../../database/model/article";
const Article = article(mongoose);
export default [
	{
		from : "fetch",
		method : "get",
		signType : [0, 1, 2],
		async callback({query}, res){
			const {length} = query;
			try{
				res.json({
					code : 0,
					data : await Article.find().select("-content").limit(query.length || 100),
					message : "success"
				});
			}catch(err){
				res.json({
					code : 400,
					data : err,
					message : "failed"
				});
			}
		}
	},
	{
		from : "fetch/:id",
		method : "get",
		signType : [0, 1, 2],
		async callback(req, res){
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
		}
	}
];