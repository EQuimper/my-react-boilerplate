const webpack = require ('webpack');
const path = require('path');

module.exports = {
	context: __dirname,
	devtool: "source-map",
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/public'),
		filename: 'bundle.js',
		publicPath: '/public/'
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.json']
	},
	stats: {
		colors: true,
		reasons: true,
		chunks: true
	},
	module: {
		preLoaders: [
			{
				test: /\.jsx?$/,
				loader: 'eslint-loader'
			}
		],
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				include: path.join(__dirname, '/src'),
				exclude: /node_modules/
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			}
		]
	}
};