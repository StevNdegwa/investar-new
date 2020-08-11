import React from "react";
import {MdInfoOutline} from "react-icons/md";
import {useLocation} from "react-router-dom";

import Content from "./Content"
import {Wrapper, Tab} from "./styles";

const Sidebar = React.memo(({open})=>{
  const [tab, setTab] = React.useState("info")
  
  let location = useLocation();
  
  return (<Wrapper id="sidebar">
    {open && <Content>
      <b>Investar</b>
    </Content>}
    <Tab selected={open && (tab === "info")} onClick={()=>setTab("info")}>
      <div className="icon">
        <MdInfoOutline/>
      </div>
      <div className="label">Info</div>
    </Tab>
  </Wrapper>)
})

export default Sidebar;