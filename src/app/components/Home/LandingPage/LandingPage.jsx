import React from "react";
import {CSSTransition} from "react-transition-group";
import {AiOutlineClose,AiFillRightCircle,AiOutlineWallet,AiOutlineRise,AiFillAndroid,AiFillWindows, AiFillApple} from "react-icons/ai";

import Open from "../../Open";

import UserContext from "../../../UserContext";
import {OpenDialog, FAD, HIW} from "./styles";
import {OpenDemo, Main, Container} from "../styles";

export default function Root({setOpen, open,language}){
  const context = React.useContext(UserContext);
  
  function getTranslation(text){
    return context.translate(language.key, text)
  }
  
  return (<>
    <Main>
      <div>
        <div className="fot">{getTranslation("Fast online trading")}</div>
        <div>
          <OpenDemo to="/app?demo=true">
            <span>{getTranslation("Try free demo")}</span> 
            <AiFillRightCircle size="1.2em" color="#81d4fa"/>
          </OpenDemo>
        </div>
      </div>
      <CSSTransition in={open.show} timeout={200} classNames="open">
        <OpenDialog show={open.show}>
          <div className="close">
            <span onClick={()=>setOpen({type:"close"})}>
              <AiOutlineClose size="1.5em" color="white"/>
            </span>
          </div>
          {open.show && <Open defaultTab={open.tab}/>}
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
          <div className="device">
            <a href="#">
              <div><AiFillWindows size="140px" color="#81d4fa"/></div>
              <div>
                <div className="name">Windows</div>
                XP and higher
              </div>
            </a>
          </div>
          <div className="device">
            <a href="#">
              <div><AiFillAndroid size="140px" color="#81d4fa"/></div>
              <div>
                <div className="name">Android</div>
                4.4 and higher
              </div>
            </a>
          </div>
          <div className="device">
            <a href="#">
              <div><AiFillApple size="140px" color="#81d4fa"/></div>
              <div>
                <div className="name">iOS</div>
                8.2 and higher
              </div>
            </a>
          </div>
          <div className="device">
            <a href="#">
              <div><AiFillApple size="140px" color="#81d4fa"/></div>
              <div>
                <div className="name">MacOS</div>
                Mavericks and higher
              </div>
            </a>
          </div>
        </div>
      </FAD>
    </Container>
  </>)
}