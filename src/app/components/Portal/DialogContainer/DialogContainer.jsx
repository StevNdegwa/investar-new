import React  from "react";
import {createPortal} from "react-dom";

import {Wrapper} from "./styles";

export default function DialogContainer({children, show, close}){
  function closeDialog(evt){
    close();
  }
  
  return createPortal(<Wrapper show={show} onClickCapture={closeDialog}>
  {children}
  </Wrapper>, document.getElementById("root"));
}