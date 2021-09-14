import React from "react";

import "./index.css";

class Pendant extends React.Component {
  render() {
    return (
      <div className="layout-pendant">
        <p style={{ color: "#c5c5c5" }}>
          {/* 我希望做一个能永远为当下骄傲的人 */}
          いつでも今を誇れる人で在りたい 。
        </p>
      </div>
    );
  }
}

export default Pendant;
