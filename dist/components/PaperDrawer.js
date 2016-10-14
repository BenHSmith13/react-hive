'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PaperButton = require('./PaperButton');

var _PaperButton2 = _interopRequireDefault(_PaperButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cssMap = {
  position: {
    'left': '',
    'right': 'paper-drawer--right'
  }
};

var PaperDrawer = _react2.default.createClass({
  displayName: 'PaperDrawer',

  propTypes: {
    buttons: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
      props: _react2.default.PropTypes.object,
      label: _react2.default.PropTypes.string
    })),
    header: _react2.default.PropTypes.string,
    onClose: _react2.default.PropTypes.func,
    position: _react2.default.PropTypes.oneOf(['left', 'right'])
  },

  getInitialState: function getInitialState() {
    return {
      isActive: false
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    setTimeout(function () {
      _this.setState({
        isActive: true
      });
    }, 100);
  },
  _handleCloseClick: function _handleCloseClick() {
    var _this2 = this;

    this.setState({
      isActive: false
    });

    setTimeout(function () {
      if (_this2.props.onClose) {
        _this2.props.onClose();
      }
    }, 300); //this needs to match the css animation time in hive
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: this.css() },
      _react2.default.createElement(
        'div',
        { className: 'paper-drawer__part paper-drawer__controls' },
        _react2.default.createElement(_PaperButton2.default, { icon: 'close', onClick: this._handleCloseClick, type: 'flat' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'paper-drawer__content' },
        this.props.header ? _react2.default.createElement(
          'header',
          { className: 'hv-part hv-part--m' },
          _react2.default.createElement(
            'div',
            { className: 'paper-drawer__container' },
            _react2.default.createElement(
              'h2',
              null,
              this.props.header
            )
          )
        ) : null,
        _react2.default.createElement(
          'div',
          { className: 'paper-drawer__container' },
          _react2.default.createElement('div', { className: 'paper-divider paper-divider--thick' }),
          this.props.children
        )
      ),
      this.props.buttons ? _react2.default.createElement(
        'div',
        { className: 'paper-drawer__controls paper-drawer__controls--footer paper-drawer__part layout horizontal center' },
        this.props.buttons.map(function (button, i) {
          return _react2.default.createElement(_PaperButton2.default, _extends({ key: i }, button));
        })
      ) : null
    );
  },
  css: function css() {
    var classes = ['paper-drawer', 'palm-one-whole', 'tablet-one-half', 'desktop-one-third', this.state.isActive ? 'isActive' : '', cssMap.position[this.props.position]];

    return classes.join(' ');
  }
});

module.exports = PaperDrawer;