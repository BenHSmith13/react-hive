import React from 'react';

const PaperLoader = React.createClass({
  render () {
    return (
      <div className='paper-loader--circular hv-size--64 color--accent'>
        <svg className='paper-loader__circle' viewBox='25 25 50 50'>
          <circle
            className='paper-loader__path'
            cx='50'
            cy='50'
            fill='none'
            r='20'
            stroke='currentColor'
            stroke-miterlimit='10'
            stroke-width='3'
          />
        </svg>
      </div>
    );
  },
});

module.exports = PaperLoader;