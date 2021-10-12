import React from "react";
import CHARACTERS from "./characters";

import "./index.css";

const Soliloquy = () => (
  <div className="soliloquy">
    {CHARACTERS.map((characters) => {
      return <p>{characters}</p>;
    })}
  </div>
);

class Content extends React.Component {
  render() {
    return (
      <div className="layout-content">
        <Soliloquy />
      </div>
    );
  }
}

export default Content;
