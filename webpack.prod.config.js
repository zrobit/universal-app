var path = require('path');
var webpack = require('webpack');


module.exports = {
  devtool: 'cheap-source-map',
  entry: {
    app: './assets/scripts/app.js',
    vendor: ['react', 'react-dom', 'mobx', 'mobx-react']
  },
  output: {
    path: path.resolve(__dirname, 'build/public/scripts'),
    filename: '[name].min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'assets/scripts'),
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
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      // compress:{
      //   warnings: true,
      //   dead_code:true,
      //   drop_debugger:true,
      //   drop_console:true,
      //   man
      // }
      // compress: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'] // Specify the common bundle's name.
    }),
    new webpack.optimize.AggressiveMergingPlugin()
    // new webpack.optimize.AggressiveMergingPlugin()
  ],

  resolve: {
    alias: {
      // 'react': path.resolve(__dirname, 'node_modules/react/dist/react.min.js'),
      // 'react-dom': path.resolve(__dirname, 'node_modules/react-dom/dist/react-dom.min.js'),
      'react': 'preact/dist/preact.min.js',
      'react-dom': 'preact-compat/dist/preact-compat.min.js',
      'mobx': path.resolve(__dirname, 'node_modules/mobx/lib/mobx.min.js'),
      'mobx-react': path.resolve(__dirname, 'node_modules/mobx-react/index.min.js')
    }
  }
};
