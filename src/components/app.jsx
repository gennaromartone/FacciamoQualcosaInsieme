import React, { Component } from 'react'

import { Switch, Link, Route } from 'react-router-dom';
//import RedirectWithStatus from './redirect-w-status.jsx';
import Header from './containers/header.jsx'
import Footer from './containers/Footer'
import routeOptions from '../routes/routes';

export default class componentName extends Component {

    render() {

        let routes = routeOptions.routes.map(({ path, component, exact }, i) =>
            <Route key={Math.random() + 'ROUTE_'} exact={exact} path={path} component={component} />
        );
        
        return (
            
            <div className="container">
                <Header />
                <Switch>
                    {routes}
                </Switch>
                <Footer/>
            </div>
        )
    }
}

