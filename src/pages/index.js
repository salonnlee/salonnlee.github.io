import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import "./index.css";
import { Helmet } from "react-helmet";

export default function Home() {
  // goto notion
  if (ExecutionEnvironment.canUseDOM) {
    window.location.href =
      "https://www.notion.so/SALONNLEE-6d4970b31bec47db898a832ae60cdc8d";
  }
  const { siteConfig } = useDocusaurusContext();
  return (
    <React.Fragment>
      <Helmet>
        <title>{siteConfig.title}</title>
      </Helmet>
      <div className="solar-syst">
        <div className="sun"></div>
        <div className="mercury"></div>
        <div className="venus"></div>
        <div className="earth"></div>
        <div className="mars"></div>
        <div className="jupiter"></div>
        <div className="saturn"></div>
        <div className="uranus"></div>
        <div className="neptune"></div>
        <div className="pluto"></div>
        <div className="asteroids-belt"></div>
      </div>
    </React.Fragment>
  );
}
