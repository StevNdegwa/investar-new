import React from "react";
import ReactDom from "react-dom";
import {CSSTransition} from "react-transition-group";
import {AiOutlineClose} from "react-icons/ai";

import {Wrapper, Dir, Subdir} from "./styles";

const Menu = React.forwardRef(({closeMenu, showMenu}, ref)=>{
  const [dir, setDir] = React.useState("home");
  
  return ReactDom.createPortal(
    <CSSTransition in={showMenu} timeout={200} classNames="menu">
      <Wrapper show={showMenu} ref={ref}>
        <div><span onClick={closeMenu}><AiOutlineClose size="2em" color="white"/></span></div>
        <section>
          <Dir>
            <li onClick={()=>setDir("home")}>Home</li>
            <li onClick={()=>setDir("trading")}>Trading</li>
            <li onClick={()=>setDir("education")}>Education</li>
            <li onClick={()=>setDir("company")}>Company</li>
          </Dir>
          <div>
            <CSSTransition in={dir === "trading"} timeout={200} classNames="subdir">
              <Subdir show={dir === "trading"}>
                <li>Features</li>
                <li>Account Types</li>
                <li>Social Trading</li>
                <li>FAQ</li>
              </Subdir>
            </CSSTransition>
            <CSSTransition in={dir === "education"} timeout={200} classNames="subdir">
              <Subdir show={dir === "education"}>
                <li>Glossary</li>
                <li>Trading Strategies</li>
                <li>Technical Analysis</li>
                <li>Graphical Analysis</li>
                <li>Fundamental Analysis</li>
                <li>Psychology of trading</li>
              </Subdir>
            </CSSTransition>
            <CSSTransition in={dir === "company"} timeout={200} classNames="subdir">
              <Subdir show={dir === "company"}>
                <li>About Company</li>
                <li>Terms</li>
                <li>Payment Policy</li>
                <li>Return Policy</li>
                <li>Privacy Policy</li>
                <li>AML & KYC</li>
              </Subdir>
            </CSSTransition>
          </div>
        </section>
      </Wrapper>
    </CSSTransition>,
    document.getElementById("root"));
});

export default Menu;