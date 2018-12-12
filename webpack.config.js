module.exports = [
  {
    entry: './views/components/app.js',
    output: {
      path: __dirname + '/public',
      filename: 'bundle.js'
    },
    module: {
      rules:[
        {
          test: /\.js$/,
          loader: 'babel-loader'        
        },
        {
          test: /\.css/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  },
  {
    entry: './views/components/toys-app.js',
    output: {
      path: __dirname + '/public',
      filename: 'toysbundle.js'
    },
    module: {
      rules:[
        {
          test: /\.js$/,
          loader: 'babel-loader'        
        },
        {
          test: /\.css/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
];