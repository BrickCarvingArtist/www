const data = [
	{
		id : 1,
		title : "砖雕艺术家的前端课程简介",
		description : "",
		content : "",
		image : []
	},
	{
		id : 2,
		title : "Chrome浏览器控制台报错信息汇总",
		description : "",
		content : "<h2>1.<strong>Uncaught Error</strong><em>未被catch捕获的错误</em></h2>"
			+ "<p>错误代码:throw Error(233)</p>"
			+ "<p>报错信息:<strong>Uncaught Error: 233</strong></p>"
			+ "<p>解决方案:<b>避免程序进入抛错误的逻辑。</b></p>"
			+ "<h2>2.<strong>Uncaught ReferenceError</strong><em>未被catch捕获的引用错误</em></h2>"
			+ "<p>错误代码:sixSixSix666++</p>"
			+ "<p>报错信息:<strong>Uncaught ReferenceError: sixSixSix666 is not defined</strong></p>"
			+ "<p>解决方案:<b>sixSixSix是未被定义的。在使用变量前先定义，检查变量名是否错误书写。</b></p>"
			+ "<p>错误代码:233=666</p>"
			+ "<p>报错信息:<strong>Uncaught ReferenceError: Invalid left-hand assignment</strong></p>"
			+ "<p>解决方法:<b>赋值数据给不能被赋值的等号左侧表达式是无效操作。没有这种缩写代码表达式的语法，使用正确的语法编写代码</b></p>"
			+ "<p>错误代码:666++</p>"
			+ "<p>报错信息:<strong>Uncaught ReferenceError: Invalid left-hand side expression in postfix operation</strong></p>"
			+ "<p>解决方法:<b>后缀表达式语法写错。没有这种缩写代码表达式的语法，使用正确的语法编写代码。</b></p>"
			+ "<p>错误代码:++233</p>"
			+ "<p>报错信息:<strong>Uncaught ReferenceError: Invalid left-hand side expression in prefix operation</strong></p>"
			+ "<p>解决方法:<b>前缀表达式语法错误。没有这种缩写代码表达式的语法，使用正确的语法编写代码</b></p>"
			+ "<h2>3.<strong>Uncaught TypeError</strong><em>未被catch捕获的类型错误</em></h2>"
			+ "<p>错误代码:window.sixSixSix666.twoThreeThree233++</p>"
			+ "<p>报错信息:<strong>Uncaught TypeError: Cannot read property 'twoThreeThree233' of undefined</strong></p>"
			+ "<p>解决方案:<b>无法读取到undefined的twoThreeThree233属性。检查调用属性的对象是否获取到。</b></p>"
			+ "<p>错误代码:sixSixSix666 = null; sixSixSix666.twoThreeThree233++</p>"
			+ "<p>报错信息:<strong>Uncaught TypeError: Cannot read property 'twoThreeThree233' of null</strong></p>"
			+ "<p>解决方案:<b>无法读取到undefined的twoThreeThree233属性。检查调用属性的对象是否存在。</b></p>"
			+ "<p>错误代码:666()</p>"
			+ "<p>报错信息:<strong>Uncaught TypeError: 666 is not a function</strong></p>"
			+ "<p>解决方案:<b>666不是一个方法。请检查报错处被以方法形式执行调用的表达式。</b></p>"
			+ "<p>错误代码:var a = 1; new a()</p>"
			+ "<p>报错信息:<strong>Uncaught TypeError: a is not a constructor</strong></p>"
			+ "<p>解决方案:<b>a不是一个构造函数。请检查变量a是否是一个可被用作函数的方法。</b></p>"
			+ "<p>错误代码:Number.prototype.toString(\"123\")</p>"
			+ "<p>报错信息:<strong>Uncaught TypeError: String.prototype.toString is not generic</strong></p>"
			+ "<p>解决方案:<b>String.prototype.toString不是一个范型。使用该方法强制要求你传入它需要你传入的数据类型的数据。</b></p>"
			+ "<p>错误代码:Array.prototype.toString(null)</p>"
			+ "<p>报错信息:<strong>Uncaught TypeError: Cannot convert undefined or null to object</strong></p>"
			+ "<p>解决方案:<b>不能将undefined或者null转换为一个object。请修改传入调用执行此方法的参数。</b></p>"
			+ "<h2>4.<strong>Uncaught SyntaxError</strong><em>未被catch捕获的语法错误</em></h2>"
			+ "<p>错误代码:233.233.233</p>"
			+ "<p>报错信息:<strong>Uncaught SyntaxError: Unexpected number</strong></p>"
			+ "<p>解决方法:<b>不被期望的数字。没有.数字来获取对象的属性值的语法，使用正确的语法编写代码。</b></p>"
			+ "<p>错误代码:function\"\"</p>"
			+ "<p>报错信息:<strong>Uncaught SyntaxError: Invalid or unexpected token string</strong></p>"
			+ "<p>解决方法:<b>不被期望的string使用方式。没有function\"\"这种表达式语法，使用正确的语法编写代码。</b></p>"
			+ "<p>错误代码:if</p>"
			+ "<p>报错信息:<strong>Uncaught SyntaxError: Unexpected end of input</strong></p>"
			+ "<p>解决方法:<b>不被期望的表达式结束方式。表达式没有书写完整，使用正确的语法编写代码</b></p>"
			+ "<p>错误代码:twoThreeThree233 sixSixSix666</p>"
			+ "<p>报错信息:<strong>Uncaught SyntaxError: Unexpected identifier</strong></p>"
			+ "<p>解决方法:<b>不被期望的定义式。没有多个变量名并排书写这种表达式语法，使用正确的语法编写代码。</b></p>"
			+ "<p>错误代码:[].map(function(){}})</p>"
			+ "<p>报错信息:<strong>Uncaught SyntaxError: Missing ) after argument list</strong></p>"
			+ "<p>解决方法:<b>传入的参数列表遗失)。多半是大小括号未正确开关所致，使用正确的语法编写代码。</b></p>"
			+ "<p>错误代码:try{}</p>"
			+ "<p>报错信息:<strong>Uncaught SyntaxError: Missing catch or finally after try</strong></p>"
			+ "<p>解决方法:<b>遗失了catch或finally在try之后。使用了try方法试运行代码需要有对应的解决方案catch或finally代码处理。</b></p>"
			+ "<p>错误代码:JSON.parse(\"six\")</p>"
			+ "<p>报错信息:<strong>Uncaught SyntaxError: Unexpected token s in JSON at position 0</strong></p>"
			+ "<p>解决方法:<b>不被期望的在JSON中索引为0的位置出现的字符s。JSON.parse是将JSON格式的字符串转换为JSON对象，使用正确的语法编写代码。</b></p>"
			+ "<h2>5.<strong>Uncaught RangeError</strong><em>不被catch捕获的语法围度错误</em></h2>"
			+ "<p>错误代码:function a(){return a();};a()</p>"
			+ "<p>报错信息:<strong>Uncaught RangeError: Maximum call stack size exceeded</strong></p>"
			+ "<p>解决方法:<b>最多的调用次数超出内存限额，即内存溢出。检查是否有无节制调用递归方法。</b></p>"
			+ "<h2>6.<strong>Failed to load resource</strong><em>加载资源失败</em></h2>"
			+ "<p>报错信息:<strong>Failed to load resource: net::ERR_CACHE_MISS</strong></p>"
			+ "<p>解决方案:<b>缓存遗失。控制台在晚于页面加载完成后被打开时找不到预先写入页面的缓存，刷新页面。</b></p>"
			+ "<p>报错信息:<strong>Failed to load resource: net::ERR_CONNECTION_TIMED_OUT</strong></p>"
			+ "<p>解决方案:<b>连接超时。获取静态资源或ajax等请求的响应超时，客户端提升上网网速，服务端提升硬件配置。</b></p>"
			+ "<p>报错信息:<strong>Failed to load resource: the server responded with a status of 400 (Bad Request)</strong></p>"
			+ "<p>解决方案:<b>服务器返回了http状态码400（令服务器厌恶的请求）。客户端发送了错误的请求，检查客户端当前页面所使用到的代码中请求的资源。</b></p>"
			+ "<p>报错信息:<strong>Failed to load resource: net::ERR_ADDRESS_UNREACHABLE</strong></p>"
			+ "<p>解决方案:<b>请求的地址未缓存。服务器收到了请求，但无法正确响应。通知服务端程序员查看dns对应问题。</b></p>"
			+ "<p>报错信息:<strong>net::ERR_NAME_NOT_RESOLVED</strong></p>"
			+ "<p>解决方案:<b>某名称问题未被解决。无法加载到客户端对DNS解析内容进行缓存的数据。通知服务端程序员查看dns对应问题。</b></p>"
			+ "<p>报错信息:<strong>net::ERR_INTERNET_DISCONNECTED</strong></p>"
			+ "<p>解决方案:<b>internet网络失去连接。恭喜你断网了。</b></p>",
		image : ["http://static.ikindness.cn/image/article/2.png"]
	},
	{
		id : 3,
		title : "分析前端工程师的JD（招聘信息）",
		description : "",
		content : "",
		image : ["http://static.ikindness.cn/image/article/3.png"]
	},
	{
		id : 4,
		title : "文章",
		description : "",
		content : "",
		image : []
	},
	{
		id : 5,
		title : "文章",
		description : "",
		content : "",
		image : []
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
	},
	{
		from : "add/:id",
		method : "get",
		signType : [2],
		callback(req, res){
			res.json({});
		}
	}
];