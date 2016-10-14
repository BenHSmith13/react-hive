import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import {
  PaperNav,
  PaperIcon,
} from './src/index';

import { Colors } from './src/constants/Styles';

const App = React.createClass({
  getInitialState () {
    return {};
  },

  _getFooter () {
    return (
      <div>
        <small className='color--disabled'>Powered By</small>
        <a className='core-nav__teem-logo' href='/'>
          <PaperIcon icon='teem' style={{ fill: Colors.YELLOW, width: 80 }} />
        </a>
      </div>
    );
  },

  render () {
    return (
      <div className='core-layout'>
        <PaperNav
          footer={this._getFooter()}
          logo_label='HIVE'
          logo_url='http://enderlabs.github.io/hive/assets/images/hive-logo.png'
          primary={[
            {
              title: 'Getting Started',
              icon: 'account',
              link_route: '#',
            },
            {
              title: 'Components',
              icon: 'tools',
              children: [
                {
                  title: 'Layout',
                  children: [
                    {
                      title: 'Nav',
                      link_route: '/#nav',
                    },
                    {
                      title: 'Drawer',
                      link_route: '/#drawer',
                    },
                    {
                      title: 'Callout',
                      link_route: '/#callout',
                    },
                    {
                      title: 'Zero State',
                      link_route: '/#zero-state',
                    },
                  ],
                },
                {
                  title: 'Forms',
                  children: [
                    {
                      title: 'Field',
                      link_route: '/#field',
                    },
                    {
                      title: 'Select',
                      link_route: '/#select',
                    },
                    {
                      title: 'Button',
                      link_route: '/#button',
                    },
                    {
                      title: 'Checkbox',
                      link_route: '/#checkbox',
                    },
                    {
                      title: 'Datepicker',
                      link_route: '/#datepicker',
                    },
                  ],
                },
                {
                  title: 'Misc',
                  children: [
                    {
                      title: 'Icon',
                      link_route: '/#icon',
                    },
                  ],
                },
              ],
            },
          ]}
        />
        <main className='core-main'>
          <div className='container'>
            Content goes here
          </div>
        </main>
      </div>
    );
  },
});

ReactDOM.render(
  <Router history={hashHistory}>
    <Route component={App} path='/' />
  </Router>
, document.getElementById('docs'));