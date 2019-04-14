const path = require('path'),
webpack = require('webpack'),
merge = require('webpack-merge')

const publicPath = '/static/';

module.exports = function(env, argv) {
  const isDevelopment = !argv.mode || (argv.mode === 'development');
  console.log(`This is a ${isDevelopment? 'development': 'production'} build.`)

  const baseConfig = {
    entry: path.resolve(__dirname, 'src', 'app.js'),
    output: {
      path: path.resolve(__dirname, 'wwwroot', 'static'),
      filename: 'app.bundle.js',
      publicPath,
    },
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "eslint-loader"
        },
      ]
    },
    devtool: 'inline-source-map',
    plugins: [
      new webpack.DefinePlugin({
        ENV_IS_DEVELOPMENT: JSON.stringify(isDevelopment),
        ENV_IS: JSON.stringify(isDevelopment? 'development': 'production')
      })
    ]
  };

  const babelLoaderModule = {
    module: {
      rules: [
        { 
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    }
  };

  if (isDevelopment) {
    return merge(baseConfig,
      babelLoaderModule,
      {
        devServer: {
          contentBase: path.resolve(__dirname, 'wwwroot'),
          watchContentBase: false,
          publicPath,
          hotOnly: true,
          overlay: true,
          //noInfo: true
        },
        plugins: [
          // plugins for development
        ]
      }
    );
  }
  else {
    return merge(baseConfig, babelLoaderModule);
  }
}
