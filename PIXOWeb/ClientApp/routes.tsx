import * as React from 'react';  
import { Route } from 'react-router-dom';  
import { Layout } from './components/Layout';  
import { Home } from './components/Home';  
import { FetchUser } from './components/FetchRegularUsers';  
import { AddRegularUser } from './components/AddRegularUser';  
  
export const routes = <Layout>  
    <Route exact path='/' component={Home} />  
    <Route path='/fetchuser' component={FetchUser} />  
    <Route path='/adduser' component={AddRegularUser} />  
    <Route path='/User/edit/:userId' component={AddRegularUser} />  
</Layout>;