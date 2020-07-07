import React from 'react';
import {CSSTransition} from "react-transition-group";
import {AiOutlineMenu,AiFillMessage,AiOutlineGlobal,AiOutlineClose,AiFillRightCircle,AiOutlineWallet,AiOutlineRise,AiFillAndroid} from "react-icons/ai";

import Open from "../Open";
import Menu from "./Menu";
import {Wrapper, Main, Header, Footer,OpenDialog,OpenDemo,Container,HIW,FAD} from "./styles";

export default function Home({openApplication}){
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
  
  return (<Wrapper ref={wrapper}>
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
  <Main>
    <div>
      <div className="fot">Fast online trading</div>
      <div>
        <OpenDemo to="/app" loading={false}>
          <span>Try free demo</span> 
          <AiFillRightCircle size="1.2em" color="#81d4fa"/>
        </OpenDemo>
      </div>
    </div>
    <CSSTransition in={open.show} timeout={200} classNames="open">
      <OpenDialog show={open.show}>
        <div className="close"><span onClick={()=>setOpen({type:"close"})}><AiOutlineClose size="1.5em" color="white"/></span></div>
        {open.show && <Open defaultTab={open.tab} openApplication={openApplication}/>}
      </OpenDialog>
    </CSSTransition>
  </Main>
  <Container>
    <HIW>
      <h1>How it works</h1>
      <div className="content">
        <article>
          <h3><AiOutlineWallet size="1.2em" color="#42a5f5"/>Deposit</h3>
          <p>Open real account and add funds. We work with more than 20 payment systems.</p>
        </article>
        <article>
          <h3><AiOutlineRise size="1.2em" color="#42a5f5"/>Trade</h3>
          <p>Trade any of 100 assets and stocks. Use technical analysis and trade the news.</p>
        </article>
        <article>
          <h3><AiOutlineWallet size="1.2em" color="#42a5f5"/>Withdraw</h3>
          <p>Get funds easily to your bank card or e-wallet. We take no commission.</p>
        </article>
      </div>
    </HIW>
  </Container>
  <Container>
    <FAD>
      <h1>For all devices</h1>
      <div className="content">
        <div>
          <a href="#">
            
          </a>
        </div>
      </div>
    </FAD>
  </Container>
  <Footer></Footer>
  </Wrapper>)
}