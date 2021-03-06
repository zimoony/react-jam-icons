"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Random = function Random(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 65 59" }, props),
    _react2.default.createElement("path", {
      d: "M54.3 35.4c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2l3.6 3.6H42.5c-5.5 0-10-4.5-10-10v-8c0-5.5 4.5-10 10-10h11.7l-4.1 4.1c-1.2 1.2-1.2 3.1 0 4.2 1.2 1.2 3.1 1.2 4.2 0l9.9-9.9c.2-.2.3-.4.3-.7 0-.3-.1-.5-.3-.7l-9.9-9.9c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2l2.6 2.6H42.5c-5.4 0-10.1 2.6-13 6.7-2.9-4-7.6-6.7-13-6.7h-15c-.5 0-1 .4-1 1v5h16c5.5 0 10 4.5 10 10v8c0 5.5-4.5 10-10 10H.5v5c0 .6.5 1 1 1h15c5.4 0 10.1-2.6 13-6.7 2.9 4 7.6 6.7 13 6.7h10.7l-3.1 3.1c-1.2 1.2-1.2 3.1 0 4.2 1.2 1.2 3.1 1.2 4.2 0l9.9-9.9c.2-.2.3-.4.3-.7 0-.1-.1-.3-.3-.5l-9.9-9.9z",
      fill: "#333"
    })
  );
};

exports.default = Random;