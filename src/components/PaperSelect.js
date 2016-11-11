import React from 'react';

const PaperSelect = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    onChange: React.PropTypes.func,
    options: React.PropTypes.arrayOf(React.PropTypes.shape({
      value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
    })),
    placeholder: React.PropTypes.string,
    value: React.PropTypes.node,
  },

  getDefaultProps () {
    return {
      options: [],
    };
  },

  _handleOnChange (e) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  },

  render () {
    return (
      <div>
        <select
          className='paper-field__field paper-field__field--select'
          name={this.props.name}
          onChange={this._handleOnChange}
          placeholder={this.props.placeholder}
          style={{ height: '1em' }}
          value={this.props.value}
        >
          {this.props.placeholder ? <option disabled={true} value={null}>{this.props.placeholder}</option> : null}
          {this.props.options.map(option => {
            return (
              <option key={option.value} value={option.value}>{option.label || option.value}</option>
            );
          })}
        </select>
        <span className='paper-field__dropArrow'><i className='material-icons md-18'>arrow_drop_down</i></span>
      </div>
    );
  },
});

module.exports = PaperSelect;