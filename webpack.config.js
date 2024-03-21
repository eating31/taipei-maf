var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['./src/index'], // 在 index 檔案後的 .js 副檔名是可選的
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
      extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json"],
 },
//   plugins: [
//     new webpack.ProvidePlugin({
//       process: 'process/browser',
//     }),
//     new webpack.DefinePlugin({
//       'process.env': JSON.stringify(process.env),
//     }),
//     new webpack.DefinePlugin({
//       'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     }),
//     new webpack.HotModuleReplacementPlugin()
//   ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-optional-chaining']
          }
        }
      }
    ]
  }
};
