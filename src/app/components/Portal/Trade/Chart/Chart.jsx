import React from "react";

import ChartLoader from "./ChartLoader.jsx";
import {Wrapper} from "./styles";

export default function Chart({loading}){
  
  if(loading){
    return (<Wrapper><ChartLoader/></Wrapper>)
  }
  
  return (<Wrapper>
    
  </Wrapper>)
}