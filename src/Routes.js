import React from 'react';
import App from './App';
import Home from './component/Home';
import Product from './component/Product';
import {Router, Route, hashHistory, IndexRoute} from "react-router";

export default function() {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={App}>
              <IndexRoute component={Home} />
              <Route path="/product" component={Product} />
            </Route>
        </Router>
    )
}
