import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MessageListContainer from '../message-list/MessageListContainer';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MessageListContainer} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;
