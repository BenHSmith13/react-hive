'use strict';

var _compact2 = require('lodash/compact');

var _compact3 = _interopRequireDefault(_compact2);

var _keys2 = require('lodash/keys');

var _keys3 = _interopRequireDefault(_keys2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cssMap = {
  display: {
    block: 'paper-btn--block'
  },
  shape: {
    round: 'paper-btn--round'
  },
  size: {
    small: 'paper-btn--sm',
    large: 'paper-btn--lg'
  },
  state: {
    active: 'isActive',
    disabled: 'isDisabled'
  },
  theme: {
    primary: 'paper-btn--primary',
    secondary: 'paper-btn--secondary',
    accent: 'paper-btn--accent',
    info: 'paper-btn--info',
    danger: 'paper-btn--danger'
  },
  type: {
    flat: 'paper-btn--flat',
    line: 'paper-btn--line',
    raised: 'paper-btn--raised'
  }
};

var PaperButton = _react2.default.createClass({
  displayName: 'PaperButton',

  propTypes: {
    display: _react2.default.PropTypes.oneOf((0, _keys3.default)(cssMap.display)),
    icon: _react2.default.PropTypes.string,
    iconLocation: _react2.default.PropTypes.oneOf(['left', 'right']),
    onClick: _react2.default.PropTypes.func,
    shape: _react2.default.PropTypes.oneOf((0, _keys3.default)(cssMap.shape)),
    size: _react2.default.PropTypes.oneOf((0, _keys3.default)(cssMap.size)),
    state: _react2.default.PropTypes.oneOf((0, _keys3.default)(cssMap.state)),
    theme: _react2.default.PropTypes.oneOf((0, _keys3.default)(cssMap.theme)),
    type: _react2.default.PropTypes.oneOf((0, _keys3.default)(cssMap.type))
  },

  _handleClick: function _handleClick(e) {
    if (this.props.onClick && this.props.state !== 'disabled') {
      this.props.onClick();
    }

    e.preventDefault();
  },
  render: function render() {
    return _react2.default.createElement(
      'button',
      { className: this.css(), onClick: this._handleClick, type: 'button' },
      this.props.icon && this.props.iconLocation !== 'right' ? _react2.default.createElement(
        'i',
        { className: 'material-icons md-18 left' },
        this.props.icon
      ) : null,
      this.props.children,
      this.props.icon && this.props.iconLocation === 'right' ? _react2.default.createElement(
        'i',
        { className: 'material-icons md-18 right' },
        this.props.icon
      ) : null
    );
  },
  css: function css() {
    var classes = (0, _compact3.default)(['paper-btn', cssMap.display[this.props.display], cssMap.shape[this.props.shape], cssMap.size[this.props.size], cssMap.state[this.props.state], cssMap.theme[this.props.theme], cssMap.type[this.props.type], this.props.icon && !this.props.children ? 'paper-btn--icon' : null]);

    return classes.join(' ');
  }
});

module.exports = PaperButton;