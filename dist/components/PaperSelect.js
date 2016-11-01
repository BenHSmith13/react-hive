'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaperSelect = _react2.default.createClass({
  displayName: 'PaperSelect',

  propTypes: {
    name: _react2.default.PropTypes.string,
    onChange: _react2.default.PropTypes.func,
    options: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
      value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]).isRequired
    })),
    placeholder: _react2.default.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      options: []
    };
  },
  _handleOnChange: function _handleOnChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'select',
        {
          className: 'paper-field__field paper-field__field--select',
          defaultValue: this.props.placeholder,
          name: this.props.name,
          onChange: this._handleOnChange,
          placeholder: this.props.placeholder,
          style: { height: '1em' }
        },
        this.props.placeholder ? _react2.default.createElement(
          'option',
          { disabled: true, value: null },
          this.props.placeholder
        ) : null,
        this.props.options.map(function (option) {
          return _react2.default.createElement(
            'option',
            { key: option.value, value: option.value },
            option.label || option.value
          );
        })
      ),
      _react2.default.createElement(
        'span',
        { className: 'paper-field__dropArrow' },
        _react2.default.createElement(
          'i',
          { className: 'material-icons md-18' },
          'arrow_drop_down'
        )
      )
    );
  }
});

module.exports = PaperSelect;