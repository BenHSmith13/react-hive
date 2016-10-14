import React from 'react';

const PaperCheckbox = React.createClass({
  propTypes: {
    checked: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    onChange: React.PropTypes.func,
  },

  _handleOnChange (e) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  },

  render () {
    const classes = [
      'paper-checkbox',
      this.props.disabled ? 'isDisabled' : null,
    ];

    return (
      <label className={classes.join(' ')}>
        <input
          checked={this.props.checked}
          disabled={this.props.disabled}
          onChange={this._handleOnChange}
          type='checkbox'
        />
        <span className='paper-checkbox__box'></span>
        <span className='paper-checkbox__check'></span>
      </label>
    );
  },
});

module.exports = PaperCheckbox;