"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Directions = function Directions(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 59 64" }, props),
    _react2.default.createElement("path", {
      d: "M54 32H29v-5h22l8-9-8-10H29V2c0-1.1-.9-2-2-2s-2 .9-2 2v6H5c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h20v5H8L0 42l8 9h17v11c0 1.1.9 2 2 2s2-.9 2-2V51h25c1.1 0 2-.9 2-2V34c0-1.1-.9-2-2-2zM7 23V12h42.1l4.7 5.9-4.6 5.1H7zm45 24H9.6L5 41.9 9.7 36H52v11z",
      fill: "#343434"
    })
  );
};

exports.default = Directions;