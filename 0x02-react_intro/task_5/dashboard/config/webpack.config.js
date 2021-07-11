
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	devServer: {
		hot: true,
		contentBase: path.resolve('./dist'),
		compress: true,
		port: 3000,
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
      title: 'Holberton Dashboard',
    }),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				use: ['file-loader'],
				loader: 'image-webpack-loader',
      			options: {
        		bypassOnDebug: true,
        		disable: true,
      		},
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			  },
		],
	},
	
	mode: 'development',
	devtool: 'inline-source-map',
};
