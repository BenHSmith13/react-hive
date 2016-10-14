'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _keys2 = require('lodash/keys');

var _keys3 = _interopRequireDefault(_keys2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = {
  account: _react2.default.createElement('path', { d: 'M12 13a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-7a3 3 0 1 1-3 3 3 3 0 0 1 3-3zm0 8c-2.7 0-8 1.3-8 4v1.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V18c0-2.7-5.3-4-8-4zm7 5H5v-1c0-1.6 4.3-3 7-3s7 1.4 7 3v1z' }),
  insights: _react2.default.createElement(
    'g',
    null,
    _react2.default.createElement('path', { d: 'M6.5 11a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-2zM8 18H7v-6h1v6zm2.5-10a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5h-2zM12 18h-1V9h1v9zm2.5-5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-2zm1.5 5h-1v-4h1v4zm3.5-14A2.5 2.5 0 0 0 18 8.5V9a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-.5A2.5 2.5 0 0 0 19.5 4zm.9 3.7L20 8v1h-1V8l-.4-.3a1.5 1.5 0 0 1-.6-1.2 1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1-.6 1.2zm.1 3.3h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm-1-8a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-1 0v1a.5.5 0 0 0 .5.5zm-2.6.6a.5.5 0 0 0 .7-.7l-.7-.7a.5.5 0 0 0-.7.7zm6-1.5a.5.5 0 0 0-.7 0l-.7.7a.5.5 0 1 0 .7.7l.7-.7a.5.5 0 0 0 0-.7z' }),
    _react2.default.createElement('path', { d: 'M19.5 14a.5.5 0 0 0-.5.5v6a.5.5 0 0 1-.5.5h-14a.5.5 0 0 1-.5-.5v-14a.5.5 0 0 1 .5-.5h10a.5.5 0 0 0 0-1h-10A1.5 1.5 0 0 0 3 6.5v14A1.5 1.5 0 0 0 4.5 22h14a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-.5-.5z' })
  ),
  manage: _react2.default.createElement(
    'g',
    null,
    _react2.default.createElement('path', { d: 'M17 10h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm0 4h1v1h-1zm0-2h1v1h-1zM9 8h1v1H9zm0 2h1v1H9zm0 2h1v1H9zm0 2h1v1H9zm0 4h1v1H9zm0-2h1v1H9zM7 8h1v1H7zm0 2h1v1H7zm0 2h1v1H7zm0 2h1v1H7zm0 4h1v1H7zm0-2h1v1H7zm4-8h1v1h-1zM9 6h1v1H9zM7 6h1v1H7zm4 0h1v1h-1zm0 4h1v1h-1zm0 2h1v1h-1zm0 2h1v1h-1zm0 4h1v1h-1zm0-2h1v1h-1z' }),
    _react2.default.createElement('path', { d: 'M21.5 21H21V9.4a2 2 0 0 0-1.3-1.8L15 6V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v17h-.5a.5.5 0 0 0 0 1h18a.5.5 0 0 0 0-1zM14 4.6V21H5V4h9v.6zM20 21h-5V7.1l4.4 1.5a1 1 0 0 1 .6.8V21z' })
  ),
  more: _react2.default.createElement(
    'g',
    null,
    _react2.default.createElement('path', { d: 'M12 9a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm0-3a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm0 4a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm0 2a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1 1 0 0 1-1 1z' })
  ),
  teem: _react2.default.createElement(
    'g',
    null,
    _react2.default.createElement('path', { d: 'M87.3 92.6c-3.7-1.8-8.2-.3-10 3.4-5.3 10.8-18.4 15.2-29.1 9.9C40.7 102.2 36 94.6 36 86.3V48.4h36.3c4.1.2 7.6-2.9 7.8-7.1s-2.9-7.6-7.1-7.8H36V7.2c-.2-4.1-3.6-7.3-7.7-7.2-3.9.1-7 3.3-7.2 7.2v26.3H7.7C3.6 33.3.1 36.6 0 40.7s3.1 7.6 7.2 7.7H21v37.9c0 20.3 16.4 36.7 36.7 36.6 13.9 0 26.7-7.9 32.9-20.4 1.8-3.7.3-8.1-3.3-9.9zm148.6-59.1c-17.6 0-33.5 10.3-40.8 26.2-1.7 3.8 0 8.2 3.7 9.9L259.3 97c-5.7 7.1-14.3 11.2-23.3 11.2-12.3 0-21.1-2.7-29.5-9.1-3.2-2.6-7.9-2.2-10.5 1-2.6 3.2-2.2 7.9 1 10.5.2.1.3.2.5.4 11 8.4 22.9 12.1 38.5 12.1 17.5 0 33.4-10.2 40.7-26.1l.3-.7c10-22.6-.3-49.1-22.9-59.1-5.8-2.4-11.9-3.7-18.2-3.7zm29.4 49.9l-52.7-23.9c10.4-12.8 29.2-14.8 42.1-4.4 8.4 6.8 12.5 17.6 10.6 28.3zm120.3-49.9c-11.5 0-22.3 5.4-29.2 14.5-12.2-16.1-35.2-19.3-51.3-7.1-9.2 6.9-14.5 17.8-14.5 29.3v45.3c.2 4.1 3.6 7.3 7.7 7.2 3.9-.1 7-3.3 7.2-7.2V70.2c0-12 9.8-21.8 21.8-21.7 12 0 21.7 9.7 21.7 21.7v45.5c.2 4.1 3.6 7.3 7.7 7.2 3.9-.1 7-3.3 7.2-7.2V70.2c0-12 9.8-21.8 21.8-21.7 12 0 21.7 9.7 21.7 21.7v45.3c.4 4.1 4 7.1 8.1 6.8 3.6-.3 6.4-3.2 6.8-6.8V70.2c-.1-20.2-16.5-36.6-36.7-36.7zm-202.8 32c.7-1.9.6-3.9-.2-5.7-10.1-22.6-36.6-32.7-59.2-22.6s-32.7 36.6-22.6 59.2l.3.7c7.3 15.9 23.2 26.1 40.7 26.1 15.6 0 27.5-3.7 38.5-12.1 3.4-2.4 4.2-7 1.8-10.4s-7-4.2-10.4-1.8c-.2.1-.3.2-.5.4-8.4 6.4-17.2 9.1-29.5 9.1-9.1 0-17.7-4.1-23.4-11.2l60.4-27.3c2-1.1 3.4-2.6 4.1-4.4zm-70.5 17.9c-2.8-16.3 8.1-31.8 24.3-34.6 10.7-1.9 21.6 2.2 28.4 10.7l-52.7 23.9z' })
  ),
  tools: _react2.default.createElement(
    'g',
    null,
    _react2.default.createElement('path', { d: 'M13.5 14h-8a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 18.5 4h-13A1.5 1.5 0 0 0 4 5.5v8A1.5 1.5 0 0 0 5.5 15h8a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5v1A1.5 1.5 0 0 0 3.5 19h10a.5.5 0 0 0 0-1h-10a.5.5 0 0 1-.5-.5V17h10.5z' }),
    _react2.default.createElement('path', { d: 'M20.5 9h-4a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 20.5 9zm.5 9.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v8z' }),
    _react2.default.createElement('path', { d: 'M18.5 17h-.4a.5.5 0 0 0-.1.4.5.5 0 0 0 .1.4h.7a.5.5 0 0 0 .1-.4.5.5 0 0 0-.1-.4h-.3z' })
  )
};

var PaperIcon = _react2.default.createClass({
  displayName: 'PaperIcon',

  propTypes: {
    icon: _react2.default.PropTypes.oneOf((0, _keys3.default)(icons))
  },

  render: function render() {
    var viewBox = this.props.icon === 'teem' ? '0 0 422.3 123.1' : '0 0 24 24';

    return _react2.default.createElement(
      'svg',
      { className: 'svg-icon hv-size--24', style: this.styles().component, viewBox: viewBox },
      icons[this.props.icon]
    );
  },
  styles: function styles() {
    return {
      component: _extends({}, {
        fill: '#232222'
      }, this.props.style)
    };
  }
});

module.exports = PaperIcon;