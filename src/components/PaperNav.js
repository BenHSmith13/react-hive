import React from 'react';

import PaperIcon from './PaperIcon';

import Styles from '../constants/Styles';

const linkStructure = {
  title: React.PropTypes.string,
  icon: React.PropTypes.string,
  link_route: React.PropTypes.string,
  required_permissions: React.PropTypes.arrayOf(React.PropTypes.string),
  children: React.PropTypes.arrayOf(React.PropTypes.object),
};

const PaperNav = React.createClass({
  propTypes: {
    footer: React.PropTypes.node,
    logo_description: React.PropTypes.node,
    logo_label: React.PropTypes.string,
    logo_url: React.PropTypes.string,
    onLinkClick: React.PropTypes.func,
    primary: React.PropTypes.arrayOf(React.PropTypes.shape(linkStructure)).isRequired,
    secondary: React.PropTypes.arrayOf(React.PropTypes.shape(linkStructure)),
    shouldShowLink: React.PropTypes.func,
  },

  getDefaultProps () {
    return {
      shouldShowLink () {
        return true;
      },
    };
  },

  getInitialState () {
    return {
      active_top_level_menu: null,
      active_second_level_menu: null,
    };
  },

  _handleLinkClick (link, state_name, e) {
    if (link.children) {
      if (state_name) {
        this.setState({
          [state_name]: link.title === this.state[state_name] ? null : link.title,
        });

        e.preventDefault();
      }
    }

    if (this.props.onLinkClick) {
      this.props.onLinkClick(e, link);
    }
  },

  _checkIfActive (link) {
    return window.location.href.indexOf(link.link_route) > -1;
  },

  _renderTopLevelLink (link, i) {
    if (this.props.shouldShowLink(link)) {
      const is_active = this.state.active_top_level_menu === link.title || this._checkIfActive(link);
      const classes = [
        'paper-list__item core-nav__app',
        link.children ? 'hasSubmenu' : '',
        this.state.active_top_level_menu === link.title ? 'isOpen isActive' : '',
        is_active ? 'isActive' : '',
      ];

      return (
        <li className='paper-list__row' key={i}>
          <a className={classes.join(' ')} onClick={this._handleLinkClick.bind(null, link, 'active_top_level_menu')}>
            <div className='paper-tile layout horizontal center'>
              <div className='paper-tile__content'>
                <div className='hv-size--24'>
                  <PaperIcon icon={link.icon} style={is_active ? { fill: Styles.Colors.YELLOW } : null} />
                </div>
              </div>

              <div className='paper-tile__content'>
                <h5>{link.title}</h5>
              </div>
            </div>
          </a>
          {link.children ? (
            <ul className='paper-list paper-list--nav-tree'>
              {link.children.map(this._renderSecondLevelLink)}
            </ul>
          ) : null}
        </li>
      );
    } else {
      return null;
    }
  },

  _renderSecondLevelLink (link, i) {
    if (this.props.shouldShowLink(link)) {
      const classes = [
        'paper-list__item',
        link.children ? 'hasSubmenu' : '',
        this.state.active_second_level_menu === link.title ? 'isOpen' : '',
        this._checkIfActive(link) ? 'isActive' : '',
      ];

      return (
        <li className='paper-list__row' key={i}>
          <a className={classes.join(' ')} onClick={this._handleLinkClick.bind(null, link, 'active_second_level_menu')}>
            <div className='paper-tile layout horizontal justified center'>
              <div className='paper-tile__content'>
                {link.title}
              </div>
              {link.children ? (
                <div className='paper-tile__content'>
                  <i className='material-icons md-18'>arrow_drop_down</i>
                </div>
              ) : null}
            </div>
          </a>
          {link.children ? (
            <ul className='paper-list paper-list--nav-tree'>
              {link.children.map(this._renderThirdLevelLink)}
            </ul>
          ) : null}
        </li>
      );
    } else {
      return null;
    }
  },

  _renderThirdLevelLink (link, i) {
    if (this.props.shouldShowLink(link)) {
      const classes = [
        'paper-list__item',
        this._checkIfActive(link) ? 'isActive' : '',
      ];

      return (
        <li className='paper-list__row' key={i}>
          <a className={classes.join(' ')} onClick={this._handleLinkClick.bind(null, link)}>
            <div className='paper-tile layout horizontal justified center'>
              <div className='paper-tile__content'>
                {link.title}
              </div>
            </div>
          </a>
        </li>
      );
    } else {
      return null;
    }
  },

  render () {
    return (
      <nav className='core-nav'>
        {this.props.logo_url || this.props.logo_label ? (
          <header className='hv-part abs-top core-nav__header'>
            <div className='container container--full container--compact'>
              <div className='paper-tile hv-height--48 layout horizontal center'>
                {this.props.logo_url ? (
                  <div className='paper-tile__content hv-truncate self-center'>
                    <div className='hv-size--48'>
                      <img className='img--responsive' src={this.props.logo_url} />
                    </div>
                  </div>
                ) : null}

                <div className='paper-tile__content hv-truncate self-center'>
                  {this.props.logo_label ? (
                    <h4 className='text--uppercase hv-truncate'>
                      <strong>
                        {this.props.logo_label}
                      </strong>
                    </h4>
                  ) : null}

                  {this.props.logo_description ? (
                    <div className='hv-truncate'>
                      <small className='color--disabled'>
                        {this.props.logo_description}
                      </small>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </header>
        ) : null}

        <div className='fit core-nav__content'>
          <div className='hv-part'>
            <ul className='paper-list paper-list--nav-tree'>
              {this.props.primary.map(this._renderTopLevelLink)}
            </ul>
          </div>

          {this.props.secondary || this.props.footer ? (
            <div className='container container--full container--compact'>
              <div className='paper-divider paper-divider--thick'></div>
            </div>
          ) : null}

          {this.props.secondary ? (
            <div className='hv-part'>
              <div className='container container--full container--compact'>
                <ul className='paper-list'>
                  {this.props.secondary.map((link, i) => {
                    return (
                      <li className='paper-list__row' key={i}>
                        <a className='paper-tile layout horizontal center' onClick={this._handleLinkClick.bind(null, link)}>
                          <div className='paper-tile__content'>
                            {link.title}
                          </div>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : null}
        </div>

        {this.props.footer ? (
          <footer className='abs-bottom core-nav__footer'>
            <div className='hv-part paper-tile layout horizontal justified center'>
              <div className='paper-tile__content'>
                {this.props.footer}
              </div>
            </div>
          </footer>
        ) : null}
      </nav>
    );
  },
});

module.exports = PaperNav;