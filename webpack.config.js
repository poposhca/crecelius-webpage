module.exports = {
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
  };