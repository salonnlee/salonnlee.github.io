import React from "react";
import Pendant from "./containers/Pendant";
import Content from "./containers/Content";

import "./app.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Pendant />
        <Content />
      </React.Fragment>
    );
  }
}

export default App;
