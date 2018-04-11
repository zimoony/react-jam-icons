"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Shop = function Shop(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 60" }, props),
    _react2.default.createElement("path", {
      d: "M60 0H4C1.8 0 0 1.8 0 4v52c0 2.2 1.8 4 4 4h56c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm0 3c.6 0 1 .5 1 1v7c0 3.3-2.7 6-6 6s-6-2.7-6-6V3h11zM46 3v8c0 3.3-2.7 6-6 6s-6-2.7-6-6V3h12zM31 3v7.5c0 3.6-2.9 6.5-6.5 6.5S18 14.1 18 10.5V3h13zM15 3v8c0 3.3-2.7 6-6 6s-6-2.7-6-6V4c0-.6.5-1 1-1h11zm24 54V46h14v11H39zm14-14H39V29h14v14zm7 14h-4V28c0-1.1-.9-2-2-2H38c-1.1 0-2 .9-2 2v29H4c-.6 0-1-.5-1-1V17.7C4.6 19.1 6.7 20 9 20c3.2 0 6-1.7 7.6-4.2 1.7 2.5 4.6 4.2 7.9 4.2 3.3 0 6.2-1.7 7.9-4.2C34 18.3 36.8 20 40 20c3.1 0 5.9-1.6 7.5-4 1.6 2.4 4.4 4 7.5 4 2.3 0 4.4-.9 6-2.3V56c0 .5-.5 1-1 1zM28 26H10c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V28c0-1.1-.9-2-2-2zm-1 17H11V29h16v14z",
      fill: "#333"
    })
  );
};

exports.default = Shop;