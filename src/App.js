import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.css';

import Monoarch from './views/Monoarch'

class App extends Component {
    render() {
        return <Router>
            <Route path="/" exact component={Monoarch} />
        </Router>;
    }
}

export default App;
