import React from 'react';
import {CSSTransition} from "react-transition-group";
import {AiOutlineMenu, AiFillMessage, AiOutlineGlobal, AiOutlineClose, AiFillRightCircle} from "react-icons/ai";

import Open from "../Open";
import Menu from "./Menu";
import {Wrapper, Main, Header, Footer,OpenDialog,OpenDemo} from "./styles";

export default function Home({openApplication, loading}){
  const [showMenu, setShowMenu] = React.useState(false);
  const [open, setOpen] = React.useReducer((state, action)=>{
    switch(action.type){
      case "login":
        return {show:true, tab:"login"};
      case "signup":
        return {show:true, tab:"signup"};
      default:
        return {show:false};
    }
  }, {show:false});
  
  return (<Wrapper>
  <Header>
    <nav>
      <div>
        <button onClick={()=>setShowMenu(true)}><AiOutlineMenu size="25px"/>&nbsp;&nbsp;<span>Menu</span></button>
        <button><AiOutlineGlobal size="25px"/>&nbsp;<span>Language</span></button>
        <button className="highlight blue"><AiFillMessage size="25px" color="#42a5f5"/>&nbsp;<span>Online chat</span></button>
      </div>
      <div>
        <button  className="highlight blue" onClick={()=>setOpen({type:"login"})}>Log In</button>
        <button className="signup" onClick={()=>setOpen({type:"signup"})}>Sign Up</button>
      </div>
    </nav>
  </Header>
  <Menu showMenu={showMenu} closeMenu={()=>setShowMenu(false)}>
    Menu
  </Menu>
  <Main>
    <div>
      <div className="fot">Fast online trading</div>
      <div>
        <OpenDemo to="/app" loading={loading}>
          <span>Try free demo</span> 
          <AiFillRightCircle size="1.2em" color="#81d4fa"/>
        </OpenDemo>
      </div>
    </div>
    <CSSTransition in={open.show} timeout={200} classNames="open">
      <OpenDialog show={open.show}>
        <div><span onClick={()=>setOpen({type:"close"})}><AiOutlineClose size="1.5em" color="white"/></span></div>
        {open.show && <Open defaultTab={open.tab} openApplication={openApplication}/>}
      </OpenDialog>
    </CSSTransition>
  </Main>
  <Footer></Footer>
  </Wrapper>)
}