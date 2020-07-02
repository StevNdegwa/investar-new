import React from "react";

import {MdTrendingUp, MdInfo, MdWidgets, MdSettings} from "react-icons/md";
import {FaMoneyBill, FaUser, FaBook, FaChartPie, FaSignOutAlt} from "react-icons/fa";

import {Control, Action} from "./styles";

const Sidenav = React.memo(({logOut})=>(
  <div id="sidenav" className="level-100">
    <div>
      <Control to="/" activeClassName="selected" exact>
        <div className="icon"><MdTrendingUp/></div>
        <div className="label">Trade</div>
      </Control>
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
      <Control to="/analytics" activeClassName="selected">
        <div className="icon"><FaChartPie/></div>
        <div className="label">Analytics</div>
      </Control>
      <Control to="/education" activeClassName="selected">
        <div className="icon"><FaBook/></div>
        <div className="label">Education</div>
      </Control>
      <Control to="/info" activeClassName="selected">
        <div className="icon"><MdInfo/></div>
        <div className="label">Help</div>
      </Control>
    </div>
    <div>
      <Action>
        <MdSettings/>
      </Action>
      <Action onClick={()=>logOut()}>
        <FaSignOutAlt/>
      </Action>
    </div>
  </div>)
)
export default Sidenav;