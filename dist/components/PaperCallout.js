'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PaperButton = require('./PaperButton');

var _PaperButton2 = _interopRequireDefault(_PaperButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaperCallout = _react2.default.createClass({
  displayName: 'PaperCallout',

  propTypes: {
    buttonLabel: _react2.default.PropTypes.string,
    buttonTheme: _react2.default.PropTypes.string,
    message: _react2.default.PropTypes.string,
    onButtonClick: _react2.default.PropTypes.func
  },

  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'paper-toolbar hv-callout hv-callout--info hv-callout--box' },
      _react2.default.createElement(
        'div',
        { className: 'paper-tile layout horizontal center justified' },
        _react2.default.createElement(
          'div',
          { className: 'paper-tile__content' },
          _react2.default.createElement(
            'h4',
            null,
            _react2.default.createElement(
              'strong',
              null,
              this.props.message
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'paper-tile__content layout horizontal' },
          _react2.default.createElement(
            _PaperButton2.default,
            { onClick: this.props.onButtonClick, theme: this.props.buttonTheme || 'danger', type: 'flat' },
            this.props.buttonLabel
          )
        )
      )
    );
  }
});

module.exports = PaperCallout;