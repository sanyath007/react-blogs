const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
		'webpack/hot/only-dev-server', // Only stops HMR on syntax errors
		'react-hot-loader/patch', // Make sure the HMR package is included
		'./app/common/theme/elements.scss', // Application css
		'./app/client/index.js', // Application entry point
	],
	output: {
		publicPath: '/static/',
		path: path.join(__dirname, 'static'),
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: [
					'babel-loader'
				]
			},
			{
				test: /\.css$/,
				loaders: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loaders: [
					'style-loader',
					{
						loader: 'css-loader',
						query: {
							sourceMap: true,
							module: true,
							localIdentName: '[local]___[hash:base64:5]'
						}
					},
					{
						loader: 'sass-loader',
						query: {
							outputStyle: 'expanded',
							sourceMap: true
						}
					},
					'postcss-loader'
				]
			},
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			}, // use ! to chain loader
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&minetype=application/font-woff'
			},
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader'
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192'
			}, //inline base64 URLs for <= 8k images
		]
	},
	postcss: function() {
		return [autoprefixer];
	},
	devServer: {
		hot: true,
		inline: false,
		historyApiFallback: true,
	},
};
