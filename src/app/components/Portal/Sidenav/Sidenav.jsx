import React from "react";
import {MdTrendingUp, MdInfo, MdWidgets, MdSettings} from "react-icons/md";
import {FaMoneyBill, FaUser, FaBook, FaChartPie, FaSignOutAlt} from "react-icons/fa";

import UserContext from "../../../UserContext";
import {Control, Action} from "./styles";

const Sidenav = React.memo(({logOut, language, openSettingsDialog})=>{
  let userContext =  React.useContext(UserContext);
  
  function getTranslation(text){
    return userContext.translate(language.key, text);
  }
  
  return (<div id="sidenav" className="level-100">
    <div>
      <Control to="/" activeClassName="selected" exact className="trade">
        <div className="icon"><MdTrendingUp/></div>
        <div className="label">Trade</div>
      </Control>
      {/**
      <Control to="/billing" activeClassName="selected">
        <div className="icon"><FaMoneyBill/></div>
        <div className="label">Finances</div>
      </Control>
      <Control to="/user" activeClassName="selected">
        <div className="icon"><FaUser/></div>
        <div className="label">Profile</div>
      </Control>
      <Control to="/platforms" activeClassName="selected">
        <div className="icon"><MdWidgets/></div>
        <div className="label">Apps</div>
      </Control>
      **/}
      <Control to="/analytics" activeClassName="selected">
        <div className="icon"><FaChartPie/></div>
        <div className="label">{getTranslation("Analytics")}</div>
      </Control>
      {/**
      <Control to="/education" activeClassName="selected">
        <div className="icon"><FaBook/></div>
        <div className="label">Education</div>
      </Control>
      **/}
      <Control to="/info" activeClassName="selected">
        <div className="icon"><MdInfo/></div>
        <div className="label">{getTranslation("Help")}</div>
      </Control>
    </div>
    <div>
      <Action onClick={()=>openSettingsDialog()}>
        <MdSettings/>
      </Action>
      <Action onClick={()=>logOut()}>
        <FaSignOutAlt/>
      </Action>
    </div>
  </div>)
  }
)
export default Sidenav;