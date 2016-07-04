require('dotenv').config();

const webpack = require('webpack');
const path    = require('path');

const NODE_ENV = process.env.NODE_ENV;
const IS_PROD = NODE_ENV === 'production'

const config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/entry.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
  },
  devtool: IS_PROD ? 'source-map' : 'inline-source-map',
  noInfo: true,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css!autoprefixer?browsers=last 2 versions'
      }
    ]
  },
  resolve: {
    modulesDirectories: [
        `${__dirname}/node_modules`,
        `${__dirname}/src`,
        `${__dirname}/src/lib`,
    ],
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      FIREBASE_URL: JSON.stringify(process.env.FIREBASE_URL)
    })
  ]
};

if (IS_PROD) {
  const productionPlugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ];
  productionPlugins.forEach((plugin) => config.plugins.push(plugin));
}

module.exports = config;
