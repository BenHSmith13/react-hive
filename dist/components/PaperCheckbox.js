'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaperCheckbox = _react2.default.createClass({
  displayName: 'PaperCheckbox',

  propTypes: {
    checked: _react2.default.PropTypes.bool,
    disabled: _react2.default.PropTypes.bool,
    onChange: _react2.default.PropTypes.func
  },

  _handleOnChange: function _handleOnChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  },
  render: function render() {
    var classes = ['paper-checkbox', this.props.disabled ? 'isDisabled' : null];

    return _react2.default.createElement(
      'label',
      { className: classes.join(' ') },
      _react2.default.createElement('input', {
        checked: this.props.checked,
        disabled: this.props.disabled,
        onChange: this._handleOnChange,
        type: 'checkbox'
      }),
      _react2.default.createElement('span', { className: 'paper-checkbox__box' }),
      _react2.default.createElement('span', { className: 'paper-checkbox__check' })
    );
  }
});

module.exports = PaperCheckbox;