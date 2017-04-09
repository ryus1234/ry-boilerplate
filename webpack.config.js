/* eslint 'import/no-commonjs': 0 */

const path = require('path');
const webpack = require('webpack');

const DEBUG = !(process.env.NODE_ENV === 'production');

const PLUGINS = [
  new webpack.optimize.CommonsChunkPlugin({
    name: ['vendor']
  })
];

if (!DEBUG) {
  PLUGINS.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  );
}

module.exports = [
  {
    devtool: DEBUG ? 'cheap-module-eval-source-map' : false,
    entry: {
      main: './src/js/main.js',
      vendor: ['react', 'react-dom']
    },
    output: {
      path: path.resolve(__dirname, 'public/js'),
      filename: '[name].js'
    },
    plugins: PLUGINS,
    module: {
      rules: [
        {
          test: /\.js[x]?$/,
          use: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    }
  },
]