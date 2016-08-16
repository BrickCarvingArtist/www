import Article from "../../model/article";
// var article = new Article({
// 	title : "砖雕艺术家的前端课程简介",
// 	description : "砖雕艺术家的前端课程简介",
// 	keyword : ["前端", "培训", "砖雕艺术家", "ikindness", "html", "css", "javascript"],
// 	content : "砖雕艺术家的前端课程简介"
// });

// var article = new Article({
// 	title : "Chrome浏览器控制台报错信息汇总",
// 	description : "Chrome浏览器控制台报错信息汇总",
// 	keyword : ["Chrome", "浏览器", "控制台", "报错信息", "js", "javascript", "JavaScript"],
// 	content : "Chrome浏览器控制台报错信息汇总",
// 	image : ["http://static.ikindness.cn/image/article/2.png"]
// });

// var article = new Article({
// 	title : "分析前端工程师的JD（招聘信息）",
// 	description : "分析前端工程师的JD（招聘信息）",
// 	keyword : ["前端", "招聘", "砖雕艺术家", "ikindness", "JD", "找工作", "高薪就业"],
// 	content : "分析前端工程师的JD（招聘信息）",
// 	image : ["http://static.ikindness.cn/image/article/3.png"]
// });

// var article = new Article({
// 	title : "杭州企业红黑榜公示",
// 	description : "杭州企业红黑榜公示",
// 	keyword : ["前端", "招聘", "砖雕艺术家", "ikindness", "找工作", "高薪就业"],
// 	content : "杭州企业红黑榜公示",
// 	image : ["http://static.ikindness.cn/image/article/3.png"]
// });

// var article = new Article({
// 	title : "文章",
// 	description : "文章",
// 	keyword : [],
// 	content : "文章",
// 	image : []
// });

// article.save((err, data) => {
// 	console.log(err, data);
// });

// Article.remove({
// 	_id : "57adda79b7c4dd784f136eb8"
// }, err => {
// 	console.log(err);
// });

// Article.fetch((err, data) => {
// 	console.log(data)
// });

// Article.findOneAndUpdate({
// 	_id : "57b072c6c2e0cf492f92c39f"
// }, {
// 	$set : {
// 		content : "<h2>1.<strong>杭州双静网络技术服务有限公司</strong><em>西湖区西园路5号华越大楼1号楼4楼</em></h2>"
// 			+ "<p>技术人数:<b>5－10</b></p>"
// 			+ "<p>综合评分:<b>3</b>／5</p>"
// 			+ "<p>公司简述:五险一金最低标准缴纳。淘宝导购项目，双十一等活动通宵</p>"
// 			+ "<p>优点简述:<b>不定期团建</b></p>"
// 			+ "<p>缺点简述:<strong>经常加班，不呆到7点不好意思走人，薪资偏低，难觅发展空间</strong></p>"
// 			+ "<p>评价时间:<em>2014-06-30</em></p>"
// 			+ "<h2>2.<strong>浙江小虫科技有限公司</strong><em>滨江区六合路368号海外高层次人才创新创业基地高北楼B10</em></h2>"
// 			+ "<p>技术人数:<b>20－25</b></p>"
// 			+ "<p>综合评分:<b>4.2</b>／5</p>"
// 			+ "<p>公司简述:五险一金最低标准缴纳。家校互动教育类企业号</p>"
// 			+ "<p>优点简述:<b>公司管理层有不错的亲和力，公司环境open，园区有各种运动场馆，弹性工作时间</b></p>"
// 			+ "<p>缺点简述:<strong>员工技术水平较低，产品规划游移不定，传统行业老员工纠葛，项目管理效率很低</strong></p>"
// 			+ "<p>评价时间:<em>2015-01-30</em></p>"
// 			+ "<h2>3.<strong>杭州喜马拉雅电子商务有限公司</strong><em>滨江区滨康路228号万福中心A座17F</em></h2>"
// 			+ "<p>技术人数:<b>5－10</b></p>"
// 			+ "<p>综合评分:<b>3.3</b>／5</p>"
// 			+ "<p>公司简述:五险最低标准缴纳，无一金。互联网金融，政策原因产品停止运营</p>"
// 			+ "<p>优点简述:<b>年轻，项目压力轻松</b></p>"
// 			+ "<p>缺点简述:<strong>员工的归属感几乎为0，主管间勾心斗角，公司不重视技术，员工技术水平较低，产品规划游移不定，项目管理效率很低</strong></p>"
// 			+ "<p>评价时间:<em>2015-06-30</em></p>"
// 			+ "<h2>4.<strong>杭州仟金顶网络科技有限公司</strong><em>滨江区秋溢路289号绿城电商体验馆5楼</em></h2>"
// 			+ "<p>技术人数:<b>35－40</b></p>"
// 			+ "<p>综合评分:<b>4.4</b>／5</p>"
// 			+ "<p>公司简述:五险一金正常缴纳。绿城集团供应链金融项目，独享整个园区，绿城内部食堂，健身房。</p>"
// 			+ "<p>优点简述:<b>团队技术实力不错，项目主管都来自阿里、百度、华为等顶级互联网技术公司，每日晨会，项目管理推进与反馈都精确到每个人，技术层面有不错成长空间，不错的自主支配权</b></p>"
// 			+ "<p>缺点简述:<strong>加班比较严重，项目进度压力略大</strong></p>"
// 			+ "<p>评价时间:<em>2016-05-30</em></p>"
// 			+ "<h2>5.<strong>浙江鹰泊品牌管理有限公司</strong><em>西湖区天目山路398号1幢2564室</em></h2>"
// 			+ "<p>技术人数:<b>45－50</b></p>"
// 			+ "<p>综合评分:<b>4.6</b>／5</p>"
// 			+ "<p>公司简述:某集团子公司，总共三家子公司，涉及游戏、生活、商城等业务</p>"
// 			+ "<p>优点简述:<b>公司管理层很和善，员工之间的关系都挺不错的，上班小零食什么的都有，不定期公司或部门组团旅游</b></p>"
// 			+ "<p>缺点简述:<strong>部分页面涉及外包，前端技术并不是最新，员工的水平略低</strong></p>"
// 			+ "<p>评价时间:<em>2016-08-12</em></p>"
// 			+ "<h2>6.<strong>印孚瑟斯技术中国有限公司</strong><em>滨江区滨兴路301号滨江慧港科技园</em></h2>"
// 			+ "<p>技术人数:<b>未知(分为ITO/BPO)</b></p>"
// 			+ "<p>综合评分:<b>3.5</b>／5</p>"
// 			+ "<p>公司简述:五险一金正常缴纳。福利较好，上层多为外籍人事，可以接触到不同文化</p>"
// 			+ "<p>优点简述:<b>公司文化多样（世界500强企业），茶水间有小零食，经常举办活动（如运动会），技术大神较多</b></p>"
// 			+ "<p>缺点简述:<strong>工作忙时加班及其严重，空闲时坐等下班。晋升困难，领导大多外国空降，并且公司比较抠门。有一套比较奇怪的加薪系统（有同事一年加薪56.2 RMB）</strong></p>"
// 			+ "<p>评价时间:<em>2016-08-16</em></p>"
// 	}
// }, (err, data) => {
// 	console.log(data);
// });

// Article.findOneAndUpdate({
// 	_id : "57b072405b6f2add2dceb572"
// }, {
// 	$set : {
// 		content : "<h2>1.<strong>Uncaught Error</strong><em>未被catch捕获的错误</em></h2>"
// 		+ "<p>错误代码:throw Error(233);</p>"
// 		+ "<p>报错信息:<strong>Uncaught Error: 233</strong></p>"
// 		+ "<p>解决方案:<b>避免程序进入抛错误的逻辑。</b></p>"
// 		+ "<h2>2.<strong>Uncaught ReferenceError</strong><em>未被catch捕获的引用错误</em></h2>"
// 		+ "<p>错误代码:sixSixSix666++;</p>"
// 		+ "<p>报错信息:<strong>Uncaught ReferenceError: sixSixSix666 is not defined</strong></p>"
// 		+ "<p>解决方案:<b>sixSixSix是未被定义的。在使用变量前先定义，检查变量名是否错误书写。</b></p>"
// 		+ "<p>错误代码:233=666;</p>"
// 		+ "<p>报错信息:<strong>Uncaught ReferenceError: Invalid left-hand assignment</strong></p>"
// 		+ "<p>解决方法:<b>赋值数据给不能被赋值的等号左侧表达式是无效操作。没有这种缩写代码表达式的语法，使用正确的语法编写代码</b></p>"
// 		+ "<p>错误代码:666++;</p>"
// 		+ "<p>报错信息:<strong>Uncaught ReferenceError: Invalid left-hand side expression in postfix operation</strong></p>"
// 		+ "<p>解决方法:<b>后缀表达式语法写错。没有这种缩写代码表达式的语法，使用正确的语法编写代码。</b></p>"
// 		+ "<p>错误代码:++233;</p>"
// 		+ "<p>报错信息:<strong>Uncaught ReferenceError: Invalid left-hand side expression in prefix operation</strong></p>"
// 		+ "<p>解决方法:<b>前缀表达式语法错误。没有这种缩写代码表达式的语法，使用正确的语法编写代码</b></p>"
// 		+ "<h2>3.<strong>Uncaught TypeError</strong><em>未被catch捕获的类型错误</em></h2>"
// 		+ "<p>错误代码:window.sixSixSix666.twoThreeThree233++;</p>"
// 		+ "<p>报错信息:<strong>Uncaught TypeError: Cannot read property 'twoThreeThree233' of undefined</strong></p>"
// 		+ "<p>解决方案:<b>无法读取到undefined的twoThreeThree233属性。检查调用属性的对象是否获取到。</b></p>"
// 		+ "<p>错误代码:sixSixSix666 = null; sixSixSix666.twoThreeThree233++;</p>"
// 		+ "<p>报错信息:<strong>Uncaught TypeError: Cannot read property 'twoThreeThree233' of null</strong></p>"
// 		+ "<p>解决方案:<b>无法读取到undefined的twoThreeThree233属性。检查调用属性的对象是否存在。</b></p>"
// 		+ "<p>错误代码:666();</p>"
// 		+ "<p>报错信息:<strong>Uncaught TypeError: 666 is not a function</strong></p>"
// 		+ "<p>解决方案:<b>666不是一个方法。请检查报错处被以方法形式执行调用的表达式。</b></p>"
// 		+ "<p>错误代码:var a = 1; new a();</p>"
// 		+ "<p>报错信息:<strong>Uncaught TypeError: a is not a constructor</strong></p>"
// 		+ "<p>解决方案:<b>a不是一个构造函数。请检查变量a是否是一个可被用作函数的方法。</b></p>"
// 		+ "<p>错误代码:Number.prototype.toString(\"123\");</p>"
// 		+ "<p>报错信息:<strong>Uncaught TypeError: String.prototype.toString is not generic</strong></p>"
// 		+ "<p>解决方案:<b>String.prototype.toString不是一个范型。使用该方法强制要求你传入它需要你传入的数据类型的数据。</b></p>"
// 		+ "<p>错误代码:Array.prototype.toString(null);</p>"
// 		+ "<p>报错信息:<strong>Uncaught TypeError: Cannot convert undefined or null to object</strong></p>"
// 		+ "<p>解决方案:<b>不能将undefined或者null转换为一个object。请修改传入调用执行此方法的参数。</b></p>"
// 		+ "<p>错误代码:new XMLHttpRequest().open();</p>"
// 		+ "<p>报错信息:<strong>Uncaught TypeError: Failed to execute 'open' on 'XMLHttpRequest': 2 arguments required, but only 0 present.</strong></p>"
// 		+ "<p>解决方案:<b>在XMLHttpRequest上执行open方法失败:需要两个参数，缺只出现0个。请按方法规定使用方式使用方法，并传入对应的参数。</b></p>"
// 		+ "<p>错误代码:let a;let a=1;</p>"
// 		+ "<p>报错信息:<strong>Uncaught TypeError: Identifier 'a' has already been declared</strong></p>"
// 		+ "<p>解决方案:<b>标示符'a'已经被声明。let声明变量时不能重名。</b></p>"
// 		+ "<p>错误代码:const a=0;a=1;</p>"
// 		+ "<p>报错信息:<strong>Uncaught TypeError: Assignment to constant variable.</strong></p>"
// 		+ "<p>解决方案:<b>给常量分配了变量的值。常量值是不可改的。</b></p>"
// 		+ "<h2>4.<strong>Uncaught SyntaxError</strong><em>未被catch捕获的语法错误</em></h2>"
// 		+ "<p>错误代码:233.233.233;</p>"
// 		+ "<p>报错信息:<strong>Uncaught SyntaxError: Unexpected number</strong></p>"
// 		+ "<p>解决方案:<b>不被期望的数字。没有.数字来获取对象的属性值的语法，使用正确的语法编写代码。</b></p>"
// 		+ "<p>错误代码:function\"\";</p>"
// 		+ "<p>报错信息:<strong>Uncaught SyntaxError: Unexpected string</strong></p>"
// 		+ "<p>解决方案:<b>不被期望的string使用方式。没有function\"\"这种表达式语法，使用正确的语法编写代码。</b></p>"
// 		+ "<p>错误代码:function\\\";</p>"
// 		+ "<p>报错信息:<strong>Uncaught SyntaxError: Invalid or unexpected token</strong>"
// 		+ "<p>解决方案:<b>无效或不被期望的符号使用。没有function\\\"这种表达式语法，使用正确的语法编写代码。</b></p>"
// 		+ "<p>错误代码:if</p>"
// 		+ "<p>报错信息:<strong>Uncaught SyntaxError: Unexpected end of input</strong></p>"
// 		+ "<p>解决方案:<b>不被期望的表达式结束方式。表达式没有书写完整，使用正确的语法编写代码</b></p>"
// 		+ "<p>错误代码:twoThreeThree233 sixSixSix666;</p>"
// 		+ "<p>报错信息:<strong>Uncaught SyntaxError: Unexpected identifier</strong></p>"
// 		+ "<p>解决方案:<b>不被期望的定义式。没有多个变量名并排书写这种表达式语法，使用正确的语法编写代码。</b></p>"
// 		+ "<p>错误代码:/</p>"
// 		+ "<p>报错信息:<strong>Uncaught SyntaxError: Invalid regular expression: missing /</strong></p>"
// 		+ "<p>解决方案:<b>无效正则表达式:/。正则表达式语法需要被两个/包裹。</b></p>"
// 		+ "<p>错误代码:{a=1};</p>"
// 		+ "<p>报错信息:<strong>Uncaught SyntaxError: Invalid shorthand property initializer</strong></p>"
// 		+ "<p>解决方案:<b>无效属性初始化缩写式。对象属性的初始化定义的语法为{a:1}是冒号不是等号。</b></p>"
// 		+ "<p>错误代码:[].map(function(){}});</p>"
// 		+ "<p>报错信息:<strong>Uncaught SyntaxError: Missing ) after argument list</strong></p>"
// 		+ "<p>解决方案:<b>传入的参数列表遗失)。多半是大小括号未正确开关所致，使用正确的语法编写代码。</b></p>"
// 		+ "<p>错误代码:try{};</p>"
// 		+ "<p>报错信息:<strong>Uncaught SyntaxError: Missing catch or finally after try</strong></p>"
// 		+ "<p>解决方案:<b>遗失了catch或finally在try之后。使用了try方法试运行代码需要有对应的解决方案catch或finally代码处理。</b></p>"
// 		+ "<p>错误代码:JSON.parse(\"six\");</p>"
// 		+ "<p>报错信息:<strong>Uncaught SyntaxError: Unexpected token s in JSON at position 0</strong></p>"
// 		+ "<p>解决方案:<b>不被期望的在JSON中索引为0的位置出现的字符s。JSON.parse是将JSON格式的字符串转换为JSON对象，使用正确的语法编写代码。</b></p>"
// 		+ "<p>错误代码:const a;</p>"
// 		+ "<p>报错信息:<strong>Uncaught SyntaxError: Missing initializer in const declaration</strong></p>"
// 		+ "<p>解决方案:<b>遗忘常量的初始化声明。声明常量必须赋值。</b></p>"
// 		+ "<p>错误代码:super();</p>"
// 		+ "<p>报错信息:<strong>Uncaught SyntaxError: 'super' keyword unexpected here</strong></p>"
// 		+ "<p>解决方案:<b>关键字'super'出现在当前位置是不被期望的。子类的构造函数中才能用到super。</b></p>"
// 		+ "<h2>5.<strong>Uncaught RangeError</strong><em>未被catch捕获的围度错误</em></h2>"
// 		+ "<p>错误代码:function a(){return a();};a();</p>"
// 		+ "<p>报错信息:<strong>Uncaught RangeError: Maximum call stack size exceeded</strong></p>"
// 		+ "<p>解决方案:<b>最多的调用次数超出内存限额，即内存溢出。检查是否有无节制调用递归方法。</b></p>"
// 		+ "<p>错误代码:var a=[];a.length=-1;</p>"
// 		+ "<p>报错信息:<strong>Uncaught RangeError: Invalid array length</strong></p>"
// 		+ "<p>解决方案:<b>无效的数组长度。数组的长度只能赋值为等于非负整数的运算结果。</b></p>"
// 		+ "<h2>6.<strong>Uncaught DOMException</strong><em>未被catch捕获的文档对象模型异常</em></h2>"
// 		+ "<p>错误代码:new XMLHttpRequest().setRequestHeader(null, null);</p>"
// 		+ "<p>报错信息:<strong>Uncaught DOMException: Failed to execute 'setRequestHeader' on 'XMLHttpRequest': The object's state must be OPENED.</strong></p>"
// 		+ "<p>解决方案:<b>在XMLHttpRequest上执行open方法失败:这个对象的状态必须要为已开启。请先打开http连接再设置请求头。</b></p>"
// 		+ "<h2>7.<strong>Failed to load resource</strong><em>加载资源失败</em></h2>"
// 		+ "<p>报错信息:<strong>Failed to load resource: net::ERR_CACHE_MISS</strong></p>"
// 		+ "<p>解决方案:<b>缓存遗失。控制台在晚于页面加载完成后被打开时找不到预先写入页面的缓存，刷新页面。</b></p>"
// 		+ "<p>报错信息:<strong>Failed to load resource: net::ERR_CONNECTION_TIMED_OUT</strong></p>"
// 		+ "<p>解决方案:<b>连接超时。获取静态资源或ajax等请求的响应超时，客户端提升上网网速，服务端提升硬件配置。</b></p>"
// 		+ "<p>报错信息:<strong>Failed to load resource: the server responded with a status of 400 (Bad Request)</strong></p>"
// 		+ "<p>解决方案:<b>服务器返回了http状态码400（令服务器厌恶的请求）。客户端发送了错误的请求，检查客户端当前页面所使用到的代码中请求的资源。</b></p>"
// 		+ "<p>报错信息:<strong>Failed to load resource: net::ERR_ADDRESS_UNREACHABLE</strong></p>"
// 		+ "<p>解决方案:<b>请求的地址未缓存。服务器收到了请求，但无法正确响应。通知服务端程序员查看dns对应问题。</b></p>"
// 		+ "<p>报错信息:<strong>net::ERR_NAME_NOT_RESOLVED</strong></p>"
// 		+ "<p>解决方案:<b>某名称问题未被解决。无法加载到客户端对DNS解析内容进行缓存的数据。通知服务端程序员查看dns对应问题。</b></p>"
// 		+ "<p>报错信息:<strong>net::ERR_INTERNET_DISCONNECTED</strong></p>"
// 		+ "<p>解决方案:<b>internet网络失去连接。恭喜你断网了。</b></p>"
// 	}
// }, (err, data) => {
// 	console.log(err, data);
// });
export default [
	{
		from : "fetch",
		method : "get",
		signType : [0, 1, 2],
		callback(req, res){
			let length = req.query.length;
			Article.fetch((err, data) => {
				res.json({
					code : 0,
					data : length ? data.filter((list, index) => index < req.query.length) : data,
					message : "success"
				});
			});
		}
	},
	{
		from : "fetch/:id",
		method : "get",
		signType : [0, 1, 2],
		callback(req, res){
			Article.where({
				_id : req.params.id
			}).select("-__v").findOne((err, data) => {
				if(err){
					res.send({
						code : 400,
						message : "no such data searched"
					});
				}else{
					res.json({
						code : 0,
						data,
						message : "success"
					});
				}
			});
		}
	},
	{
		from : "add/:id",
		method : "get",
		signType : [0, 1, 2],
		callback(req, res){
			res.json({});
		}
	}
];