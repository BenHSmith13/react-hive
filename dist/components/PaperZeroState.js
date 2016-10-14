'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaperZeroState = _react2.default.createClass({
  displayName: 'PaperZeroState',

  propTypes: {
    icon: _react2.default.PropTypes.string,
    title: _react2.default.PropTypes.string
  },

  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'hv-part hv-part--m text--center text--disabled' },
      _react2.default.createElement(
        'div',
        { className: 'paper-avatar hv-size--64' },
        _react2.default.createElement(
          'div',
          { className: 'paper-avatar__initial fit layout horizontal center-center' },
          _react2.default.createElement(
            'i',
            { className: 'material-icons md-36' },
            this.props.icon || 'info'
          )
        )
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'h2',
        null,
        this.props.title
      ),
      _react2.default.createElement(
        'div',
        { className: 'grid hv-part' },
        _react2.default.createElement(
          'div',
          { className: 'grid__item tablet-one-half' },
          this.props.children
        )
      )
    );
  }
});

module.exports = PaperZeroState;