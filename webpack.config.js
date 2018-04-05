const path = require('path'),
webpack = require('webpack');
const Dotenv = require('dotenv-webpack');




module.exports = {
context: path.resolve(__dirname, './src'),
entry: {
    app: './index.jsx',
},
output: {
    //filename: '[name].bundle.js',
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/assets'),
    publicPath: '/assets',
},
    module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: [/node_modules/],
              use: [{
                loader: 'babel-loader',
                options: { presets: ['es2015', 'react'], plugins: ['transform-object-rest-spread', 'async-to-promises'] }
            }],
          }/*,
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader','eslint-loader']
          }*/
          //loaders for other file types can go here
          ,
          {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 80000,
                  mimetype: "application/font-woff"
                }
              }
            ]
          },
          {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: [
              {
                loader: "file-loader"
              }
            ]
          }
      ]
    }
  };
  

 