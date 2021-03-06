"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spotify = function Spotify(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 45" }, props),
    _react2.default.createElement("path", {
      d: "M61.5 7.3C49.4 1.8 36.5-.6 23.2.1 16.3.5 9.5 1.7 2.9 3.8.7 4.5-.5 7.3.2 9.6c.7 2.2 3 3.5 5.2 2.8 6-1.9 12.1-3 18.4-3.3 12-.6 23.6 1.6 34.6 6.5.6.3 1.2.4 1.8.3 1.5-.1 2.9-1.5 3.6-3 .8-2.1-.2-4.6-2.3-5.6zM57 23.4C47.2 18.5 36.1 16 25 16c-6.2 0-12.4.8-18.3 2.3-1.9.5-3 3.6-2.5 5.4.5 1.8 2.5 2.9 4.4 2.4C13.9 24.7 19.5 24 25 24c10.1 0 19.7 2.2 28.6 6.6.5.3 1.1.4 1.7.4 1.3 0 2.5-1.9 3.2-3.1.9-1.6.2-3.7-1.5-4.5zm-4.8 14.3C43.9 33.3 34.5 31 25 31c-5.7 0-11.3.8-16.7 2.4-1.7.5-2.6 3.9-2.1 5.5s2.3 2.5 4 2C15 39.4 20 38.7 25 38.7c8.4 0 16.8 2.1 24.1 5.9.5.3 1 .4 1.5.4 1.1 0 2.2-.6 2.7-1.6 1-1.4.4-4.9-1.1-5.7z",
      fill: "#343434"
    })
  );
};

exports.default = Spotify;