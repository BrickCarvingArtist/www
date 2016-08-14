const WebpackDevServerConfig = {
		host : "127.0.0.1",
		port : 60000
	},
	ServerConfig = {
		host : "127.0.0.1",
		port : 10000
	},
	MongoConfig = {
		host : "127.0.0.1",
		port : 12000
	},
	UploadConfig = {
		path : `${process.cwd()}/src/upload/`
	},
	LogConfig = {
		path : `${process.cwd()}/log/`
	};
export {
	WebpackDevServerConfig,
	ServerConfig,
	MongoConfig,
	UploadConfig,
	LogConfig
};