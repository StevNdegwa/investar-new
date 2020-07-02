import React from "react";
import PropTypes from "prop-types";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './styles.scss';
import logo from "./images/logo.png";
import Sidenav from "./Sidenav";
import Languages from "./Languages";

export default function Portal({user, logOut}){
  const [selectLanguage, setSelectLanguage] = React.useState(false);
  
  return (<div id="portal">
    <div id="header" className="level-100">
      <div>
        <div id="logo"><img src={logo} alt="Log"/></div>
        <div><button onClick={()=>setSelectLanguage(s=>!s)}>Language</button></div>
      </div>
    </div>
    <div id="main">
      <Router>
        <Sidenav logOut={logOut}/>
        <div id="space">
          {selectLanguage && <Languages/>}
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
        </div>
        
      </Router>
    </div>
  </div>)
}

Portal.propTypes = {
  language:PropTypes.object,
  changeLanguage:PropTypes.func.isRequired
}
