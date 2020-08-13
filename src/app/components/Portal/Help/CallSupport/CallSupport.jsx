import React from "react";

import {MdPhoneInTalk} from "react-icons/md";

import {Wrapper, Main, Footer, EndCall} from "./styles";

export default function CallSupport({close}){
  
  return (<Wrapper>
    <Main>
      <div className="icon">
        <MdPhoneInTalk/>
      </div>
    </Main>
    <Footer>
      <EndCall onClick={()=>close()}>End call</EndCall>
    </Footer>
  </Wrapper>);
}