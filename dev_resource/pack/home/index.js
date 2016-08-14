import React, {Component} from "react";
import {TopNav, Header} from "../../component/header";
import Banner from "../../component/banner"
import Footer from "../../component/footer";
class Category extends Component{
	constructor(props){
		super(props);
	}
	render(){
		let option = this.props.option;
		return (
			<div className="category">
				{
					option.map((list, index) => (
						<div className="section" key={index}>
							<a className="sup" href={list.href} target="_blank">
								{list.name}
							</a>
							{
								list.set.map((list, index) => (
									<a className="sub" href={list.href} target="_blank" key={index}>
										{list.name}
									</a>
								))
							}
						</div>
					))
				}
			</div>
		);
	}
}
Category.defaultProps = {
	option : [
		{
			name : "艺术馆",
			href : "/",
			set : [
				{
					name : "子栏目",
					href : "/column"
				},
				{
					name : "子栏目",
					href : "/column"
				},
				{
					name : "子栏目",
					href : "/column"
				}
			]
		},
		{
			name : "科技馆",
			href : "http://tech.ikindness.cn/",
			set : [
				{
					name : "子栏目",
					href : "/column"
				},
				{
					name : "子栏目",
					href : "/column"
				},
				{
					name : "子栏目",
					href : "/column"
				}
			]
		},
		{
			name : "美食馆",
			href : "http://food.ikindness.cn/",
			set : [
				{
					name : "子栏目",
					href : "/column"
				},
				{
					name : "子栏目",
					href : "/column"
				},
				{
					name : "子栏目",
					href : "/column"
				}
			]
		},
		{
			name : "运动馆",
			href : "http://sport.ikindness.cn/",
			set : [
				{
					name : "子栏目",
					href : "/column"
				},
				{
					name : "子栏目",
					href : "/column"
				},
				{
					name : "子栏目",
					href : "/column"
				}
			]
		},
		{
			name : "少儿馆",
			href : "http://child.ikindness.cn/",
			set : [
				{
					name : "子栏目",
					href : "/column"
				},
				{
					name : "子栏目",
					href : "/column"
				},
				{
					name : "子栏目",
					href : "/column"
				}
			]
		}
	]
};
class News extends Component{
	constructor(props){
		super(props);
		this.state = props;
	}
	componentWillMount(){
		fetch("/api/news/fetch?length=3").then(res => res.status === 200 ? res.json() : {
			code : 0,
			data : null,
			message : "wrong"
		}).then(data => {
			this.setState({
				news : data.data
			});
		});
		fetch("/api/article/fetch?length=6").then(res => res.status === 200 ? res.json() : {
			code : 0,
			data : null,
			message : "wrong"
		}).then(data => {
			this.setState({
				article : data.data
			});
		});
		fetch("/api/library/fetch?length=3").then(res => res.status === 200 ? res.json() : {
			code : 0,
			data : null,
			message : "wrong"
		}).then(data => {
			this.setState({
				library : data.data
			});
		});
	}
	render(){
		let state = this.state,
			news = state.news || [],
			article = state.article || [],
			library = state.library || [];
		return (
			<div className="news full">
				<div className="w1200">
					<div className="left">
						<h1>
							<a href="/news" target="_blank">新闻公告</a>
						</h1>
						{
							news.map((list, index) => (
								<p>
									<a href={`/news/${list.id}`} target="_blank">
										{list.title}
									</a>
								</p>
							))
						}
					</div>
					<div className="center">
						<h1>
							<a href="/article" target="_blank">原创文章</a>
						</h1>
						{
							article.map((list, index) => (
								<p>
									<a href={`/article/${list._id}`} target="_blank">
										{list.title}
									</a>
								</p>
							))
						}
					</div>
					<div className="right">
						<h1>
							<a href="/library" target="_blank">参考资料</a>
						</h1>
						{
							library.map((list, index) => (
								<p key={index}>
									<a href={`http://static.ikindness.cn/library/${encodeURI(list.title)}.pdf`} target="_blank">
										{list.title}
									</a>
								</p>
							))
						}
					</div>
				</div>
			</div>
		);
	}
}
class Gallery extends Component{
	constructor(props){
		super(props);
	}
	render(){
		let option = this.props.option;
		return (
			<div className="gallary full">
				<div className="w1200">
					<h1>课程纵览</h1>
					{
						option.map((list, index) => (
							<a className="case" href={list.anchorHref} title={list.name} style={
								{
									backgroundImage : `url(${list.imgSrc})`
								}
							} key={index}>
								<div className="detail">
									<strong>
										{list.name}
									</strong>
									<p>
										{list.description}
									</p>
								</div>
							</a>
						))
					}
				</div>
			</div>
		);
	}
}
Gallery.defaultProps = {
	option : [
		{
			name : "HTML",
			imgSrc : "http://static.ikindness.cn/image/course/html.png",
			anchorHref : "/course/html",
			description : "超级文本标记语言是标准通用标记语言下的一个应用，也是一种规范，一种标准，它通过标记符号来标记要显示的网页中的各个部分。网页文件本身是一种文本文件，通过在文本文件中添加标记符，可以告诉浏览器如何显示其中的内容（如：文字如何处理，画面如何安排，图片如何显示等）。"
		},
		{
			name : "CSS",
			imgSrc : "http://static.ikindness.cn/image/course/css.png",
			anchorHref : "/course/css",
			description : "CSS是能够真正做到网页表现与内容分离的一种样式设计语言。相对于传统HTML的表现而言，CSS能够对网页中的对象的位置排版进行像素级的精确控制，支持几乎所有的字体字号样式，拥有对网页对象和模型样式编辑的能力，并能够进行初步交互设计，是目前基于文本展示最优秀的表现设计语言。"
		},
		{
			name : "JavaScript",
			imgSrc : "http://static.ikindness.cn/image/course/javascript.png",
			anchorHref : "/course/javascript",
			description : "JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML（标准通用标记语言下的一个应用）网页上使用，用来给HTML网页增加动态功能。"
		},
		{
			name : "jQuery",
			imgSrc : "http://static.ikindness.cn/image/course/jquery.png",
			anchorHref : "/course/jquery",
			description : "jQuery是一个兼容多浏览器的javascript库，核心理念是write less,do more。jQuery在2006年1月由美国人John Resig在纽约的barcamp发布，如今，jQuery已经成为最流行的javascript库，在世界前10000个访问最多的网站中，有超过55%在使用jQuery。"
		},
		{
			name : "Stylus",
			imgSrc : "http://static.ikindness.cn/image/course/stylus.png",
			anchorHref : "/course/stylus",
			description : "Stylus是富有表现力的、动态的、健壮的CSS预编译语言，需要node.js的文件读写模块支持它的编译，目前世界上最前沿的开源项目如react，vue等都在使用它进行快速开发。功能的完善程度相比前几年出现的less和sass提升了很大一个档次，这就意味着它的学习曲线比较陡。"
		},
		{
			name : "React",
			imgSrc : "http://static.ikindness.cn/image/course/react.png",
			anchorHref : "/course/react",
			description : "React起源于Facebook的内部项目，革命性的创新设计思想极其独特，性能出众，代码逻辑却非常简单。所以，越来越多的人开始关注和使用，认为它可能是将来Web开发的终极解决方案。衍生的React Native项目，已经实现了通过写WebApp的方式去写NativeApp，仅一套代码运行在各终端。"
		},
		{
			name : "Webpack",
			imgSrc : "http://static.ikindness.cn/image/course/webpack.png",
			anchorHref : "/course/webpack",
			description : "Webpack是一个卓越的模块化打包工具，为功能模块的提炼，代码依赖的管理，静态资源与缓存的处理，是前端工程化的重要一环。相比于前几年出现的grunt与gulp，可谓是对开发更友好，不过配置文件的书写相对非常繁杂，需要学习理解很多全新的定义和思想。是打包组件化React的神器。"
		},
		{
			name : "Express",
			imgSrc : "http://static.ikindness.cn/image/course/express.png",
			anchorHref : "/course/express",
			description : "Express是一个简洁而灵活的node.js Web应用框架, 提供一系列强大特性帮助你创建各种Web应用。Express不对node.js已有的特性进行二次抽象，只是在它之上扩展了Web应用所需的功能。丰富的HTTP工具以及来自Connect框架的中间件随取随用，创建强健、友好的API变得快速又简单。"
		},
		{
			name : "HTML5",
			imgSrc : "http://static.ikindness.cn/image/course/html5.png",
			anchorHref : "/course/html5",
			description : "2014年10月29日，万维网联盟泪流满面地宣布，经过几乎8年的艰辛努力，HTML5标准规范终于最终制定完成了，并已公开发布。据统计2013年全球将有10亿手机浏览器支持HTML5，同时HTML Web开发者数量将达到200万。毫无疑问，HTML5将成为未来5-10年内，移动互联网领域的主宰者。"
		},
		{
			name : "ECMAScript2015",
			imgSrc : "http://static.ikindness.cn/image/course/ecmascript2015.png",
			anchorHref : "/course/ecmascript2015",
			description : "ECMAScript是一种由Ecma国际（前身为欧洲计算机制造商协会,英文名称是European Computer Manufacturers Association）通过ECMA-262标准化的脚本程序设计语言。2015年6月17日，ECMAScript 6发布正式版本，即ECMAScript 2015。JavaScript正式拥有了模块和类。"
		},
		{
			name : "WebApp",
			imgSrc : "http://static.ikindness.cn/image/course/webapp.png",
			anchorHref : "/course/webapp",
			description : "移动端Web App和WAP有什么不同？最直接的区别就是功能层面。WAP更侧重使用网页技术在移动端做展示，包括文字、媒体文件等。而Web App更侧重“功能”，是使用网页技术实现的App。总的来说，Web App就是运行于网络和标准浏览器上，基于网页技术开发实现特定功能的应用。"
		},
		{
			name : "微信公众号",
			imgSrc : "http://static.ikindness.cn/image/course/wx.png",
			anchorHref : "/course/wx",
			description : "微信公众号主要面向名人、政府、媒体、企业等机构推出的合作推广业务。在这里可以通过微信渠道将品牌推广给上亿的微信用户，减少宣传成本，提高品牌知名度，打造更具影响力的品牌形象。微信公众号的口号是“再小的个体，也有自己品牌”，足以见得其的作用。"
		},
		{
			name : "整站架构",
			imgSrc : "http://static.ikindness.cn/image/course/construction.png",
			anchorHref : "/course/construction",
			description : "网站架构，一般认为是根据客户需求分析的结果，准确定位网站目标群体，设定网站整体架构，规划、设计网站栏目及其内容，制定网站开发流程及顺序，以最大限度地进行高效资源分配与管理的设计。其内容有程序架构，呈现架构，和信息架构三种表现。"
		}
	]
};
export class Page extends Component{
	render(){
		return (
			<div className="page">
				<TopNav />
				<Header />
				<div className="facade">
					<Banner type="tab" />
					<div className="w1200">
						<Category />
					</div>
				</div>
				<News />
				<Gallery />
				<Footer />
			</div>
		);
	}
}
export const init = render => render(
	<Page />,
	document.querySelector(".main")
);