import React from "react";
import ReactDom from "react-dom";
import {Link} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import {AiOutlineClose} from "react-icons/ai";
import {FaCcMastercard, FaCcPaypal, FaCcVisa} from "react-icons/fa";

import {Wrapper, Dir, Subdir, Header, Main, Footer} from "./styles";

const Menu = React.forwardRef(({closeMenu, showMenu}, ref)=>{
  const [dir, setDir] = React.useState("home");
  
  return ReactDom.createPortal(
    <CSSTransition in={showMenu} timeout={200} classNames="fade">
      <Wrapper show={showMenu} ref={ref} className="level-500">
        <Header><span onClick={closeMenu}><AiOutlineClose size="2em" color="white"/></span></Header>
        <Main>
          <Dir>
            <li onClick={()=>{setDir("home"); closeMenu()}} className={`${dir === "home" && "active"}`}><Link to="/">Home</Link></li>
            <li onClick={()=>setDir("trading")} className={`${dir === "trading" && "active"}`}>Trading</li>
            <li onClick={()=>setDir("education")} className={`${dir === "education" && "active"}`}>Education</li>
            <li onClick={()=>setDir("company")} className={`${dir === "company" && "active"}`}>Company</li>
          </Dir>
          <div>
            <CSSTransition in={dir === "trading"} timeout={200} classNames="subdir">
              <Subdir show={dir === "trading"}>
                <li onClick={closeMenu}><Link to="/">Features</Link></li>
                <li onClick={closeMenu}><Link to="/">Account Types</Link></li>
                <li onClick={closeMenu}><Link to="/">Social Trading</Link></li>
                <li onClick={closeMenu}><Link to="/">FAQ</Link></li>
              </Subdir>
            </CSSTransition>
            <CSSTransition in={dir === "education"} timeout={200} classNames="subdir">
              <Subdir show={dir === "education"}>
                <li onClick={closeMenu}><Link to="/">Glossary</Link></li>
                <li onClick={closeMenu}><Link to="/">Trading Strategies</Link></li>
                <li onClick={closeMenu}><Link to="/">Technical Analysis</Link></li>
                <li onClick={closeMenu}><Link to="/">Graphical Analysis</Link></li>
                <li onClick={closeMenu}><Link to="/">Fundamental Analysis</Link></li>
                <li onClick={closeMenu}><Link to="/">Psychology of trading</Link></li>
              </Subdir>
            </CSSTransition>
            <CSSTransition in={dir === "company"} timeout={200} classNames="subdir">
              <Subdir show={dir === "company"}>
                <li onClick={closeMenu}><Link to="/about">About Company</Link></li>
                <li onClick={closeMenu}><Link to="/">Terms</Link></li>
                <li onClick={closeMenu}><Link to="/">Payment Policy</Link></li>
                <li onClick={closeMenu}><Link to="/">Return Policy</Link></li>
                <li onClick={closeMenu}><Link to="/">Privacy Policy</Link></li>
                <li onClick={closeMenu}><Link to="/">AML & KYC</Link></li>
              </Subdir>
            </CSSTransition>
          </div>
        </Main>
        <Footer>
          <FaCcMastercard/>
          <FaCcPaypal/>
          <FaCcVisa/>
        </Footer>
      </Wrapper>
    </CSSTransition>,
    document.getElementById("root"));
});

export default Menu;