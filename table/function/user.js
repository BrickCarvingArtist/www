import {genSalt, hash, compare} from "bcrypt";
export default Schema => {
	Schema.pre("save", function(next){
		genSalt(10, (err, salt) => {
			if(err){
				next(err);
			}else{
				hash(this.password, salt, (err, result) => {
					if(err){
						next(err);
					}else{
						this.password = result;
						next();
					}
				});
			}
		});
	});
	Schema.methods = {
		matchPassword(password, callback){
			compare(password, this.password, (err, isMatched) => {
				if(err){
					return callback(err);
				}else{
					callback(null, isMatched);
				}
			});
		}	
	};
	Schema.statics = {
		fetch(callback){
			return this
				.find({})
				.exec(callback);
		},
		findByName(name, callback){
			return this
				.findOne({
					name
				})
				.select("-id -__v")
				.exec(callback);
		},
		findById(id, callback){
			return this
				.find({
					id
				})
				.select("-id -__v")
				.exec(callback);
		}
	};
	return Schema;
};