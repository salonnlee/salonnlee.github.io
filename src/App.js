import React, { Component } from "react";

import { renderRouter } from "./routes";

import Album from "./components/Album";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Album />
                {renderRouter()}
            </React.Fragment>
        );
    }
}

export default App;
