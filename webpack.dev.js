const path = require('path'),
webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {

    module: {
      rules: [
          /*,
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader','eslint-loader']
          }*/
          //loaders for other file types can go here
          
          {
            test:/\.scss$/,
            use:['style-loader','css-loader','sass-loader']
          }, 
          {
            test:/\.css$/,
            use:['style-loader','css-loader','sass-loader']
          }
      ]
    }/*,
    plugins: [
         extractSass
        //if you want to pass in options, you can do so:
        //new ExtractTextPlugin({
        //  filename: 'style.css'
        //})
      ]*/,
      plugins: [
        new Dotenv({
          //safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
          systemvars: true,
        }),
        new webpack.EnvironmentPlugin({
          NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
          DEBUG: true,
          REACT_APP_STRIPE_KEY:'pk_test_fNZfMcjGxk26xm4KFW5uFYNR'
        })
      ]
  });
  

 