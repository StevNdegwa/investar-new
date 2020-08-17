import React from "react";
import {CSSTransition} from "react-transition-group";

import Open from "../../Open";
import {Wrapper, OpenOwnAccount} from "./styles";

export default function Finances({demo}){
  
  return (<Wrapper>
    <OpenOwnAccount>
      <Open defaultTab="signup"/>
    </OpenOwnAccount>
  </Wrapper>)
}