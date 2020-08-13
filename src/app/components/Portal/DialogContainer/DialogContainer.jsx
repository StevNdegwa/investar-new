import React  from "react";
import PropTypes from "prop-types";
import {CSSTransition} from "react-transition-group";
import {createPortal} from "react-dom";

import {Wrapper} from "./styles";

export default function DialogContainer({children, show, close}){
  return createPortal(<CSSTransition in={show} timeout={200} classNames="fade">
    <Wrapper show={show} className="level-400">
      <section className="free-space" onClick={close}></section>
      <div className="level-500">{children}</div>
    </Wrapper>
  </CSSTransition>, document.getElementById("root"));
}

DialogContainer.propTypes = {
show:PropTypes.bool.isRequired,
close:PropTypes.func.isRequired  
}