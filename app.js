import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import {
  PaperNav,
  PaperDatepicker,
} from './src/index';

const App = React.createClass({
  getInitialState () {
    return {};
  },

  _getFooter () {
    return (
      <div>
        <small className='color--disabled'>Made with <i className='material-icons md-inherit color--neg'>favorite</i> by</small>
        <a className='core-nav__teem-logo' href='/'>
          <img src='/hive/assets/images/teem-logo.svg' />
        </a>
      </div>
    );
  },

  render () {
    return (
      <div className='core-layout'>
        <PaperNav
          footer={this._getFooter()}
          logo_description='v2.3.0-122-g2270770'
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
            <PaperDatepicker />
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