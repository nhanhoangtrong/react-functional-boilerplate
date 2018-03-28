import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './modules/app-router/AppRouter';
import App from './components/app/App';
import { hot } from 'react-hot-loader';
import store from './store';

const Root = () => (
    <App>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </App>
);

export default hot(module)(Root);
