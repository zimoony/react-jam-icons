"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Jsfiddle = function Jsfiddle(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 65 44" }, props),
    _react2.default.createElement("path", {
      d: "M56.6 19.9l.1-1.4C56.6 8.3 48.3 0 38.1 0c-7.5 0-13.9 4.4-16.9 10.8C19.6 9.7 17.7 9 15.7 9c-5.2 0-9.5 4.2-9.5 9.5 0 .8.1 1.5.3 2.3C2.6 22.9 0 26.9 0 31.6 0 38.5 5.6 44 12.4 44h40.1C59.4 44 65 38.5 65 31.6c0-5.4-3.5-10-8.4-11.7zm-.8 10.6c-.4 4.5-3.5 9.3-11 9.3-5.7 0-11.1-6-13.4-9.3 0 0-4.4-6.8-9.3-6.6-4.7.2-6 2.7-6.2 4.9-.2 2.2 1.1 4.4 3.1 5.5 2.6 1.3 5.8.5 9-2.3l3.2 3.7c-3.1 2.7-6.5 4.1-9.6 4.1-1.7 0-3.3-.4-4.8-1.2-3.8-2-6.1-6.1-5.7-10.3.4-4.5 3.5-9.3 11-9.3 6.7 0 11.4 6.1 12.9 8.2 2.5 3.5 7 7.7 9.7 7.7 4.7 0 6-2.7 6.2-4.9.2-2.2-1.1-4.5-3.1-5.6-2.6-1.3-5.8-.5-9 2.3L35.6 23c4.8-4.1 10-5.2 14.4-2.9 3.9 2 6.2 6.2 5.8 10.4z",
      fill: "#343434"
    })
  );
};

exports.default = Jsfiddle;