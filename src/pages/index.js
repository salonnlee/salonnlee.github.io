import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import "./index.css";
import { Helmet } from "react-helmet";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <React.Fragment>
      <Helmet>
        <title>{siteConfig.title}</title>
      </Helmet>
      <div id="app">
        <div className="center-box">-</div>
      </div>
    </React.Fragment>
  );
}
