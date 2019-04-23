import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Entrance from '../views/Entrance';
import Corner from '../views/Corner';
import DaysGoBy from '../views/DaysGoBy';
import Organiser from '../views/Organiser';

export const renderRouter = () => (
    <Router>
        <Route path="/" exact component={Entrance} />
        <Route path="/organiser" component={Organiser} />
        <Route path="/daysgoby" component={DaysGoBy} />
        <Route path="/corner" component={Corner} />
    </Router>
);
