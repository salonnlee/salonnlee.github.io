import React, { Component } from 'react';

import Me from './components/Me/index';
import DashBoard from './components/DashBoard';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <DashBoard />
                <Me />
            </React.Fragment>
        );
    }
}

export default App;
