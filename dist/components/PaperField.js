'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PaperSelect = require('./PaperSelect');

var _PaperSelect2 = _interopRequireDefault(_PaperSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaperField = _react2.default.createClass({
  displayName: 'PaperField',

  propTypes: {
    default: _react2.default.PropTypes.string,
    disabled: _react2.default.PropTypes.bool,
    error: _react2.default.PropTypes.string,
    help: _react2.default.PropTypes.string,
    label: _react2.default.PropTypes.string,
    maxLength: _react2.default.PropTypes.number,
    name: _react2.default.PropTypes.string,
    onBlur: _react2.default.PropTypes.func,
    onChange: _react2.default.PropTypes.func,
    onDefaultClick: _react2.default.PropTypes.func,
    onFocus: _react2.default.PropTypes.func,
    options: _react2.default.PropTypes.array,
    placeholder: _react2.default.PropTypes.string,
    readOnly: _react2.default.PropTypes.bool,
    type: _react2.default.PropTypes.oneOf(['text', 'textarea', 'password', 'number', 'select']),
    value: _react2.default.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      type: 'text'
    };
  },
  getInitialState: function getInitialState() {
    return {
      isActive: false
    };
  },
  _handleFocus: function _handleFocus() {
    this.setState({
      isActive: true
    });

    if (this.props.onFocus) {
      this.props.onFocus();
    }
  },
  _handleBlur: function _handleBlur() {
    this.setState({
      isActive: false
    });

    if (this.props.onBlur) {
      this.props.onBlur();
    }
  },
  _handleChange: function _handleChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  },
  _handleResetClick: function _handleResetClick() {
    if (this.props.onDefaultClick) {
      this.props.onDefaultClick();
    }
  },
  render: function render() {
    var classes = ['paper-field', this.props.error ? 'isNotValid' : null, this.state.isActive ? 'isActive' : null, this.props.disabled ? 'isDisabled' : null];

    return _react2.default.createElement(
      'div',
      { className: classes.join(' ') },
      this.props.label ? _react2.default.createElement(
        'div',
        { className: 'paper-field__label' },
        this.props.label,
        this.props.help ? _react2.default.createElement(
          'i',
          { className: 'material-icons md-18 text--info-toggle' },
          'help'
        ) : null
      ) : null,
      this.props.help ? _react2.default.createElement(
        'div',
        { className: 'paper-field__help' },
        _react2.default.createElement(
          'p',
          { className: 'settings__desc' },
          this.props.help
        )
      ) : null,
      this.props.default ? _react2.default.createElement(
        'div',
        { className: 'color--muted settings__inheritance' },
        _react2.default.createElement(
          'span',
          null,
          this.props.default
        ),
        ' ',
        _react2.default.createElement(
          'a',
          { className: 'text--danger', onClick: this._handleResetClick },
          'Reset To Default'
        )
      ) : null,
      _react2.default.createElement(
        'div',
        { className: 'paper-field__body' },
        this.props.type === 'textarea' ? _react2.default.createElement('textarea', {
          className: 'paper-field__field paper-field__field--multiline',
          disabled: this.props.disabled,
          maxLength: this.props.maxLength,
          name: this.props.name,
          onBlur: this._handleBlur,
          onChange: this._handleChange,
          onFocus: this._handleFocus,
          placeholder: this.props.placeholder,
          readOnly: this.props.readOnly,
          rows: 2,
          value: this.props.value
        }) : null,
        this.props.type === 'select' ? _react2.default.createElement(_PaperSelect2.default, {
          name: this.props.name,
          onChange: this._handleChange,
          options: this.props.options,
          placeholder: this.props.placeholder
        }) : null,
        this.props.type !== 'textarea' && this.props.type !== 'select' ? _react2.default.createElement('input', {
          className: 'paper-field__field',
          disabled: this.props.disabled,
          maxLength: this.props.maxLength,
          name: this.props.name,
          onBlur: this._handleBlur,
          onChange: this._handleChange,
          onFocus: this._handleFocus,
          placeholder: this.props.placeholder,
          readOnly: this.props.readOnly,
          type: this.props.type,
          value: this.props.value
        }) : null,
        _react2.default.createElement('hr', { className: 'paper-field__hr' })
      ),
      this.props.error || this.props.maxLength ? _react2.default.createElement(
        'div',
        { className: 'paper-field__footer' },
        this.props.error ? _react2.default.createElement(
          'div',
          { className: 'paper-field__desc paper-field__desc--visible' },
          _react2.default.createElement(
            'div',
            { className: 'test--error-message' },
            this.props.error
          )
        ) : null,
        this.props.maxLength ? _react2.default.createElement(
          'div',
          { className: 'paper-field__counter' },
          _react2.default.createElement(
            'span',
            { className: 'paper-field__counterCount' },
            this.props.value.length
          ),
          ' / ',
          _react2.default.createElement(
            'span',
            { className: 'paper-field__counterLimit' },
            this.props.maxLength
          )
        ) : null
      ) : null
    );
  }
});

module.exports = PaperField;