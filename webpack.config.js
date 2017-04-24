const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const styleCSS = new ExtractTextPlugin({ filename: './app/assets/stylesheets/style.css', allChunks: true });

module.exports = {
  context: __dirname,
  entry: "./frontend/stoll_todo.jsx",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        // test: [/\.jsx?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      // },
      // {
      //   test: /\.scss$/,
      //   // use: ExtractTextPlugin.extract('css!sass')
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader', 'sass-loader']
      //   })
      }
    ]
  },
  // plugins: [
  //   styleCSS
  // ],
  devtool: 'source-maps'
};
