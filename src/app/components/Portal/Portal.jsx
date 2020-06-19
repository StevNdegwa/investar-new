import React from "react";

import './styles.scss';

import logo from "./images/logo.jpg";
import Sidenav from "./Sidenav";

export default function Portal({user}){
  return (<div id="portal">
    <div id="header">
      <div>
        <div id="logo"><img src={logo}/></div>
      </div>
    </div>
    <div id="main">
      <Sidenav/>
      <div id="content"></div>
    </div>
  </div>)
}