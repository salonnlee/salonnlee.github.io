import React from "react";

import "./index.css";

import avatarUrl from "../../assets/avatar.jpeg";

const Avatar = () => <img className="avatar" src={avatarUrl} alt="salonnlee" />;
const Name = () => <p className="name">SALONNLEE</p>;
const Logo = () => (
  <div className="logo">
    <Avatar />
    <Name />
  </div>
);

class Pendant extends React.Component {
  render() {
    return (
      <div className="layout-pendant">
        <Logo />
      </div>
    );
  }
}

export default Pendant;
