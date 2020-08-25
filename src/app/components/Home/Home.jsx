import React from 'react';
import PropTypes from "prop-types";
import {AiOutlineMenu,AiFillMessage} from "react-icons/ai";

import Menu from "./Menu";
import LandingPage from "./LandingPage";
import Footer from "./Footer";
import UserContext from "../../UserContext";
import {Wrapper, Header} from "./styles";


export default function Home({setUserLanguage, language}){
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
  
  const context = React.useContext(UserContext);
  
  function handleShowMenuClick(){
    setShowMenu(true)
  }
  
  function getTranslation(text){
    return context.translate(language.key, text)
  }
  
  return (<Wrapper ref={wrapper}>
  <Header className="level-400">
    <nav>
      <div>
        <button onClick={()=>handleShowMenuClick()}>
          <AiOutlineMenu/>
          <span>&nbsp;Menu</span>
        </button>
        <button className="highlight blue">
          <AiFillMessage color="#42a5f5"/>
          <span>&nbsp;{getTranslation("Online Chat")}</span>
        </button>
      </div>
      <div>
        <button  className="highlight blue" onClick={()=>setOpen({type:"login"})}>
          &nbsp;{getTranslation("Log In")}
        </button>
        <button className="signup" onClick={()=>setOpen({type:"signup"})}>
          &nbsp;{getTranslation("Sign Up")}
        </button>
      </div>
    </nav>
  </Header>
  <Menu showMenu={showMenu} closeMenu={()=>setShowMenu(false)} ref={menu}/>
  <LandingPage open={open} setOpen={setOpen} language={language}/>
  <Footer/>
  </Wrapper>)
}

Home.propTypes = {
  language:PropTypes.object.isRequired,
  setUserLanguage:PropTypes.func.isRequired
}