import React from 'react';
import {CSSTransition} from "react-transition-group";

import "./styles.scss";

import Login from "./Login";
import Signup from "./Signup";

export default function Open({openApplication, defaultTab}){
  const [tab, setTab] = React.useState({[defaultTab]:true});
  
  function handleTabClick(tab){
    setTab({login:false,signup:false,[tab]:true})
  }
  
  return (
    <div id="open">
      <div className="tabs">
        <div className={`tab ${tab.login && "active"}`} onClick={()=>handleTabClick("login")}>Login</div>
        <div className={`tab ${tab.signup && "active"}`} onClick={()=>handleTabClick("signup")}>Signup</div>
      </div>
      <CSSTransition in={tab.login} classNames="open-dialog" timeout={200}>
        <Login openApplication={openApplication} style={{display:tab.login ? "block" : "none"}}/>
      </CSSTransition>
      <CSSTransition in={tab.signup} classNames="open-dialog" timeout={200}>
        <Signup openApplication={openApplication}  style={{display:tab.signup ? "block" : "none"}}/>
      </CSSTransition>
  </div>);
}
