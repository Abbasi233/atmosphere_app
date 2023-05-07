"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

require("babel-polyfill");

var _routes = _interopRequireDefault(require("./src/routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cors = require('cors');

_dotenv["default"].config();

var app = (0, _express["default"])();
var port = 3000;
var corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204

};
app.use(cors(corsOptions));
app.use(_express["default"].json());
(0, _routes["default"])(app);
app.listen(port, function () {
  console.log("App running on port ".concat(port, "."));
});