import React, { Component } from "react";
import { renderRouter } from "./routes";

class App extends Component {
    render() {
        return <React.Fragment>{renderRouter()}</React.Fragment>;
    }
}

export default App;
