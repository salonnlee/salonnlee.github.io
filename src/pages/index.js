import React, { useEffect, useState } from "react";
import Head from "@docusaurus/Head";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useTitleFormatter } from "@docusaurus/theme-common";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import "./index.css";
import genCrowd from "../utils/crowd";

function FengyaFont(props) {
  const { children, style, className, fontbold, fontsize } = props;
  return (
    <i
      style={{ ...style, ...(fontsize && { fontSize: fontsize }) }}
      className={["font-fengya", className, fontbold && "bold"].join(" ")}
    >
      {children}
    </i>
  );
}

function SelfBox(props) {
  const { style, className, children } = props;
  return (
    <span style={style} className={["self-box", className].join(" ")}>
      {children}
    </span>
  );
}

function Airflight() {
  return (
    <div className="airflight">
      <div className="airport can">
        <span>
          Guangzhou <FengyaFont fontbold={true}>广州</FengyaFont>
        </span>
        <p>CAN</p>
      </div>
      <div className="airport hgh">
        <span>
          Hangzhou <FengyaFont fontbold={true}>杭州</FengyaFont>
        </span>
        <p>HGH</p>
      </div>
      <svg className="airplane" viewBox="243.5 245.183 25 21.633">
        <g>
          <path
            fill="#3398fb"
            d="M251.966,266.816h1.242l6.11-8.784l5.711,0.2c2.995-0.102,3.472-2.027,3.472-2.308
                    c0-0.281-0.63-2.184-3.472-2.157l-5.711,0.2l-6.11-8.785h-1.242l1.67,8.983l-6.535,0.229l-2.281-3.28h-0.561v3.566
                    c-0.437,0.257-0.738,0.724-0.757,1.266c-0.02,0.583,0.288,1.101,0.757,1.376v3.563h0.561l2.281-3.279l6.535,0.229L251.966,266.816z
                    "
          />
        </g>
      </svg>
    </div>
  );
}

function SocialNetwork() {
  return (
    <div className="socialnetwork">
      <a className="github" target="_blank" href="https://github.com/salonnlee">
        <svg viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
      </a>

      <a
        className="juejin"
        target="_blank"
        href="https://juejin.cn/user/3720403078610952"
      >
        <img src="https://b-gold-cdn.xitu.io/favicons/v2/apple-touch-icon.png" />
      </a>
      <a
        className="notion"
        target="_blank"
        href="https://www.notion.so/SALONNLEE-6d4970b31bec47db898a832ae60cdc8d"
      >
        <svg viewBox="0 0 30 30" fill="none">
          <path
            d="M1.805 1.294l16.6-1.226c2.039-.175 2.563-.057 3.845.875l5.299 3.733c.874.642 1.165.817 1.165 1.516v20.473c0 1.283-.466 2.042-2.097 2.158L7.34 29.99c-1.224.058-1.807-.117-2.448-.934L.99 23.982c-.7-.934-.99-1.633-.99-2.45V3.334c0-1.049.466-1.924 1.805-2.04z"
            fill="#fff"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.405.068l-16.6 1.226C.466 1.41 0 2.285 0 3.334v18.198c0 .817.29 1.516.99 2.45l3.902 5.074c.641.817 1.224.992 2.448.934l19.277-1.167c1.63-.116 2.097-.875 2.097-2.158V6.192c0-.663-.262-.854-1.033-1.42a85.473 85.473 0 01-.133-.096L22.25.943c-1.282-.932-1.806-1.05-3.845-.875zM7.776 5.857c-1.574.106-1.931.13-2.825-.597L2.678 3.452c-.231-.234-.115-.526.467-.584l15.958-1.166c1.34-.117 2.038.35 2.562.758l2.737 1.983c.117.059.408.408.058.408l-16.48.992-.204.014zM5.941 26.49V9.11c0-.759.233-1.109.931-1.168L25.8 6.834c.642-.058.932.35.932 1.108v17.264c0 .759-.117 1.401-1.165 1.459l-18.113 1.05c-1.048.058-1.513-.291-1.513-1.225zm17.88-16.448c.116.525 0 1.05-.525 1.11l-.873.173v12.832c-.758.408-1.456.641-2.039.641-.932 0-1.165-.292-1.863-1.166l-5.709-8.982v8.69l1.806.409s0 1.05-1.457 1.05l-4.017.233c-.117-.234 0-.817.407-.933l1.049-.291v-11.49L9.144 12.2c-.117-.525.174-1.283.99-1.342l4.31-.29 5.94 9.098v-8.049l-1.514-.174c-.117-.643.349-1.11.931-1.167l4.02-.234z"
            fill="#000"
          ></path>
        </svg>
      </a>
      <a className="wechat">
        <div className="qrcode-box">
          <div className="qrcode"></div>
        </div>
        <svg viewBox="0 0 24 24" fill="#4cda4d">
          <path
            fill-rule="evenodd"
            d="M16.128 8.799c-3.665 0-6.627 2.536-6.627 5.664 0 .481.074.962.223 1.425-.185.018-.352.018-.518.018a9.119 9.119 0 01-2.259-.296.554.554 0 00-.481.056L4.3 16.96c-.13.075-.277-.055-.24-.184l.555-1.963c.018-.13-.019-.259-.13-.332-1.592-1.111-2.61-2.777-2.61-4.628 0-3.35 3.276-6.053 7.33-6.053 3.61 0 6.608 2.166 7.2 4.998h-.277zm-3.48-.815a.987.987 0 00-.981-.98.988.988 0 00-.981.98c0 .538.444.982.98.982a.987.987 0 00.982-.982zm-5.905.982a.987.987 0 01-.981-.982c0-.537.444-.98.98-.98.538 0 .982.443.982.98a.975.975 0 01-.981.982zm9.31.37c3.35 0 6.072 2.295 6.072 5.108 0 1.573-.833 2.962-2.13 3.906a.45.45 0 00-.184.48l.296 1.204c.037.11-.092.204-.185.148l-1.5-.814a.835.835 0 00-.518-.056 6.53 6.53 0 01-1.832.24c-3.35 0-6.072-2.294-6.072-5.108 0-2.813 2.703-5.108 6.053-5.108zm-2.998 3.61c0 .462.37.832.833.832a.83.83 0 00.833-.833.83.83 0 00-.833-.832.83.83 0 00-.833.832zm4.924.832a.83.83 0 01-.833-.833.83.83 0 01.833-.832.83.83 0 01.833.832.841.841 0 01-.833.833z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
}

function SvgTargetBlank() {
  return (
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      width="15"
      height="15"
      className="targetblank"
    >
      <path
        fill="currentColor"
        d="
M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
"
      ></path>
      <polygon
        fill="currentColor"
        points="
45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
14.9 62.8,22.9 71.5,22.9
"
      ></polygon>
    </svg>
  );
}

function Crowd() {
  const id = "crowd";
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    genCrowd(id);
    setLoading(false);
  }, []);
  return (
    <React.Fragment>
      {isLoading && (
        <svg
          version="1.1"
          id="loader-1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40px"
          height="40px"
          viewBox="0 0 50 50"
          className={"crowd-loading"}
        >
          <path
            fill="#3398fb"
            d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
          >
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="0 25 25"
              to="360 25 25"
              dur="0.6s"
              repeatCount="indefinite"
            ></animateTransform>
          </path>
        </svg>
      )}
      <canvas
        width={"100%"}
        height={"100%"}
        className={"crowd"}
        id={id}
      ></canvas>
    </React.Fragment>
  );
}

function MainContent() {
  return (
    <div className="maincontent">
      <section>
        <Crowd />
      </section>
    </div>
  );
}

export default function Home() {
  const {
    siteConfig: { favicon, title }
  } = useDocusaurusContext();
  const faviconUrl = useBaseUrl(favicon);
  const pageTitle = useTitleFormatter(title);
  return (
    <React.Fragment>
      <Head>
        {favicon && <link rel="shortcut icon" href={faviconUrl} />}
        <title>{pageTitle}</title>
      </Head>
      <div id="app">
        <SelfBox>
          <Airflight />
          <SocialNetwork />
          <MainContent />
        </SelfBox>
      </div>
    </React.Fragment>
  );
}
