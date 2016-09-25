import {join, resolve} from "path";
import webpack from "webpack";
const entryPath = "./dev_resource/entry/";
export default {
	entry : {
		home : `${entryPath}home`,
		article : `${entryPath}article`,
		articleDetail : `${entryPath}article/detail`,
		dependencies : ["react", "react-dom", "isomorphic-fetch"]
	},
	output : {
		path : resolve(process.cwd(), "../static/www/static/"),
		filename : "/js/[name].js",
		chunkFilename : "/lib/[name].min.js"
	},
	module : {
		loaders : [
			{
				test : /\.js$/,
				loaders : [
					"jsx",
					"babel"
				]
			}
		]
	},
	resolve : {
		modulesDirectories : [
			"node_modules",
			join(__dirname, "./node_modules")
		],
		extensions : ["", ".js"],
	},
	resolveLoader : {
		modulesDirectories : [
			"node_modules",
			join(__dirname, "./node_modules")
		]
	},
	plugins : [
		new webpack.optimize.CommonsChunkPlugin("dependencies", "/js/dependencies.min.js"),
		new webpack.optimize.MinChunkSizePlugin({
			compress : {
				warnings: false
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.DefinePlugin({
			"process.env" : {
				NODE_ENV: JSON.stringify("production")
			}
		})
	]
};