var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    client: './src/assets/scripts/client.js',
    vendor: ['react', 'react-dom', 'mobx', 'mobx-react']
  },
  output: {
    path: path.resolve(__dirname + 'build/public/scripts'),
    filename: '[name].min.js',
    publicPath: "http://localhost:8080/assets/scripts/"
  },
  devServer: { inline: true },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include:[
          path.resolve(__dirname, 'src/assets/scripts')
        ],
        options: {
          presets: [['es2015',{"modules":false}], 'react'],
          plugins: [
            'transform-decorators-legacy',
            'transform-class-properties'
          ]
        }
      }
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'] // Specify the common bundle's name.
    })
  ]
};
