import React from "react";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './styles.scss';
import logo from "./images/logo.png";
import Sidenav from "./Sidenav";

export default function Portal({user, logOut}){
  const [page, setPage] = React.useState("trade");

  return (<div id="portal">
    <div id="header">
      <div>
        <div id="logo"><img src={logo} alt="Log"/></div>
      </div>
    </div>
    <div id="main">
      <Router>
        <Sidenav setActive={setPage} active={page} logOut={logOut}/>
        <Switch>
          <Route path="/billing">
            <div>Finance</div>
          </Route>
          <Route path="/user">
            <div>User Profile</div>
          </Route>
          <Route path="/platforms">
            <div>Platforms</div>
          </Route>
          <Route path="/analytics">
            <div>Analytics</div>
          </Route>
          <Route path="/education">
            <div>Education</div>
          </Route>
          <Route path="/info">
            <div>Help</div>
          </Route>
          <Route path="/" exact>
            <div>Trade</div>
          </Route>
        </Switch>
      </Router>
    </div>
  </div>)
}