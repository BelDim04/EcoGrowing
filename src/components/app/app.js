import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, MyGardenPage } from '../pages';

import './app.css';

const App = () => {
    return (
        <Switch>
            <Route
                path="/"
                component={HomePage}
                exact />
            <Route
                path="/mygarden"
                component={MyGardenPage}
                exact />
        </Switch>
    )
};

export default App;