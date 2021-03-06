"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = function Info(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", {
      d: "M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0zm0 60C16.5 60 4 47.5 4 32S16.5 4 32 4s28 12.5 28 28-12.5 28-28 28zm2.1-16.5c-.7.8-1.3 1.2-1.7 1.2-.2 0-.3 0-.5-.1s-.2-.3-.2-.6.1-1.1.4-2.2c.1-.4.3-1.2.6-2.3l3.6-13.1-2 .4c-.7.1-1.9.3-3.5.5-1.7.2-2.9.3-3.8.4v1.2c1 0 1.7.1 2.1.3s.6.5.6 1.1v.3c0 .1 0 .2-.1.4l-2.8 10.4c-.2.8-.4 1.4-.5 1.8-.2.8-.3 1.4-.3 1.8 0 1.1.3 1.9 1 2.4s1.4.8 2.3.8c1.5 0 2.9-.6 4.2-1.9.8-.8 1.9-2.3 3.4-4.5l-1-.7c-.5.8-1.2 1.6-1.8 2.4zm.8-27.5c-.9 0-1.6.3-2.2.9s-.9 1.3-.9 2.2c0 .9.3 1.6.9 2.2s1.3.9 2.2.9c.9 0 1.6-.3 2.2-.9s.9-1.3.9-2.2c0-.9-.3-1.6-.9-2.2s-1.3-.9-2.2-.9z",
      fill: "#343434"
    })
  );
};

exports.default = Info;