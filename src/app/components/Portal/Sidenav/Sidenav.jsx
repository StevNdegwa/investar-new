import React from "react";

import {MdTrendingUp, MdInfo, MdWidgets, MdSettings} from "react-icons/md";
import {FaMoneyBill, FaUser, FaBook, FaChartPie, FaSignOutAlt} from "react-icons/fa";

import {Control, Action} from "./styles";

const Sidenav = React.memo(({setActive, active, logOut})=>(
  <div id="sidenav">
    <div>
      <Control active={active === "trade"} onClick={()=>setActive("trade")}>
        <div className="icon"><MdTrendingUp/></div>
        <div className="label">Trade</div>
      </Control>
      <Control active={active === "finances"} onClick={()=>setActive("finances")}>
        <div className="icon"><FaMoneyBill/></div>
        <div className="label">Finances</div>
      </Control>
      <Control active={active === "profile"} onClick={()=>setActive("profile")}>
        <div className="icon"><FaUser/></div>
        <div className="label">Profile</div>
      </Control>
      <Control active={active === "apps"} onClick={()=>setActive("apps")}>
        <div className="icon"><MdWidgets/></div>
        <div className="label">Apps</div>
      </Control>
      <Control active={active === "analytics"} onClick={()=>setActive("analytics")}>
        <div className="icon"><FaChartPie/></div>
        <div className="label">Analytics</div>
      </Control>
      <Control active={active === "education"} onClick={()=>setActive("education")}>
        <div className="icon"><FaBook/></div>
        <div className="label">Education</div>
      </Control>
      <Control active={active === "help"} onClick={()=>setActive("help")}>
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