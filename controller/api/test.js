export default [
	{
		from : "get",
		method : "get",
		cross : 1,
		signType : [0, 1, 2],
		callback(req, res){
			const data = [
				{
					name : "我是图片1",
					anchorHref : "https://www.baidu.com/",
					imageUrl : "http://www.ikindness.cn/image/banner/1.jpg"
				},
				{
					name : "我是图片2",
					anchorHref : "http://www.qq.com/",
					imageUrl : "http://www.ikindness.cn/image/banner/2.jpg"
				},
				{
					name : "我是图片3",
					anchorHref : "https://www.taobao.com/",
					imageUrl : "http://www.ikindness.cn/image/banner/3.jpg"
				},
				{
					name : "我是图片4",
					anchorHref : "https://www.tmall.com/",
					imageUrl : "http://www.ikindness.cn/image/banner/4.jpg"
				},
				{
					name : "我是图片5",
					anchorHref : "http://www.163.com/",
					imageUrl : "http://www.ikindness.cn/image/banner/5.jpg"
				},
				{
					name : "我是图片6",
					anchorHref : "http://lol.qq.com/",
					imageUrl : "http://www.ikindness.cn/image/banner/6.jpg"
				}
			];
			let len = parseInt(req.query.len);
			res.json({
				code : 0,
				data : isNaN(len) ? data : data.filter(function(list, index){
					return index < len;
				}),
				message : "success"
			});
		}
	},
	{
		from : "post",
		method : "post",
		cross : 1,
		signType : [0, 1, 2],
		callback(req, res){
			let body = req.body;
			res.json({
				code : 0,
				data : body,
				message : "success"
			});
		}
	},
	{
		from : "message",
		method : "get",
		cross : 1,
		signType : [0, 1, 2],
		callback(req, res){
			let tel = req.query.tel;
			res.json(tel && ~tel.search(/^\d{11}$/) ? {
				code : 0,
				data : tel.substring(5, 11),
				message : "success"
			} : {
				code : 400,
				data : null,
				message : "wrong"
			});	
		}
	},
	{
		from : "signUp",
		method : "post",
		cross : 1,
		signType : [0, 1, 2],
		callback(req, res){
			let body = req.body,
				tel = body.tel,
				password = body.password,
				code = body.code;
			res.json(tel && password && code && ~tel.search(/^\d{11}$/) && !~password.search(/\s/g) && code === tel.substring(5, 11) ? {
				code : 0,
				data : `你的手机号${tel}注册成功！`,
				message : "success"
			} : {
				code : 400,
				data : null,
				message : "wrong"
			});
		}
	},
	{
		from : "getInfo",
		method : "get",
		cross : 1,
		signType : [0, 1, 2],
		callback(req, res){
			let userId = `${Math.abs(req.query.userId * Math.pow(10, 8))}`;
			res.json(userId ? {
				code : 0,
				data : {
					money : Math.round(Math.random() * Math.sqrt(userId.slice(0, 8)))
				},
				message : "success"
			} : {
				code : 400,
				data : null,
				message : "wrong"
			});
		}
	},
	{
		from : "getFund",
		method : "get",
		cross : 1,
		signType : [0, 1, 2],
		callback(req, res){
			let type = req.query.type;
			const data = [
				{
					id : "0",
					type : "1",
					name : "口袋里的魔拍精灵",
					label : ["户外", "摄影录像", "随身用品"],
					rate : "739",
					sum : "739520.00",
					amount : "2400",
					image : "/image/fund/1-0.png"
				},
				{
					id : "1",
					type : "1",
					name : "小乔智能跑步机——高颜值时尚范  女性专属跑步机",
					label : ["体育", "健身"],
					rate : "1346",
					sum : "13467082.00",
					amount : "12418",
					image : "/image/fund/1-1.png"
				},
				{
					id : "2",
					type : "1",
					name : "【用前“刷”脸,U盘无忧!】人脸加密U盘",
					label : ["家电", "网络设备", "家居"],
					rate : "5075",
					sum : "5075067.00",
					amount : "30679",
					image : "/image/fund/1-2.png"
				},
				{
					id : "3",
					type : "1",
					name : "体验棒棒哒平衡车-能飞跃的平衡车N5",
					label : ["体育", "穿戴设备", "户外"],
					rate : "159",
					sum : "159230.00",
					amount : "170",
					image : "/image/fund/1-3.png"
				},
				{
					id : "4",
					type : "1",
					name : "ziile色诱蓝牙音箱：随时触摸你的心情！",
					label : ["音乐", "家电", "家庭影院"],
					rate : "166",
					sum : "166410.00",
					amount : "719",
					image : "/image/fund/1-4.png"
				},
				{
					id : "5",
					type : "1",
					name : "贝鸟K1智能携行车，更安全的堵城穿梭神器",
					label : ["日常生活", "户外"],
					rate : "2639",
					sum : "2639495.00",
					amount : "882",
					image : "/image/fund/1-5.png"
				},
				{
					id : "6",
					type : "1",
					name : "羊角包小公主-定制复古蓝牙收音机",
					label : ["摆件", "定制", "纯手工"],
					rate : "648",
					sum : "648160.90",
					amount : "1337",
					image : "/image/fund/1-6.png"
				},
				{
					id : "7",
					type : "1",
					name : "创意设计与精准检测-凡家ditamini甲醛检测仪",
					label : ["跨界", "家电", "空气净化"],
					rate : "271",
					sum : "271653.00",
					amount : "1197",
					image : "/image/fund/1-7.png"
				},
				{
					id : "10",
					type : "2",
					name : "智能便携超声爆洗衣机",
					label : ["智能", "家电", "便携"],
					rate : "408",
					sum : "408582.00",
					amount : "1729",
					image : "/image/fund/2-0.png"
				},
				{
					id : "11",
					type : "2",
					name : "心梦享M1床垫——可能是配置最高的千元床垫",
					label : ["原创", "卧室", "家居"],
					rate : "750",
					sum : "750788.00",
					amount : "1729",
					image : "/image/fund/2-1.png"
				},
				{
					id : "12",
					type : "2",
					name : "匠人匠心 典藏之作——复古实木胆机音响",
					label : ["音乐", "原创", "家居"],
					rate : "2007",
					sum : "2007150.00",
					amount : "1763",
					image : "/image/fund/2-2.png"
				},
				{
					id : "13",
					type : "2",
					name : "安全、智能——智能语音车载点播器",
					label : ["音乐", "原创", "家居"],
					rate : "2007",
					sum : "2007150.00",
					amount : "1763",
					image : "/image/fund/2-3.png"
				},
				{
					id : "14",
					type : "2",
					name : "博领智能WIFI台灯——有灯的地方就有WIFI",
					label : ["原创", "家电", "网络设备"],
					rate : "2006",
					sum : "2006484.00",
					amount : "6507",
					image : "/image/fund/2-4.png"
				},
				{
					id : "15",
					type : "2",
					name : "微跑小蛙-可穿戴体感游戏机，为爱而生让游戏更健康",
					label : ["游戏", "儿童智能", "穿戴设备"],
					rate : "1791",
					sum : "1791440.00",
					amount : "3019",
					image : "/image/fund/2-5.png"
				},
				{
					id : "16",
					type : "2",
					name : "神州泰坦天琴座行车记录仪 智能云分享星光夜视",
					label : ["摄影录像", "户外", "车载"],
					rate : "1791",
					sum : "1791440.00",
					amount : "3019",
					image : "/image/fund/2-6.png"
				},
				{
					id : "17",
					type : "2",
					name : "执着8S 拔插式4D音效4单元蓝牙真空降噪耳机",
					label : ["穿戴设备", "户外", "健身"],
					rate : "393",
					sum : "393881.00",
					amount : "2659",
					image : "/image/fund/2-7.png"
				},
				{
					id : "20",
					type : "3",
					name : "拼酷创意金属模型",
					label : ["原创", "手办", "金属"],
					rate : "187",
					sum : "187088.00",
					amount : "1237",
					image : "/image/fund/3-0.png"
				},
				{
					id : "21",
					type : "3",
					name : "2016德国红点大奖——小巨蛋CC实力派轻便型茶具",
					label : ["旅游", "办公", "家居"],
					rate : "399",
					sum : "199690.00",
					amount : "632",
					image : "/image/fund/3-1.png"
				},
				{
					id : "22",
					type : "3",
					name : "我不介意荆棘 纯银玫瑰手链",
					label : ["饰品", "原创"],
					rate : "755",
					sum : "75519.00",
					amount : "271",
					image : "/image/fund/3-2.png"
				},
				{
					id : "23",
					type : "3",
					name : "Rainie为爱守护镀24K金水晶晴雨伞只为你倾心",
					label : ["日常生活", "旅游", "户外"],
					rate : "129",
					sum : "64903.00",
					amount : "297",
					image : "/image/fund/3-3.png"
				},
				{
					id : "24",
					type : "3",
					name : "免煮微烹宝，随身携带的魔法厨房！良心打造，放心生活",
					label : ["原创", "日常生活", "厨房"],
					rate : "312",
					sum : "312409.00",
					amount : "2334",
					image : "/image/fund/3-4.png"
				},
				{
					id : "25",
					type : "3",
					name : "百年西泠出品 十二生肖铜印章",
					label : ["摆件", "周边产品", "原创"],
					rate : "452",
					sum : "226306.00",
					amount : "807",
					image : "/image/fund/3-5.png"
				},
				{
					id : "26",
					type : "3",
					name : "缤纷夏日，精彩出行—Rainwalker防水休闲鞋",
					label : ["原创", "日常生活", "户外"],
					rate : "129",
					sum : "64986.00",
					amount : "184",
					image : "/image/fund/3-6.png"
				},
				{
					id : "27",
					type : "3",
					name : "中药糅合红豆杉养生助眠枕",
					label : ["日常生活", "卧室", "家居"],
					rate : "614",
					sum : "307451.00",
					amount : "1374",
					image : "/image/fund/3-7.png"
				},
				{
					id : "30",
					type : "4",
					name : "大鱼海棠官方手办",
					label : ["原创", "手办", "金属"],
					rate : "428",
					sum : "342711.80",
					amount : "1970",
					image : "/image/fund/4-0.png"
				},
				{
					id : "31",
					type : "4",
					name : "《大鱼海棠》官方授权　内联升与您一起赴梦之约",
					label : ["周边产品", "正版授权", "纯手工"],
					rate : "1285",
					sum : "385695.00",
					amount : "1305",
					image : "/image/fund/4-1.png"
				},
				{
					id : "32",
					type : "4",
					name : "天堂伞x大鱼海棠伞 正版授权晴雨伞 椿 湫 竹语伞",
					label : ["周边产品", "电影", "正版授权"],
					rate : "1260",
					sum : "630143.00",
					amount : "4897",
					image : "/image/fund/4-2.png"
				},
				{
					id : "33",
					type : "4",
					name : "《大鱼海棠》X漫踪  官方正版授权周边发布",
					label : ["电影", "动画", "正版授权"],
					rate : "2591",
					sum : "25917.00",
					amount : "2589",
					image : "/image/fund/4-3.png"
				},
				{
					id : "34",
					type : "4",
					name : "《大鱼海棠》Q版粘土手办椿湫鲲【北裔堂出品】",
					label : ["公仔", "手办", "周边产品"],
					rate : "6052",
					sum : "181577.00",
					amount : "1811",
					image : "/image/fund/4-4.png"
				},
				{
					id : "35",
					type : "4",
					name : "大鱼海棠电影官方授权原创设计主题形象戒指众筹",
					label : ["电影", "正版授权", "纯手工"],
					rate : "138",
					sum : "27602.00",
					amount : "68",
					image : "/image/fund/4-5.png"
				},
				{
					id : "36",
					type : "4",
					name : "【台湾原装进口】【大鱼海棠】神器！鲲笛！",
					label : ["公仔", "电影", "音乐"],
					rate : "2228",
					sum : "222870.00",
					amount : "1326",
					image : "/image/fund/4-6.png"
				},
				{
					id : "37",
					type : "4",
					name : "【Kukroc&大鱼海棠】合作出品「遇见」颈饰耳饰",
					label : ["饰品", "原创", "正版授权"],
					rate : "198",
					sum : "39768.00",
					amount : "152",
					image : "/image/fund/4-7.png"
				},
				{
					id : "40",
					type : "5",
					name : "国家级总厨牛肉酱",
					label : ["国家级", "纯手工", "食品"],
					rate : "22",
					sum : "11178.80",
					amount : "115",
					image : "/image/fund/5-0.png"
				},
				{
					id : "41",
					type : "5",
					name : "千花百果绕仙茗——碧螺春",
					label : ["纯手工", "本地特色", "产地直供"],
					rate : "130",
					sum : "65238.00",
					amount : "331",
					image : "/image/fund/5-1.png"
				},
				{
					id : "42",
					type : "5",
					name : "岩缝中的珍茗——武夷山岩骨花香大红袍",
					label : ["纯手工", "本地特色", "产地直供"],
					rate : "113",
					sum : "56767.00",
					amount : "253",
					image : "/image/fund/5-2.png"
				},
				{
					id : "43",
					type : "5",
					name : "我们手工，你支持，原味大红袍等你来品尝！",
					label : ["纯手工", "本地特色", "产地直供"],
					rate : "118",
					sum : "59026.00",
					amount : "432",
					image : "/image/fund/5-3.png"
				},
				{
					id : "44",
					type : "5",
					name : "正宗信阳毛尖-留住春的味道",
					label : ["饮品", "本地特色", "产地直供"],
					rate : "129",
					sum : "64980.00",
					amount : "186",
					image : "/image/fund/5-4.png"
				},
				{
					id : "45",
					type : "5",
					name : "昔归金砖——用纯料打造的单株普洱（普洱砖茶）",
					label : ["纯手工", "本地特色", "产地直供"],
					rate : "336",
					sum : "168249.00",
					amount : "45791",
					image : "/image/fund/5-5.png"
				},
				{
					id : "46",
					type : "5",
					name : "【竹筒普洱熟茶】茶境竹香，云南手工竹筒普洱熟茶",
					label : ["饮品", "纯手工", "本地特色"],
					rate : "145",
					sum : "72698.00",
					amount : "1107",
					image : "/image/fund/5-6.png"
				},
				{
					id : "47",
					type : "5",
					name : "来自大山里的千年古树，稀世之珍武夷山【金骏眉】",
					label : ["纯手工", "本地特色", "产地直供"],
					rate : "258",
					sum : "129118.53",
					amount : "996",
					image : "/image/fund/5-7.png"
				},
				{
					id : "50",
					type : "6",
					name : "希望小学蝴蝶计划",
					label : ["助学", "扶贫", "人文关怀"],
					rate : "21",
					sum : "6469.00",
					amount : "139",
					image : "/image/fund/6-0.png"
				},
				{
					id : "51",
					type : "6",
					name : "【中国扶贫基金会】南方水灾 有你救有力量",
					label : ["扶贫", "防灾救灾"],
					rate : "138",
					sum : "138550.00",
					amount : "5026",
					image : "/image/fund/6-1.png"
				},
				{
					id : "52",
					type : "6",
					name : "【壹基金】长江中下游暴雨洪灾紧急救援",
					label : ["防灾救灾"],
					rate : "204",
					sum : "204630.00",
					amount : "32808",
					image : "/image/fund/6-2.png"
				},
				{
					id : "53",
					type : "6",
					name : "【爱德基金会】为南方水灾紧急众筹13800公斤大米",
					label : ["扶贫", "防灾救灾"],
					rate : "107",
					sum : "107815.50",
					amount : "5841",
					image : "/image/fund/6-3.png"
				},
				{
					id : "54",
					type : "6",
					name : "【爱德基金会】为800户水灾受灾老乡送去蚊香",
					label : ["扶贫", "防灾救灾"],
					rate : "102",
					sum : "16470.00",
					amount : "1203",
					image : "/image/fund/6-4.png"
				},
				{
					id : "55",
					type : "6",
					name : "抢救康复，星儿智障",
					label : ["助学", "健康医疗", "儿童智能"],
					rate : "16",
					sum : "3910.00",
					amount : "267",
					image : "/image/fund/6-5.png"
				},
				{
					id : "56",
					type : "6",
					name : "让来自大山的民族传童圆梦舞台",
					label : ["助学", "人文关怀"],
					rate : "171",
					sum : "17168.00",
					amount : "187",
					image : "/image/fund/6-6.png"
				},
				{
					id : "57",
					type : "6",
					name : "帮藏民拯救圣湖精灵",
					label : ["动物保护", "环境保护", "定制"],
					rate : "147",
					sum : "22056.00",
					amount : "766",
					image : "/image/fund/6-7.png"
				}
			];
			res.json({
				code : 0,
				data : type ? data.filter((list, index) => {
					return list.type === type;
				}) : data,
				message : "success"
			});
		}
	}
];