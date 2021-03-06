"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sword = function Sword(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 61 61" }, props),
    _react2.default.createElement("path", {
      d: "M60.9.6l-11.8.5-30.6 30.6-1.4-1.4c-.8-.8-2.1-.8-2.8 0l-2.8 2.8c-.8.8-.8 2 0 2.8l3.5 3.5-8.5 8.5c-.8-.8-2.1-.8-2.8 0L1.6 50c-.8.8-.8 2.1 0 2.8l7 7.2c.8.8 2.1.8 2.8 0l2.1-2.1c.8-.8.8-2 0-2.8l8.5-8.5 3.5 3.5c.8.8 2.1.8 2.8 0l2.8-2.8c.8-.8.8-2 0-2.8L29.8 43l30.6-30.6.5-11.8zM13.6 45.1l2.8 2.8-1.5 1.5-2.9-2.8 1.6-1.5zm-3 2.9l2.8 2.8-2 2L8.6 50l2-2zm-.6 9.1l-5.7-5.7.7-.7 5.7 5.7-.7.7zm7.8-10.6L15 43.7l2.1-2.1 2.8 2.8-2.1 2.1zm10.6-.7L27 47.2l-2.8-2.8-7.1-7.1-2.8-2.8 1.4-1.4.7.7 11.3 11.3.7.7zm29.1-34.7L27.7 40.9l-3.5-3.5-3.5-3.5L50.4 4l7.4-.3-.3 7.4zm-17.1 8.6L24.9 35.2c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0L41.9 21c.4-.4.4-1 0-1.4-.5-.3-1.1-.3-1.5.1z",
      fill: "#333"
    })
  );
};

exports.default = Sword;