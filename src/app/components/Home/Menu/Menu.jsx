import React from "react";
import ReactDom from "react-dom";
import {CSSTransition} from "react-transition-group";
import {AiOutlineClose} from "react-icons/ai";

import {Wrapper} from "./styles";

export default function Menu({children, closeMenu, showMenu}){
  
  return ReactDom.createPortal(
    <CSSTransition in={showMenu} timeout={200} classNames="menu">
      <Wrapper show={showMenu}>
        <div><span onClick={closeMenu}><AiOutlineClose size="2em" color="white"/></span></div>
        {children}
      </Wrapper>
    </CSSTransition>,
    document.getElementById("root"));
}