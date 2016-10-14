import React from 'react';

import PaperIcon from './PaperIcon';

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
    logo_label: React.PropTypes.string,
    logo_url: React.PropTypes.string,
    primary: React.PropTypes.arrayOf(React.PropTypes.shape(linkStructure)).isRequired,
    secondary: React.PropTypes.arrayOf(React.PropTypes.shape(linkStructure)),
  },

  getInitialState () {
    return {
      active_top_level_menu: null,
      active_second_level_menu: null,
    };
  },

  _handleLinkClick (link, state_name) {
    if (link.link_route) {
      window.location = link.link_route;
    }

    if (state_name) {
      this.setState({
        [state_name]: link.title === this.state[state_name] ? null : link.title,
      });
    }
  },

  _renderTopLevelLink (link, i) {
    const classes = [
      'paper-list__item core-nav__app',
      link.children ? 'hasSubmenu' : '',
      this.state.active_top_level_menu === link.title ? 'isOpen' : '',
      link.is_active ? 'isActive' : '',
    ];

    return (
      <li className='paper-list__row' key={i}>
        <a className={classes.join(' ')} onClick={this._handleLinkClick.bind(null, link, 'active_top_level_menu')}>
          <div className='paper-tile layout horizontal center'>
            <div className='paper-tile__content'>
              <div className='hv-size--24 layout horizontal center-center'>
                <PaperIcon icon={link.icon} />
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
  },

  _renderSecondLevelLink (link, i) {
    const classes = [
      'paper-list__item',
      link.children ? 'hasSubmenu' : '',
      this.state.active_second_level_menu === link.title ? 'isOpen' : '',
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
  },

  _renderThirdLevelLink (link, i) {
    return (
      <li className='paper-list__row' key={i}>
        <a className='paper-list__item' onClick={this._handleLinkClick.bind(null, link)}>
          <div className='paper-tile layout horizontal justified center'>
            <div className='paper-tile__content'>
              {link.title}
            </div>
          </div>
        </a>
      </li>
    );
  },

  render () {
    return (
      <nav className='core-nav layout vertical justified'>
        <div className='flex--firm'>
          {this.props.logo_url || this.props.logo_label ? (
            <header className='hv-part'>
              <div className='container container--full container--compact'>
                <div className='paper-tile layout horizontal center'>
                  {this.props.logo_url ? (
                    <div className='paper-tile__content'>
                      <a className='color--primary'>
                        <img className='img--responsive hv-size--36' src={this.props.logo_url} />
                      </a>
                    </div>
                  ) : null}

                  {this.props.logo_label ? (
                    <div className='paper-tile__content'>
                      <h4><strong>{this.props.logo_label}</strong></h4>
                    </div>
                  ) : null}
                </div>
              </div>

            </header>
          ) : null}

          <div className='container container--full container--compact'>
            <div className='paper-divider paper-divider--thick' />
          </div>

          <div className='hv-part hv-part--m'>
            <ul className='paper-list paper-list--nav-tree'>
              {this.props.primary.map(this._renderTopLevelLink)}
            </ul>
          </div>

          {this.props.secondary || this.props.footer ? (
            <div className='container container--full container--compact'>
              <div className='paper-divider paper-divider--thick' />
            </div>
          ) : null}

          {this.props.secondary ? (
            <div className='hv-part hv-part--m'>
              <div className='container container--full container--compact'>
                <ul className='paper-list'>
                  {this.props.secondary.map((link, i) => {
                    return (
                      <li className='paper-list__row' key={i}>
                        <a className='paper-tile' onClick={this._handleLinkClick.bind(null, link)}>
                          {link.title}
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
          <footer className='paper-toolbar paper-toolbar--footer layout horizontal center self-end flex-none'>
            <div className='container container--full container--compact'>
              <div className='paper-divider paper-divider--thick'></div>
              <div className='hv-part hv-part--m paper-tile layout horizontal center'>
                <div className='paper-tile__content'>
                  {this.props.footer}
                </div>
              </div>
            </div>
          </footer>
        ) : null}
      </nav>
    );
  },
});

module.exports = PaperNav;