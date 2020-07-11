import React from 'react';
import PropTypes from "prop-types";
import {AiOutlineMenu,AiFillMessage,AiOutlineGlobal} from "react-icons/ai";

import Menu from "./Menu";
import Root from "./Root";
import Footer from "./Footer";
import Languages from "../Languages";
import UserContext from "../../UserContext";
import {Wrapper, Header} from "./styles";


export default function Home({setUserLanguage, language}){
  const [showMenu, setShowMenu] = React.useState(false);
  const [showLanguages, setShowLanguages] = React.useState(false);
  
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
    wrapper.current.scrollIntoView({behavior:"smooth"});
    setShowMenu(true)
  }
  
  function getTranslation(text){
    return context.translate(language.key, text)
  }
  
  return (<Wrapper ref={wrapper} showingMenu={showMenu}>
  <Header>
    <nav>
      <div>
        <button onClick={()=>handleShowMenuClick()}><AiOutlineMenu size="25px"/>&nbsp;&nbsp;<span>Menu</span></button>
        <button onClick={()=>setShowLanguages(s=>!s)}><AiOutlineGlobal size="25px"/>&nbsp;<span>{language.name}</span></button>
        <button className="highlight blue"><AiFillMessage size="25px" color="#42a5f5"/>&nbsp;<span>{getTranslation("Online Chat")}</span></button>
      </div>
      <div>
        <button  className="highlight blue" onClick={()=>setOpen({type:"login"})}>{getTranslation("Log In")}</button>
        <button className="signup" onClick={()=>setOpen({type:"signup"})}>{getTranslation("Sign Up")}</button>
      </div>
    </nav>
    <Languages setUserLanguage={setUserLanguage} close={()=>setShowLanguages(false)} show={showLanguages} position={{top:"60px",left:"150px"}}/>
  </Header>
  <Menu showMenu={showMenu} closeMenu={()=>setShowMenu(false)} ref={menu}/>
  <Root open={open} setOpen={setOpen} language={language}/>
  <Footer/>
  </Wrapper>)
}

Home.propTypes = {
  language:PropTypes.object.isRequired,
  setUserLanguage:PropTypes.func.isRequired
}