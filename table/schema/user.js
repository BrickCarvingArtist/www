import {Schema} from "mongoose";
import UserFunction from "../function/user";
const User = new Schema({
	id : {
		type : Number,
		reqired : 1
	},
	name : {
		type : String,
		requried : 1
	},
	password : {
		type : String,
		required : 1
	}
});
export default UserFunction(User);