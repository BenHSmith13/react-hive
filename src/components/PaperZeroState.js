import React from 'react';

const PaperZeroState = React.createClass({
  propTypes: {
    icon: React.PropTypes.string,
    title: React.PropTypes.string,
  },

  render () {
    return (
      <div className='hv-part hv-part--m text--center text--disabled'>
        <div className='paper-avatar hv-size--64'>
          <div className='paper-avatar__initial fit layout horizontal center-center'>
            <i className='material-icons md-36'>{this.props.icon || 'info'}</i>
          </div>
        </div>
        <br /><br />
        <h2>{this.props.title}</h2>
        <div className='grid hv-part'>
          <div className='grid__item tablet-one-half'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  },
});

module.exports = PaperZeroState;