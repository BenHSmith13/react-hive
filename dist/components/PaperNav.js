'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PaperIcon = require('./PaperIcon');

var _PaperIcon2 = _interopRequireDefault(_PaperIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var linkStructure = {
  title: _react2.default.PropTypes.string,
  icon: _react2.default.PropTypes.string,
  link_route: _react2.default.PropTypes.string,
  required_permissions: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
  children: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object)
};

var PaperNav = _react2.default.createClass({
  displayName: 'PaperNav',

  propTypes: {
    footer: _react2.default.PropTypes.node,
    logo_label: _react2.default.PropTypes.string,
    logo_url: _react2.default.PropTypes.string,
    primary: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape(linkStructure)).isRequired,
    secondary: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape(linkStructure))
  },

  getInitialState: function getInitialState() {
    return {
      active_top_level_menu: null,
      active_second_level_menu: null
    };
  },
  _handleLinkClick: function _handleLinkClick(link, state_name) {
    if (link.link_route) {
      window.location = link.link_route;
    }

    if (state_name) {
      this.setState(_defineProperty({}, state_name, link.title === this.state[state_name] ? null : link.title));
    }
  },
  _renderTopLevelLink: function _renderTopLevelLink(link, i) {
    var classes = ['paper-list__item core-nav__app', link.children ? 'hasSubmenu' : '', this.state.active_top_level_menu === link.title ? 'isOpen' : '', link.is_active ? 'isActive' : ''];

    return _react2.default.createElement(
      'li',
      { className: 'paper-list__row', key: i },
      _react2.default.createElement(
        'a',
        { className: classes.join(' '), onClick: this._handleLinkClick.bind(null, link, 'active_top_level_menu') },
        _react2.default.createElement(
          'div',
          { className: 'paper-tile layout horizontal center' },
          _react2.default.createElement(
            'div',
            { className: 'paper-tile__content' },
            _react2.default.createElement(
              'div',
              { className: 'hv-size--24 layout horizontal center-center' },
              _react2.default.createElement(_PaperIcon2.default, { icon: link.icon })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'paper-tile__content' },
            _react2.default.createElement(
              'h5',
              null,
              link.title
            )
          )
        )
      ),
      link.children ? _react2.default.createElement(
        'ul',
        { className: 'paper-list paper-list--nav-tree' },
        link.children.map(this._renderSecondLevelLink)
      ) : null
    );
  },
  _renderSecondLevelLink: function _renderSecondLevelLink(link, i) {
    var classes = ['paper-list__item', link.children ? 'hasSubmenu' : '', this.state.active_second_level_menu === link.title ? 'isOpen' : ''];

    return _react2.default.createElement(
      'li',
      { className: 'paper-list__row', key: i },
      _react2.default.createElement(
        'a',
        { className: classes.join(' '), onClick: this._handleLinkClick.bind(null, link, 'active_second_level_menu') },
        _react2.default.createElement(
          'div',
          { className: 'paper-tile layout horizontal justified center' },
          _react2.default.createElement(
            'div',
            { className: 'paper-tile__content' },
            link.title
          ),
          link.children ? _react2.default.createElement(
            'div',
            { className: 'paper-tile__content' },
            _react2.default.createElement(
              'i',
              { className: 'material-icons md-18' },
              'arrow_drop_down'
            )
          ) : null
        )
      ),
      link.children ? _react2.default.createElement(
        'ul',
        { className: 'paper-list paper-list--nav-tree' },
        link.children.map(this._renderThirdLevelLink)
      ) : null
    );
  },
  _renderThirdLevelLink: function _renderThirdLevelLink(link, i) {
    return _react2.default.createElement(
      'li',
      { className: 'paper-list__row', key: i },
      _react2.default.createElement(
        'a',
        { className: 'paper-list__item', onClick: this._handleLinkClick.bind(null, link) },
        _react2.default.createElement(
          'div',
          { className: 'paper-tile layout horizontal justified center' },
          _react2.default.createElement(
            'div',
            { className: 'paper-tile__content' },
            link.title
          )
        )
      )
    );
  },
  render: function render() {
    var _this = this;

    return _react2.default.createElement(
      'nav',
      { className: 'core-nav layout vertical justified' },
      _react2.default.createElement(
        'div',
        { className: 'flex--firm' },
        this.props.logo_url || this.props.logo_label ? _react2.default.createElement(
          'header',
          { className: 'hv-part' },
          _react2.default.createElement(
            'div',
            { className: 'container container--full container--compact' },
            _react2.default.createElement(
              'div',
              { className: 'paper-tile layout horizontal center' },
              this.props.logo_url ? _react2.default.createElement(
                'div',
                { className: 'paper-tile__content' },
                _react2.default.createElement(
                  'a',
                  { className: 'color--primary' },
                  _react2.default.createElement('img', { className: 'img--responsive hv-size--36', src: this.props.logo_url })
                )
              ) : null,
              this.props.logo_label ? _react2.default.createElement(
                'div',
                { className: 'paper-tile__content' },
                _react2.default.createElement(
                  'h4',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    this.props.logo_label
                  )
                )
              ) : null
            )
          )
        ) : null,
        _react2.default.createElement(
          'div',
          { className: 'container container--full container--compact' },
          _react2.default.createElement('div', { className: 'paper-divider paper-divider--thick' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'hv-part hv-part--m' },
          _react2.default.createElement(
            'ul',
            { className: 'paper-list paper-list--nav-tree' },
            this.props.primary.map(this._renderTopLevelLink)
          )
        ),
        this.props.secondary || this.props.footer ? _react2.default.createElement(
          'div',
          { className: 'container container--full container--compact' },
          _react2.default.createElement('div', { className: 'paper-divider paper-divider--thick' })
        ) : null,
        this.props.secondary ? _react2.default.createElement(
          'div',
          { className: 'hv-part hv-part--m' },
          _react2.default.createElement(
            'div',
            { className: 'container container--full container--compact' },
            _react2.default.createElement(
              'ul',
              { className: 'paper-list' },
              this.props.secondary.map(function (link, i) {
                return _react2.default.createElement(
                  'li',
                  { className: 'paper-list__row', key: i },
                  _react2.default.createElement(
                    'a',
                    { className: 'paper-tile', onClick: _this._handleLinkClick.bind(null, link) },
                    link.title
                  )
                );
              })
            )
          )
        ) : null
      ),
      this.props.footer ? _react2.default.createElement(
        'footer',
        { className: 'paper-toolbar paper-toolbar--footer layout horizontal center self-end flex-none' },
        _react2.default.createElement(
          'div',
          { className: 'container container--full container--compact' },
          _react2.default.createElement('div', { className: 'paper-divider paper-divider--thick' }),
          _react2.default.createElement(
            'div',
            { className: 'hv-part hv-part--m paper-tile layout horizontal center' },
            _react2.default.createElement(
              'div',
              { className: 'paper-tile__content' },
              this.props.footer
            )
          )
        )
      ) : null
    );
  }
});

module.exports = PaperNav;