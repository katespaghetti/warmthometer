var HtmlWebpackPlugin = require("html-webpack-plugin"),
	webpack = require("webpack");

console.log("baby's first module");

var webpackConfig = {
	entry: {
		main: "./src/warmCold"
	},

	output: {
		path: "/dist",
		filename: "warmthometer.js"
	},

	devServer: {
		port: 3000,
		inline: true,
		hot: true,
		contentBase: "/dist"
	},

	plugins: [
		new HtmlWebpackPlugin({
			inject: "body"
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: [
				"node_modules"
			],
			loader: "babel"
		}]
	}
	

};

module.exports = webpackConfig;