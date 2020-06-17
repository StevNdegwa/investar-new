import React from 'react';
import "./styles.scss";

import Login from "./Login";
import Signup from "./Signup";

export default function Open({openApplication}){
  const [tab, setTab] = React.useState({login:true,signup:false});
  
  function handleTabClick(tab){
    setTab({login:false,signup:false,[tab]:true})
  }
  
  return (
    <div id="login">
      <div className="tabs">
        <div className={`tab ${tab.login && "active"}`} onClick={()=>handleTabClick("login")}>Login</div>
        <div className={`tab ${tab.signup && "active"}`} onClick={()=>handleTabClick("signup")}>Signup</div>
      </div>
      {tab.login && <Login openApplication={openApplication}/>}
      {tab.signup && <Signup openApplication={openApplication}/>}
  </div>);
}
