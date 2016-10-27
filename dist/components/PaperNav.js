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
    logo_description: _react2.default.PropTypes.node,
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
  _handleLinkClick: function _handleLinkClick(link, state_name, e) {
    if (link.children) {
      if (state_name) {
        this.setState(_defineProperty({}, state_name, link.title === this.state[state_name] ? null : link.title));
      }
    } else if (link.link_route) {
      window.location = link.link_route;
    }

    e.preventDefault();
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
              { className: 'hv-size--24' },
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
      { className: 'core-nav' },
      this.props.logo_url || this.props.logo_label ? _react2.default.createElement(
        'header',
        { className: 'hv-part abs-top core-nav__header' },
        _react2.default.createElement(
          'div',
          { className: 'container container--full container--compact' },
          _react2.default.createElement(
            'div',
            { className: 'paper-tile hv-height--48 layout horizontal center' },
            this.props.logo_url ? _react2.default.createElement(
              'div',
              { className: 'paper-tile__content hv-truncate self-center' },
              _react2.default.createElement(
                'div',
                { className: 'hv-size--48' },
                _react2.default.createElement('img', { className: 'img--responsive', src: this.props.logo_url })
              )
            ) : null,
            _react2.default.createElement(
              'div',
              { className: 'paper-tile__content hv-truncate self-center' },
              this.props.logo_label ? _react2.default.createElement(
                'h4',
                { className: 'text--uppercase hv-truncate' },
                _react2.default.createElement(
                  'strong',
                  null,
                  this.props.logo_label
                )
              ) : null,
              this.props.logo_description ? _react2.default.createElement(
                'div',
                { className: 'hv-truncate' },
                _react2.default.createElement(
                  'small',
                  { className: 'color--disabled' },
                  this.props.logo_description
                )
              ) : null
            )
          )
        )
      ) : null,
      _react2.default.createElement(
        'div',
        { className: 'fit core-nav__content' },
        _react2.default.createElement(
          'div',
          { className: 'hv-part' },
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
          { className: 'hv-part' },
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
                    { className: 'paper-tile layout horizontal center', onClick: _this._handleLinkClick.bind(null, link) },
                    _react2.default.createElement(
                      'div',
                      { className: 'paper-tile__content' },
                      link.title
                    )
                  )
                );
              })
            )
          )
        ) : null
      ),
      this.props.footer ? _react2.default.createElement(
        'footer',
        { className: 'abs-bottom core-nav__footer' },
        _react2.default.createElement(
          'div',
          { className: 'hv-part paper-tile layout horizontal justified center' },
          _react2.default.createElement(
            'div',
            { className: 'paper-tile__content' },
            this.props.footer
          )
        )
      ) : null
    );
  }
});

module.exports = PaperNav;