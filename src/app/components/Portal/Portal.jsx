import React from "react";

import './styles.scss';

import logo from "./images/logo.png";
import Sidenav from "./Sidenav";

export default function Portal({user, logOut}){
  const [page, setPage] = React.useState("trade");
  
  function showPage(){
    return (<div id="content">{page}</div>)
  }
  
  return (<div id="portal">
    <div id="header">
      <div>
        <div id="logo"><img src={logo} alt="Log"/></div>
      </div>
    </div>
    <div id="main">
      <Sidenav setActive={setPage} active={page} logOut={logOut}/>
      {showPage()}
    </div>
  </div>)
}