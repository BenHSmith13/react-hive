import React from 'react';

import PaperButton from './PaperButton';

const cssMap = {
  position: {
    'left': '',
    'right': 'paper-drawer--right',
  },
};

const PaperDrawer = React.createClass({
  propTypes: {
    buttons: React.PropTypes.arrayOf(React.PropTypes.shape({
      props: React.PropTypes.object,
      label: React.PropTypes.string,
    })),
    header: React.PropTypes.string,
    onClose: React.PropTypes.func,
    position: React.PropTypes.oneOf(['left', 'right']),
  },

  getInitialState () {
    return {
      isActive: false,
    };
  },

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        isActive: true,
      });
    }, 100);
  },

  _handleCloseClick () {
    this.setState({
      isActive: false,
    });

    setTimeout(() => {
      if (this.props.onClose) {
        this.props.onClose();
      }
    }, 300); //this needs to match the css animation time in hive
  },

  render () {
    return (
      <div className={this.css()}>
        <div className='paper-drawer__part paper-drawer__controls'>
          <PaperButton icon='close' onClick={this._handleCloseClick} type='flat' />
        </div>

        <div className='paper-drawer__content'>
          {this.props.header ? (
            <header className='hv-part hv-part--m'>
              <div className='paper-drawer__container'>
                <h2>{this.props.header}</h2>
              </div>
            </header>
          ) : null}

          <div className='paper-drawer__container'>
            <div className='paper-divider paper-divider--thick' />
            {this.props.children}
          </div>
        </div>

        {this.props.buttons ? (
          <div className='paper-drawer__controls paper-drawer__controls--footer paper-drawer__part layout horizontal center'>
            {this.props.buttons.map((button, i) => <PaperButton key={i} {...button} />)}
          </div>
        ) : null}
      </div>
    );
  },

  css () {
    const classes = [
      'paper-drawer',
      'palm-one-whole',
      'tablet-one-half',
      'desktop-one-third',
      this.state.isActive ? 'isActive' : '',
      cssMap.position[this.props.position],
    ];

    return classes.join(' ');
  },
});

module.exports = PaperDrawer;