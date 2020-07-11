import React from "react";
import {CSSTransition} from "react-transition-group";
import {Wrapper} from "./styles";

export default function ConfirmExit({show, close}){
  return (
  <CSSTransition in={show} timeout={300} className="pop">
    <Wrapper show={show}>
      <p>
        Are you sure you want to quit?
      </p>
      <div>
        <button onClick={()=>close({confirmed:true, dialog:false})}>Confirm</button>
        <button onClick={()=>close({confirmed:false, dialog:false})}>Cancel</button>
      </div>
    </Wrapper>
  </CSSTransition>);
}