import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import "./index.css";
import { Helmet } from "react-helmet";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <React.Fragment>
      <Helmet>
        <title>{siteConfig.title}</title>
      </Helmet>
      <div class="solar-syst">
        <div class="sun"></div>
        <div class="mercury"></div>
        <div class="venus"></div>
        <div class="earth"></div>
        <div class="mars"></div>
        <div class="jupiter"></div>
        <div class="saturn"></div>
        <div class="uranus"></div>
        <div class="neptune"></div>
        <div class="pluto"></div>
        <div class="asteroids-belt"></div>
      </div>
    </React.Fragment>
  );
}
