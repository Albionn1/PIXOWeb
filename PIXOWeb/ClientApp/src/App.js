import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchUser } from './components/fetchRegularUsers'
import { AddRegularUser } from './components/AddRegularUser';


import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={FetchUser} />
        <Route exact path='/addUser' component={AddRegularUser} />
      </Layout>
    );
  }
}
