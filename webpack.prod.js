const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.config.js');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "style2.css",
}); 

module.exports = merge(common, {

  devtool: 'source-map',

  module: {
    rules: [
        {
          test: /\.scss$/,
          use: extractSass.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        }]
  },

  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
               'process.env.NODE_ENV': JSON.stringify('production'),
               'process.env.DEBUG': false,
               'process.env.REACT_APP_STRIPE_KEY': JSON.stringify('pk_test_fNZfMcjGxk26xm4KFW5uFYNR'),
     }),
     new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
            title: 'Delivery Shop',
            template: '../public/index.html',
            meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
            hash:true
          }),
     extractSass
  ]
});