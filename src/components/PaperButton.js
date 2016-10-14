import _compact from 'lodash/compact';
import _keys from 'lodash/keys';
import React from 'react';

const cssMap = {
  display: {
    block: 'paper-btn--block',
  },
  shape: {
    round: 'paper-btn--round',
  },
  size: {
    small: 'paper-btn--sm',
    large: 'paper-btn--lg',
  },
  state: {
    active: 'isActive',
    disabled: 'isDisabled',
  },
  theme: {
    primary: 'paper-btn--primary',
    secondary: 'paper-btn--secondary',
    accent: 'paper-btn--accent',
    info: 'paper-btn--info',
    danger: 'paper-btn--danger',
  },
  type: {
    flat: 'paper-btn--flat',
    line: 'paper-btn--line',
    raised: 'paper-btn--raised',
  },
};

const PaperButton = React.createClass({
  propTypes: {
    display: React.PropTypes.oneOf(_keys(cssMap.display)),
    icon: React.PropTypes.string,
    iconLocation: React.PropTypes.oneOf(['left', 'right']),
    onClick: React.PropTypes.func,
    shape: React.PropTypes.oneOf(_keys(cssMap.shape)),
    size: React.PropTypes.oneOf(_keys(cssMap.size)),
    state: React.PropTypes.oneOf(_keys(cssMap.state)),
    theme: React.PropTypes.oneOf(_keys(cssMap.theme)),
    type: React.PropTypes.oneOf(_keys(cssMap.type)),
  },

  _handleClick (e) {
    if (this.props.onClick && this.props.state !== 'disabled') {
      this.props.onClick();
    }

    e.preventDefault();
  },

  render () {
    return (
      <button className={this.css()} onClick={this._handleClick} type='button'>
        {this.props.icon && this.props.iconLocation !== 'right' ? <i className='material-icons md-18 left'>{this.props.icon}</i> : null}
        {this.props.children}
        {this.props.icon && this.props.iconLocation === 'right' ? <i className='material-icons md-18 right'>{this.props.icon}</i> : null}
      </button>
    );
  },

  css () {
    const classes = _compact([
      'paper-btn',
      cssMap.display[this.props.display],
      cssMap.shape[this.props.shape],
      cssMap.size[this.props.size],
      cssMap.state[this.props.state],
      cssMap.theme[this.props.theme],
      cssMap.type[this.props.type],
      this.props.icon && !this.props.children ? 'paper-btn--icon' : null,
    ]);

    return classes.join(' ');
  },
});

module.exports = PaperButton;