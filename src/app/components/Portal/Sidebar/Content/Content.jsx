import React from "react";
import ReactDom from "react-dom";

import {Wrapper} from "./styles";

export default function Content({children}){
  return ReactDom.createPortal(
    <Wrapper className="level-300" id="sidebar-content">
      {children}
    </Wrapper>, 
    document.getElementById("space")
  )
}