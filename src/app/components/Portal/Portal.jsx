import React from "react";
import PropTypes from "prop-types";
import {AiOutlineMenu,AiFillMessage,AiOutlineGlobal} from "react-icons/ai";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import './styles.scss';
import logo from "./images/logo.png";
import Sidenav from "./Sidenav";
import Languages from "../Languages";
import DialogContainer from "./DialogContainer";
import ConfirmExit from "./ConfirmExit";
import Trade from "./Trade";

export default function Portal({user, setUserLanguage, language}){
  const [selectLanguage, setSelectLanguage] = React.useState(false);
  const [logOut, setLogOut] = React.useState({confirmed:false, dialog:false});
  
  if(logOut.confirmed){
    return <Redirect to="/"/>
  }
  
  return (<div id="portal">
    <div id="header" className="level-100">
      <div className="rSide">
        <div id="logo"><img src={logo} alt="Log"/></div>
        <button onClick={()=>setSelectLanguage(s=>(s ? false : true))}><AiOutlineGlobal/>{language.name}</button>
      </div>
      <div className="lSide">
        <button className="o-r-a">Open Real Account</button>
      </div>
    </div>
    <div id="main">
      <Router basename="/app">
        <Sidenav logOut={()=>setLogOut({confirmed:false, dialog:true})}/>
        <div id="space">
          <Languages show={selectLanguage} setUserLanguage={setUserLanguage} close={()=>setSelectLanguage(false)} position={{top:"0px",left:"10px"}}/>
          <DialogContainer show={logOut.dialog} close={()=>setLogOut({confirmed:false, dialog:false})}>
            <ConfirmExit close={setLogOut} show={logOut.dialog}/>
          </DialogContainer>
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
            <Route path="/" exact component={Trade}/>
          </Switch>
        </div>
      </Router>
    </div>
  </div>)
}

Portal.propTypes = {
  language:PropTypes.object,
  setUserLanguage:PropTypes.func.isRequired
}
