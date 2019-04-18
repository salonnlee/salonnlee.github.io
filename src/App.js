import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Entrance from './views/Entrance';

class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={Entrance} />
            </Router>
        );
    }
}

export default App;
