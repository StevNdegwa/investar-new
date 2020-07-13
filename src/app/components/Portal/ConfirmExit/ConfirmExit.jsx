import React from "react";
import {MdClear} from "react-icons/md";
import {CSSTransition} from "react-transition-group";
import {Wrapper} from "./styles";

const ConfirmExit = React.memo(({show, close})=>{
  return (
  <CSSTransition in={show} timeout={300} className="pop">
    <Wrapper show={show} className="level-500">
      <h4>Exit<span onClick={close}><MdClear size="1.3em"/></span></h4>
      <p>
        Are you sure you want to quit?
      </p>
      <div>
        <button onClick={()=>close({confirmed:true, dialog:false})}>Exit</button>
        <button onClick={()=>close({confirmed:false, dialog:false})}>Cancel</button>
      </div>
    </Wrapper>
  </CSSTransition>);
});

export default ConfirmExit;