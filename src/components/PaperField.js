import React from 'react';

import PaperSelect from './PaperSelect';

const PaperField = React.createClass({
  propTypes: {
    default: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    error: React.PropTypes.string,
    help: React.PropTypes.string,
    label: React.PropTypes.string,
    maxLength: React.PropTypes.number,
    name: React.PropTypes.string,
    onBlur: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onDefaultClick: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    options: React.PropTypes.array,
    placeholder: React.PropTypes.string,
    readOnly: React.PropTypes.bool,
    required: React.PropTypes.bool,
    type: React.PropTypes.oneOf(['text', 'textarea', 'password', 'number', 'select']),
    value: React.PropTypes.string,
  },

  getDefaultProps () {
    return {
      type: 'text',
    };
  },

  getInitialState () {
    return {
      isActive: false,
    };
  },

  _handleFocus () {
    this.setState({
      isActive: true,
    });

    if (this.props.onFocus) {
      this.props.onFocus();
    }
  },

  _handleBlur () {
    this.setState({
      isActive: false,
    });

    if (this.props.onBlur) {
      this.props.onBlur();
    }
  },

  _handleChange (e) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  },

  _handleResetClick () {
    if (this.props.onDefaultClick) {
      this.props.onDefaultClick();
    }
  },

  render () {
    const classes = [
      'paper-field',
      this.props.error ? 'isNotValid' : null,
      this.state.isActive ? 'isActive' : null,
      this.props.disabled ? 'isDisabled' : null,
    ];

    return (
      <div className={classes.join(' ')}>
        {this.props.label ? (
          <div className='paper-field__label'>
            {this.props.label}
            {this.props.help ? <i className='material-icons md-18 text--info-toggle'>help</i> : null}
            {this.props.required ? <strong className='color--neg'> *</strong> : null}
          </div>
        ) : null}
        {this.props.help ? (
          <div className='paper-field__help'>
            <p className='settings__desc'>
              {this.props.help}
            </p>
          </div>
        ) : null}
        {this.props.default ? (
          <div className='color--muted settings__inheritance'>
            <span>{this.props.default}</span> <a className='text--danger' onClick={this._handleResetClick}>Reset To Default</a>
          </div>
        ) : null}
        <div className='paper-field__body'>
          {this.props.type === 'textarea' ? (
            <textarea
              className='paper-field__field paper-field__field--multiline'
              disabled={this.props.disabled}
              maxLength={this.props.maxLength}
              name={this.props.name}
              onBlur={this._handleBlur}
              onChange={this._handleChange}
              onFocus={this._handleFocus}
              placeholder={this.props.placeholder}
              readOnly={this.props.readOnly}
              rows={2}
              value={this.props.value}
            />
          ) : null}

          {this.props.type === 'select' ? (
            <PaperSelect
              name={this.props.name}
              onChange={this._handleChange}
              options={this.props.options}
              placeholder={this.props.placeholder}
            />
          ) : null}

          {this.props.type !== 'textarea' && this.props.type !== 'select' ? (
            <input
              className='paper-field__field'
              disabled={this.props.disabled}
              maxLength={this.props.maxLength}
              name={this.props.name}
              onBlur={this._handleBlur}
              onChange={this._handleChange}
              onFocus={this._handleFocus}
              placeholder={this.props.placeholder}
              readOnly={this.props.readOnly}
              type={this.props.type}
              value={this.props.value}
            />
          ) : null}

          <hr className='paper-field__hr' />
        </div>
        {this.props.error || this.props.maxLength ? (
          <div className='paper-field__footer'>
            {this.props.error ? (
              <div className='paper-field__desc paper-field__desc--visible'>
                <div className='test--error-message'>{this.props.error}</div>
              </div>
            ) : null}
            {this.props.maxLength ? (
              <div className='paper-field__counter'>
                <span className='paper-field__counterCount'>{this.props.value.length}</span> / <span className='paper-field__counterLimit'>{this.props.maxLength}</span>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  },
});

module.exports = PaperField;