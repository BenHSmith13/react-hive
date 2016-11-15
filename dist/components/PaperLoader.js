'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaperLoader = _react2.default.createClass({
  displayName: 'PaperLoader',
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'paper-loader--circular hv-size--64 color--accent' },
      _react2.default.createElement(
        'svg',
        { className: 'paper-loader__circle', viewBox: '25 25 50 50' },
        _react2.default.createElement('circle', {
          className: 'paper-loader__path',
          cx: '50',
          cy: '50',
          fill: 'none',
          r: '20',
          stroke: 'currentColor',
          'stroke-miterlimit': '10',
          'stroke-width': '3'
        })
      )
    );
  }
});

module.exports = PaperLoader;