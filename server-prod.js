"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var config = {
  PORT: process.env.PORT || 8080
};
var _default = config;
exports.default = _default;
"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use('/', _express.default.static(_path.default.join(__dirname, '../public')));
app.get('/', function (req, res) {
  console.log(req.headers["accept-language"]);

  _fs.default.readFile('./views/index.html', function (err, data) {
    if (err && err !== null) res.send('Error getting the page\n' + err.message);else res.send(data.toString());
  });
});
app.listen(_config.default.PORT, function () {
  console.log('Up & listening on port ' + _config.default.PORT);
});
