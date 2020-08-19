import React from "react";
import {MdNotifications} from "react-icons/md";
import {useLocation} from "react-router-dom";

import Content from "./Content"
import {Wrapper, Tab} from "./styles";

const Sidebar = React.memo(({open})=>{
  const [tab, setTab] = React.useState("info")
  
  let location = useLocation();
  
  return (<Wrapper id="sidebar">
    {open && <Content>
      <b>Notifications</b>
    </Content>}
    <Tab selected={open && (tab === "info")} onClick={()=>setTab("info")} title="Notifications">
      <div className="icon">
        <MdNotifications/>
      </div>
    </Tab>
  </Wrapper>)
})

export default Sidebar;