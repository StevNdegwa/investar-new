import React from "react";

import TechnicalIndicators from "./TechnicalIndicators";

import {Wrapper, Tabs, Tab, TIMain} from "./styles";

export default function Analytics(){
  const [tab, setTab] = React.useState("");
  
  return (<Wrapper>
    <Tabs>
      <Tab>Technical indicators</Tab>
    </Tabs>
    <TechnicalIndicators empty/>
  </Wrapper>);
}