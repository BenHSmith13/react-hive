import React from 'react';

import PaperButton from './PaperButton';

const PaperCallout = React.createClass({
  propTypes: {
    buttonLabel: React.PropTypes.string,
    buttonTheme: React.PropTypes.string,
    message: React.PropTypes.string,
    onButtonClick: React.PropTypes.func,
  },

  render () {
    return (
      <div className='paper-toolbar hv-callout hv-callout--info hv-callout--box'>
        <div className='paper-tile layout horizontal center justified'>
          <div className='paper-tile__content'>
            <h4><strong>{this.props.message}</strong></h4>
          </div>
          <div className='paper-tile__content layout horizontal'>
            <PaperButton onClick={this.props.onButtonClick} theme={this.props.buttonTheme || 'danger'} type='flat'>{this.props.buttonLabel}</PaperButton>
          </div>
        </div>
      </div>
    );
  },
});

module.exports = PaperCallout;