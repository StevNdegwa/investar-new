import React from 'react';
import {BrowserRouter as Router, Route, Switch, useRouteMatch} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import {AiOutlineMenu,AiFillMessage,AiOutlineGlobal} from "react-icons/ai";

import Menu from "./Menu";
import Root from "./Root";
import Footer from "./Footer";
import {Wrapper, Main, Header,OpenDialog,OpenDemo,Container,HIW,FAD} from "./styles";

export default function Home({children}){
  const [showMenu, setShowMenu] = React.useState(false);
  
  const menu = React.useRef(), wrapper = React.useRef();
  
  const [open, setOpen] = React.useReducer((state, action)=>{
    switch(action.type){
      case "login":
        wrapper.current.scrollIntoView({behavior:"smooth"});
        return {show:true, tab:"login"};
      case "signup":
        wrapper.current.scrollIntoView({behavior:"smooth"});
        return {show:true, tab:"signup"};
      default:
        return {show:false};
    }
  }, {show:false});
  
  function handleShowMenuClick(){
    wrapper.current.scrollIntoView({behavior:"smooth"});
    setShowMenu(true)
  }
  
  return (<Wrapper ref={wrapper} showingMenu={showMenu}>
  <Header>
    <nav>
      <div>
        <button onClick={()=>handleShowMenuClick()}><AiOutlineMenu size="25px"/>&nbsp;&nbsp;<span>Menu</span></button>
        <button><AiOutlineGlobal size="25px"/>&nbsp;<span>Language</span></button>
        <button className="highlight blue"><AiFillMessage size="25px" color="#42a5f5"/>&nbsp;<span>Online chat</span></button>
      </div>
      <div>
        <button  className="highlight blue" onClick={()=>setOpen({type:"login"})}>Log In</button>
        <button className="signup" onClick={()=>setOpen({type:"signup"})}>Sign Up</button>
      </div>
    </nav>
  </Header>
  <Menu showMenu={showMenu} closeMenu={()=>setShowMenu(false)} ref={menu}/>
    <Root open={open} setOpen={setOpen}/>
  <Footer/>
  </Wrapper>)
}