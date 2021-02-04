import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import Login from '../pages/Login';
import LoginCreate from '../pages/Login/Create';
import User from '../pages/User';
import NotFound from '../components/NotFound';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/login/criar" component={LoginCreate} />
            <Route path="/conta" exact component={User} isPrivate />
            <Route path="/conta/postar" component={User} isPrivate />
            <Route path="/conta/estatistica" component={User} isPrivate />
            <Route path="*" component={NotFound} />
        </Switch>
    );
};

export default Routes;
