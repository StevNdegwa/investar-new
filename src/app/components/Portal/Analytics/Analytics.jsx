import React from "react";

import TechnicalIndicators from "./TechnicalIndicators";

import {Wrapper, Tabs, Tab, Content} from "./styles";

export default function Analytics(){
  const [tab, setTab] = React.useState("");
  
  return (<Wrapper>
    <Tabs>
      <Tab>Technical indicators</Tab>
    </Tabs>
    <Content>
      <TechnicalIndicators/>
    </Content>
  </Wrapper>);
}