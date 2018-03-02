var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config.dev.js');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  headers: {'Cache-Control':'no-cache'},
  stats: {colors: true}
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.setHeader('Cache-Control', 'no-cache')
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(3003, function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3003');
});

