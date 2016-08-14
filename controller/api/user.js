import mongoose from "mongoose";
import {parse} from "cookie";
import {MongoConfig} from "../../config";
import {BaseUrl, pureTransmit} from "./util";
import UserSchema from "../../table/schema/user";
const User = mongoose.model("User", UserSchema);
export default [
	{
		from : "signup",
		method : "post",
		signType : [0],
		callback(req, res){
			let body = req.body;
			User.findByName(body.user, (err, data) => {
				if(err){
					res.json({
						code : 1,
						message : "您的信息输入有误,请重新输入"
					});
				}else{
					if(data){
						res.json({
							code : 2,
							message : `用户名${body.user}已被注册`
						});
					}else{
						new User({
							name : body.user,
							password : body.password
						}).save((err, data) => {
							if(err){
								res.json({
									code : 3,
									message : "系统繁忙"
								});
							}else{
								res.json({
									code : 0,
									message : "注册成功"
								});
							}
						});
					}
				}
			});
		}
	},
	{
		from : "signin",
		method : "post",
		signType : [0],
		callback(req, res){
			let body = req.body;
			User.findOne({
				name : body.user
			}, (err, data) => {
				if(err){
					res.json({
						code : 1,
						message : "您的信息输入有误,请重新输入"
					});
				}else{
					if(data){
						data.matchPassword(body.password, (err, isMatched) => {
							if(err){
								res.json({
									code : 3,
									message : "系统繁忙"
								});
							}else{
								if(isMatched){
									let user = data.name;
									req.session.name = user;
									res.cookie("iku", user).json({
										code : 0,
										message : "登录成功"
									});
								}else{
									res.json({
										code : 2,
										message : "您输入的用户账号或密码有误，请重新输入"
									});
								}
							}
						});
					}
				}
			});
		}
	},
	{
		from : "signout",
		method : "get",
		signType : [1, 2],
		callback(req, res){
			req.session.destroy();
			res.clearCookie("ik").clearCookie("iku").json({
				code : 0,
				message : "期待下次您的下次登录"
			});
		}
	},
	{
		from : "reset",
		to : "",
		method : "get",
		signType : [1, 2],
		callback(err, response, body, req, res){

		}
	},
	{
		from : "supplier/category",
		to : `${BaseUrl}cif/front/member/category`,
		method : "get",
		signType : [1, 2],
		callback : pureTransmit
	},
	{
		from : "supplier/list",
		to : `${BaseUrl}cif/front/supplier/list`,
		method : "get",
		signType : [1, 2],
		callback : pureTransmit
	},
	{
		from : "join",
		to : `${BaseUrl}cif/front/member/apply`,
		method : "post",
		signType : [1],
		callback : pureTransmit
	},
];