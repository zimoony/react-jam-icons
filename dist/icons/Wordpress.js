"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wordpress = function Wordpress(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", {
      d: "M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0zm0 60C16.5 60 4 47.5 4 32S16.5 4 32 4s28 12.5 28 28-12.5 28-28 28zM8 32c0 9.3 5.5 17.2 13.5 21L10.1 22.5C8.7 25.4 8 28.6 8 32zm24.4 2l-7.2 20.4c2.2.6 4.4 1 6.8 1 2.8 0 5.5-.5 8-1.3l-.2-.3L32.4 34zm15.8-3.2c0-2.9-1.1-4.9-2-6.4-1.2-1.9-2.4-3.6-2.4-5.5 0-2.1 1.7-4.1 4-4.1h.3C43.9 11 38.2 8.6 32 8.6c-8.4 0-15.8 4.2-20.1 10.5h1.5c2.5 0 6.4-.3 6.4-.3 1.3-.1 1.4 1.8.2 1.9 0 0-1.3.1-2.7.2L26 46.4 31.3 31l-3.7-10c-1.3 0-2.6-.2-2.6-.2-1.3-.1-1.1-2 .2-1.9 0 0 4 .3 6.3.3 2.5 0 6.4-.3 6.4-.3 1.3-.1 1.4 1.8.2 1.9 0 0-1.3.1-2.7.2L44 46.2l2.4-7.8c1-3.3 1.8-5.6 1.8-7.6zm4.9-10c.1.7.2 1.5.2 2.4 0 2.4-.5 5-1.8 8.4l-7.3 20.6c7-4 11.8-11.6 11.8-20.2 0-4.1-1.1-7.9-2.9-11.2z",
      fill: "#343434"
    })
  );
};

exports.default = Wordpress;