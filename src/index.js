import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import GrowingService from './services/growing-service';
import { GrowingServiceProvider } from './components/growing-service-context';

import store from './store';

const growingService = new GrowingService();

ReactDom.render(
    <Provider store={store}>
        <ErrorBoundry>
            <GrowingServiceProvider value={growingService}>
                <Router>
                    <App />
                </Router>
            </GrowingServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);