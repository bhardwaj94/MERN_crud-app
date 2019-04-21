import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import Register from './components/register/register';
import Dashboard from './components/dashboard/dashboard';
import Layout from './hoc/layout';
//import Login from './containers/admin/login'
import Auth from './hoc/auth';
const Routes = () => {
    return(
        <Layout>
            <Switch>
                <Route path="/" exact component={Auth(Home,null)} />
                <Route path="/login" exact component={Auth(Login,false)} />
                <Route path="/register" exact component={Auth(Register,null)} />
                <Route path="/dashboard" exact component={Auth(Dashboard,true)} />
            </Switch>
        </Layout>
        
    );
};

export default Routes;