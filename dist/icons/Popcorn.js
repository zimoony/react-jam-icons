"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popcorn = function Popcorn(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 50 62" }, props),
    _react2.default.createElement("path", {
      d: "M43 7c-.9 0-1.8.2-2.6.5-1-2.1-3-3.5-5.4-3.5-1.1 0-2.1.3-3 .8l-.1.1-.1-.1C30.4 2.5 27.9 1 25 1c-1.4 0-2.7.4-3.9 1l-1.4 1-1-1.1C17.5.7 15.8 0 14 0c-3.9 0-7 3.1-7 7v.6l.1.5h-.6C2.8 8.8 0 12.1 0 16c0 .7 0 1.4.1 2H0l4.7 43c.1.6.6 1 1.1 1h36.4c.6 0 1.1-.4 1.1-1l4.5-41.4C49.2 18.1 50 16 50 14c0-3.9-3.1-7-7-7zM4 16c0-1 .4-2 1-2.7.6-.7 1.5-1.2 2.5-1.3 0 0 2.9 1.1 4.1-.5 1.3-1.5-.6-4-.6-4V7c0-.8.3-1.6.9-2.1.5-.6 1.3-.9 2.1-.9 1 0 1.9.5 2.5 1.3l.5 1.1v2.1c0 1.4 1.1 2.5 2.5 2.5S22 9.9 22 8.5V6.3l.4-.3c.7-.6 1.6-1 2.6-1 .7 0 1.4.2 2 .5.6.3 1.1.8 1.5 1.4 0 0-.6 4.4 2.1 4.6 2.7.2 3.4-3.3 3.4-3.3.3-.1.6-.2 1-.2s.8.1 1.1.3c.3.2.6.5.7.8 0 0-.2 4.2 2.5 4.2l2.6-2.1c.3-.1.7-.2 1.1-.2 1.7 0 3 1.3 3 3 0 1.6-1.3 3.8-2.8 4H4.1c-.1-.5-.1-1.1-.1-2zm20 30c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zM4.5 22H22v8.2c-4.6.9-8 5-8 9.8s3.4 8.9 8 9.8V58H8.4L4.5 22zm35.1 36H26v-8.2c4.6-.9 8-5 8-9.8s-3.4-8.9-8-9.8V22h17.5l-3.9 36z",
      fill: "#333"
    })
  );
};

exports.default = Popcorn;