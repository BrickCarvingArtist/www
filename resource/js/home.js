webpackJsonp([1],{0:function(e,t,n){"use strict";var r=n(236),a=n(29);(0,r.init)(a.render)},236:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.init=t.Page=void 0;var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),s=r(u),l=n(237),p=n(238),f=r(p),m=n(239),d=r(m),h=function(e){function t(e){return a(this,t),o(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),c(t,[{key:"render",value:function(){var e=this.props.option;return s["default"].createElement("div",{className:"category"},e.map(function(e,t){return s["default"].createElement("div",{className:"section",key:t},s["default"].createElement("a",{className:"sup",href:e.href,target:"_blank"},e.name),e.set.map(function(e,t){return s["default"].createElement("a",{className:"sub",href:e.href,target:"_blank",key:t},e.name)}))}))}}]),t}(u.Component);h.defaultProps={option:[{name:"艺术馆",href:"/",set:[{name:"子栏目",href:"/column"},{name:"子栏目",href:"/column"},{name:"子栏目",href:"/column"}]},{name:"科技馆",href:"http://tech.ikindness.cn/",set:[{name:"子栏目",href:"/column"},{name:"子栏目",href:"/column"},{name:"子栏目",href:"/column"}]},{name:"美食馆",href:"http://food.ikindness.cn/",set:[{name:"子栏目",href:"/column"},{name:"子栏目",href:"/column"},{name:"子栏目",href:"/column"}]},{name:"运动馆",href:"http://sport.ikindness.cn/",set:[{name:"子栏目",href:"/column"},{name:"子栏目",href:"/column"},{name:"子栏目",href:"/column"}]},{name:"少儿馆",href:"http://child.ikindness.cn/",set:[{name:"子栏目",href:"/column"},{name:"子栏目",href:"/column"},{name:"子栏目",href:"/column"}]}]};var y=function(e){function t(e){return a(this,t),o(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),c(t,[{key:"render",value:function(){var e=this.props.option;return s["default"].createElement("div",{className:"gallary full"},s["default"].createElement("div",{className:"w1200"},s["default"].createElement("h1",null,"课程纵览"),e.map(function(e,t){return s["default"].createElement("a",{className:"case",href:e.anchorHref,title:e.name,style:{backgroundImage:"url("+e.imgSrc+")"},key:t},s["default"].createElement("div",{className:"detail"},s["default"].createElement("strong",null,e.name),s["default"].createElement("p",null,e.description)))})))}}]),t}(u.Component);y.defaultProps={option:[{name:"HTML",imgSrc:"/image/course/html.png",anchorHref:"/course/html",description:"超级文本标记语言是标准通用标记语言下的一个应用，也是一种规范，一种标准，它通过标记符号来标记要显示的网页中的各个部分。网页文件本身是一种文本文件，通过在文本文件中添加标记符，可以告诉浏览器如何显示其中的内容（如：文字如何处理，画面如何安排，图片如何显示等）。"},{name:"CSS",imgSrc:"/image/course/css.png",anchorHref:"/course/css",description:"CSS是能够真正做到网页表现与内容分离的一种样式设计语言。相对于传统HTML的表现而言，CSS能够对网页中的对象的位置排版进行像素级的精确控制，支持几乎所有的字体字号样式，拥有对网页对象和模型样式编辑的能力，并能够进行初步交互设计，是目前基于文本展示最优秀的表现设计语言。"},{name:"JavaScript",imgSrc:"/image/course/javascript.png",anchorHref:"/course/javascript",description:"JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML（标准通用标记语言下的一个应用）网页上使用，用来给HTML网页增加动态功能。"},{name:"jQuery",imgSrc:"/image/course/jquery.png",anchorHref:"/course/jquery",description:"jQuery是一个兼容多浏览器的javascript库，核心理念是write less,do more。jQuery在2006年1月由美国人John Resig在纽约的barcamp发布，如今，jQuery已经成为最流行的javascript库，在世界前10000个访问最多的网站中，有超过55%在使用jQuery。"},{name:"Stylus",imgSrc:"/image/course/stylus.png",anchorHref:"/course/stylus",description:"Stylus是富有表现力的、动态的、健壮的CSS预编译语言，需要node.js的文件读写模块支持它的编译，目前世界上最前沿的开源项目如react，vue等都在使用它进行快速开发。功能的完善程度相比前几年出现的less和sass提升了很大一个档次，这就意味着它的学习曲线比较陡。"},{name:"React",imgSrc:"/image/course/react.png",anchorHref:"/course/react",description:"React起源于Facebook的内部项目，革命性的创新设计思想极其独特，性能出众，代码逻辑却非常简单。所以，越来越多的人开始关注和使用，认为它可能是将来Web开发的终极解决方案。衍生的React Native项目，已经实现了通过写WebApp的方式去写NativeApp，仅一套代码运行在各终端。"},{name:"Webpack",imgSrc:"/image/course/webpack.png",anchorHref:"/course/webpack",description:"Webpack是一个卓越的模块化打包工具，为功能模块的提炼，代码依赖的管理，静态资源与缓存的处理，是前端工程化的重要一环。相比于前几年出现的grunt与gulp，可谓是对开发更友好，不过配置文件的书写相对非常繁杂，需要学习理解很多全新的定义和思想。是打包组件化React的神器。"},{name:"Express",imgSrc:"/image/course/express.png",anchorHref:"/course/express",description:"Express是一个简洁而灵活的node.js Web应用框架, 提供一系列强大特性帮助你创建各种Web应用。Express不对node.js已有的特性进行二次抽象，只是在它之上扩展了Web应用所需的功能。丰富的HTTP工具以及来自Connect框架的中间件随取随用，创建强健、友好的API变得快速又简单。"},{name:"HTML5",imgSrc:"/image/course/html5.png",anchorHref:"/course/html5",description:"2014年10月29日，万维网联盟泪流满面地宣布，经过几乎8年的艰辛努力，HTML5标准规范终于最终制定完成了，并已公开发布。据统计2013年全球将有10亿手机浏览器支持HTML5，同时HTML Web开发者数量将达到200万。毫无疑问，HTML5将成为未来5-10年内，移动互联网领域的主宰者。"},{name:"ECMAScript2015",imgSrc:"/image/course/ecmascript2015.png",anchorHref:"/course/ecmascript2015",description:"ECMAScript是一种由Ecma国际（前身为欧洲计算机制造商协会,英文名称是European Computer Manufacturers Association）通过ECMA-262标准化的脚本程序设计语言。2015年6月17日，ECMAScript 6发布正式版本，即ECMAScript 2015。JavaScript正式拥有了模块和类。"},{name:"WebApp",imgSrc:"/image/course/webapp.png",anchorHref:"/course/webapp",description:"移动端Web App和WAP有什么不同？最直接的区别就是功能层面。WAP更侧重使用网页技术在移动端做展示，包括文字、媒体文件等。而Web App更侧重“功能”，是使用网页技术实现的App。总的来说，Web App就是运行于网络和标准浏览器上，基于网页技术开发实现特定功能的应用。"},{name:"微信公众号",imgSrc:"/image/course/wx.png",anchorHref:"/course/wx",description:"微信公众号主要面向名人、政府、媒体、企业等机构推出的合作推广业务。在这里可以通过微信渠道将品牌推广给上亿的微信用户，减少宣传成本，提高品牌知名度，打造更具影响力的品牌形象。微信公众号的口号是“再小的个体，也有自己品牌”，足以见得其的作用。"},{name:"整站架构",imgSrc:"/image/course/construction.png",anchorHref:"/course/construction",description:"网站架构，一般认为是根据客户需求分析的结果，准确定位网站目标群体，设定网站整体架构，规划、设计网站栏目及其内容，制定网站开发流程及顺序，以最大限度地进行高效资源分配与管理的设计。其内容有程序架构，呈现架构，和信息架构三种表现。"}]};var b=t.Page=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),c(t,[{key:"render",value:function(){return s["default"].createElement("div",{className:"page"},s["default"].createElement(l.TopNav,null),s["default"].createElement(l.Header,null),s["default"].createElement("div",{className:"facade"},s["default"].createElement(f["default"],{type:"tab"}),s["default"].createElement("div",{className:"w1200"},s["default"].createElement(h,null))),s["default"].createElement(y,null),s["default"].createElement(d["default"],null))}}]),t}(u.Component);t.init=function(e){e(s["default"].createElement(b,null),document.querySelector(".main"))}},237:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Header=t.TopNav=void 0;var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),s=r(u),l=t.TopNav=function(e){function t(e){return a(this,t),o(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),c(t,[{key:"render",value:function(){var e=this.props.option;return s["default"].createElement("div",{className:"topNav"},s["default"].createElement("div",{className:"w1200"},e.map(function(e,t){return e.set?s["default"].createElement("div",{className:"supNav",key:t},s["default"].createElement("i",{className:"icon20 column"}),s["default"].createElement("a",{href:e.href,target:"_blank"},e.name),s["default"].createElement("div",{className:"subNav"},e.set.map(function(e,t){return s["default"].createElement("div",{className:"section",key:t},s["default"].createElement("h1",null,s["default"].createElement("span",null,e.method),s["default"].createElement("strong",null,e.name),s["default"].createElement("b",null,e.description)),s["default"].createElement("h2",null,s["default"].createElement("span",null,e.url),e.key&&e.key.map(function(e,t){return s["default"].createElement("b",{title:e.description,key:t},e.name)})))}))):s["default"].createElement("a",{className:"supNav",href:e.href,target:"_blank",key:t},e.name)})))}}]),t}(u.Component);l.defaultProps={option:[{name:"登录",href:"http://auth.ikindness.cn/signIn"},{name:"注册",href:"http://auth.ikindness.cn/signUp"},{name:"接口",href:"/interface",set:[{name:"获取数据",url:"/api/test/get",description:"学习ajax，获取数据",method:"get",key:[{name:"len",description:"number类型，返回值中的data长度"}]},{name:"提交数据",url:"/api/test/post",description:"学习ajax，提交数据",method:"post",key:[{name:"任意参数",description:"任意类型,任意参数"}]},{name:"获取验证码",url:"/api/test/message",description:"学习ajax，表单学习",method:"get",key:[{name:"tel",description:"number类型，11位手机号码"}]},{name:"注册",url:"/api/test/signUp",description:"学习ajax，同步与异步提交表单",method:"post",key:[{name:"tel",description:"number类型，11位手机号码"},{name:"password",description:"string类型，密码，不能有空格"},{name:"code",description:"number类型，手机号后6位"}]},{name:"获取游戏玩家信息",url:"/api/test/getGameInfo",description:"项目实战，游戏商城练习",method:"get",key:[{name:"qq",description:"number类型，5-10位qq号码"}]},{name:"获取游戏商城商品",url:"/api/test/getGameProduct",description:"项目实战，游戏商城练习",method:"get",key:[{name:"type",description:"number类型，1为生命，2为护甲，3为魔抗，4为攻击，5为魔法"},{name:"grade",description:"number类型，等级1-3"},{name:"status",description:"number类型，1为全部，2为可用，3为不可用"}]},{name:"购买游戏商城道具",url:"/api/test/gameBuy",description:"项目实战，游戏商城练习",method:"post",key:[{name:"qq",description:"number类型，5-10位qq号码"},{name:"productId",description:"number类型，商品id"},{name:"sum",description:"number类型，购买商品数量"}]},{name:"获取用户信息",url:"/api/test/getInfo",description:"项目实战，商品筛选列表练习",method:"get",key:[{name:"userId",description:"number类型，用户id"}]},{name:"获取商品列表",url:"/api/test/getProduct",description:"项目实战，商品筛选列表练习",method:"get",key:[{name:"type",description:"number类型，商品类型"},{name:"prize",description:"array类型，价格区间，元素为number类型，[最低价格, 最高价格]"},{name:"sort",description:"number类型，0为无序，1为价格升序，2为价格降序"}]},{name:"购买商品",url:"/api/test/buy",description:"项目实战，商品筛选列表练习",method:"post",key:[{name:"userId",description:"number类型，用户id"},{name:"product",description:"array类型，商品信息，元素为number类型，[{productId : 商品id, sum : 购买商品数量}]"}]}]}]};var p=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),c(t,[{key:"render",value:function(){return s["default"].createElement("div",{className:"search"})}}]),t}(u.Component),f=t.Header=function(e){function t(e){return a(this,t),o(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),c(t,[{key:"render",value:function(){var e=this.props.option.reverse();return s["default"].createElement("div",{className:"header"},s["default"].createElement("div",{className:"w1200"},s["default"].createElement("div",{className:"logoPart"},s["default"].createElement("a",{className:"logo",title:"砖雕艺术馆",href:"/"}),s["default"].createElement(p,null),e.map(function(e,t){return s["default"].createElement("a",{className:"anchor",href:e.href,target:"_blank",key:t},e.name)}))))}}]),t}(u.Component);f.defaultProps={option:[{name:"艺术馆",href:"/"},{name:"科技馆",href:"http://tech.ikindness.cn/"},{name:"美食馆",href:"http://food.ikindness.cn/"},{name:"运动馆",href:"http://sport.ikindness.cn/"},{name:"App",href:"http://app.ikindness.cn/"}]}},238:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),s=r(u),l=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e)),r=n.props.userClass.props.userClass;return n.handleClick=function(){r.setState({index:n.props.index})},n}return i(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.index,n=e.userClass.props.userClass.state.index;return s["default"].createElement("em",{className:t===n?"current":null,key:t,onClick:this.handleClick})}}]),t}(u.Component),p=function(e){function t(e){return a(this,t),o(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),c(t,[{key:"render",value:function(){var e=this,t=this.props.userClass,n=t.props.option;return s["default"].createElement("div",{className:"indicator"},n.map(function(t,n){return s["default"].createElement(l,{index:n,userClass:e,key:n})}))}}]),t}(u.Component),f=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={index:0},n}return i(t,e),c(t,[{key:"auto",value:function(){var e=this,t=void 0,n=void 0,r=this.props.option.length,a=function o(){t=setTimeout(function(){clearTimeout(t),n=e.state.index,n=n>=r-1?0:++n,e.setState({index:n},function(){o()})},4e3)};a()}},{key:"componentDidMount",value:function(){this.auto()}},{key:"render",value:function(){var e=this.props.option,t=this.state.index;return s["default"].createElement("div",{className:"banner "+this.props.type},e.map(function(e,n){return s["default"].createElement("a",{className:"img"+(n===t?" current":""),title:e.name,href:e.anchorHref,style:{backgroundImage:"url("+e.imgSrc+")"},target:"_blank",key:n})}),s["default"].createElement(p,{userClass:this}))}}]),t}(u.Component);t["default"]=f,f.defaultProps={option:[{name:"砖雕艺术馆",anchorHref:"/",imgSrc:"/image/banner/1.png"},{name:"砖雕科学馆",anchorHref:"http://tech.ikindness.cn/",imgSrc:"/image/banner/2.png"}]}},239:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),s=r(u),l=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),c(t,[{key:"super",value:function(e){}},{key:"render",value:function(){var e=this.props,t=e.nav,n=e.legal;return s["default"].createElement("div",{className:"footer full"},s["default"].createElement("div",{className:"w1200"},s["default"].createElement("div",{className:"top"},t.map(function(e,t){return s["default"].createElement("a",{href:e.href,key:t},e.name)})),s["default"].createElement("div",{className:"bottom"},n.map(function(e,t){return s["default"].createElement("p",{key:t},s["default"].createElement("a",{href:e.href,key:t,dangerouslySetInnerHTML:{__html:e.name}}))}))))}}]),t}(u.Component);t["default"]=l,l.defaultProps={nav:[{name:"公司简介",href:"/corporation"},{name:"个人中心",href:"/user"},{name:"帮助中心",href:"/help"},{name:"联系我们",href:"/contact"}],legal:[{name:"Copyright&copy;2015-2016 B.C.A. All Rights Reserved 砖雕艺术馆",href:"/"},{name:"浙ICP备15038011号",href:"http://icp.chinaz.com/info?q=%E6%B5%99ICP%E5%A4%8715038011%E5%8F%B7"}]}}});