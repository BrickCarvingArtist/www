const Validate = {
	store : {},
	noEmpties(value, label){
		return {
			code : value.length ? 1 : 0,
			message : `您的${label}不能为空`
		};
	},
	noBlank(value, label){
		return {
			code : ~value.search(/\s/g) ? 0 : 1,
			message : `您的${label}不能包含空格`
		}
	},
	noScript(value){
		return {
			code : ~value.search(/<script.*>|%3Csciprt.*%3E|&lt;script.*&gt;/ig) ? 0 : 1,
			message : `请勿输入可疑代码`
		}
	},
	setSetting(setting){
		this.setting = setting;
	},
	validate(id, label, value, option){
		let result;
		for(let i of option){
			result = Validate[i](value, label);
			this.store[id] = result.code ? value : undefined;
			if(!result.code){
				return this.fail(result.message);
			}
		}
		return {
			status : 1,
			value
		};
	},
	fail(message){
		return {
			status : 0,
			value : message
		};
	},
	getIsDone(){
		for(let i of this.setting){
			if(!this.store[i]){
				return 0;
			}
		}
		return 1;
	}
};
export default Validate;