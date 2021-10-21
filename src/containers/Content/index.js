import React from "react";
import CHARACTERS, { BILLS, LINEBREAK } from "./characters";

import "./index.css";

const Soliloquy = () => (
  <div className="soliloquy">
    {CHARACTERS.map((characters) => {
      return (
        <p
          style={{
            ...(characters === LINEBREAK && {
              color: "transparent"
            })
          }}
        >
          {characters}
        </p>
      );
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
