import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../views/Home';

export const renderRouter = () => (
    <Router>
        <Route path="/" exact component={Home} />
    </Router>
);
