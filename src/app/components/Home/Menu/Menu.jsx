import React from "react";
import ReactDom from "react-dom";
import {CSSTransition} from "react-transition-group";
import {AiOutlineClose} from "react-icons/ai";

import {Wrapper} from "./styles";

const Menu = React.forwardRef(({closeMenu, showMenu}, ref)=>{
  
  return ReactDom.createPortal(
    <CSSTransition in={showMenu} timeout={200} classNames="menu">
      <Wrapper show={showMenu} ref={ref}>
        <div><span onClick={closeMenu}><AiOutlineClose size="2em" color="white"/></span></div>
        <ul>
          <li>Home</li>
          <li>
            Trading
            <ul>
              <li>Features</li>
              <li>Account Types</li>
              <li>Social Trading</li>
              <li>FAQ</li>
            </ul>
          </li>
          <li>
            Education
            <ul>
              <li>Glossary</li>
              <li>Trading Strategies</li>
              <li>Technical Analysis</li>
              <li>Graphical Analysis</li>
              <li>Fundamental Analysis</li>
              <li>Psychology of trading</li>
            </ul>
          </li>
          <li>
            Company
            <ul>
              <li>About Company</li>
              <li>Terms</li>
              <li>Payment Policy</li>
              <li>Return Policy</li>
              <li>Privacy Policy</li>
              <li>AML & KYC</li>
            </ul>
          </li>
        </ul>
      </Wrapper>
    </CSSTransition>,
    document.getElementById("root"));
});

export default Menu;