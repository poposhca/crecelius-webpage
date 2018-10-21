"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.set('view engine', 'hbs');
app.use('/', _express.default.static(_path.default.join(__dirname, '../public')));
app.get('/', function (req, res) {
  console.log(req.headers["accept-language"]);
  res.render('index', {
    landing: true
  });
});
app.get('/toys', function (req, res) {
  res.render('index', {
    'toys': true
  });
});
app.listen(_config.default.PORT, function () {
  console.log('Up & listening on port ' + _config.default.PORT);
});