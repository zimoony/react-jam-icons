"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bell = function Bell(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 50 64" }, props),
    _react2.default.createElement("path", {
      d: "M24.8 63.1c4.4 0 8.3-2 10.9-5.1H13.9c2.6 3.1 6.6 5.1 10.9 5.1zM43 41V23c0-9.3-7-16.9-16-17.9V2c0-1.1-.9-2-2-2s-2 .9-2 2v3.1C14 6.1 7 13.7 7 23v18c0 4.3-3 7.9-7 8.8V56h50v-6.2c-4-.9-7-4.5-7-8.8zM4.9 52c3.7-2.3 6.1-6.4 6.1-11V23c0-7.2 5.4-13.1 12.4-13.9l1.6-.2 1.6.2C33.6 9.9 39 15.8 39 23v18c0 4.6 2.4 8.7 6.1 11 .3.2-40.5.2-40.2 0z",
      fill: "#343434"
    })
  );
};

exports.default = Bell;