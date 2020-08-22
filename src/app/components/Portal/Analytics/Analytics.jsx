import React from "react";

import CompanyFinances from "./CompanyFinances";

import {Wrapper, Tabs, Tab, Content} from "./styles";

export default function Analytics(){
  const [tab, setTab] = React.useState("");
  
  return (<Wrapper>
    <Tabs>
      <Tab>Company Analytics</Tab>
    </Tabs>
    <Content>
      <CompanyFinances/>
    </Content>
  </Wrapper>);
}