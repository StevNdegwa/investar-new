import React from "react";
import {FaCcMastercard, FaCcPaypal, FaCcVisa} from "react-icons/fa";
import {Wrapper, Header, Loader, Footer, Main} from "./styles";

export default function PortalLoader(){
  
  return (<Wrapper>
    <Header>
      <Loader></Loader>
    </Header>
    <Main>
      <div className="investar">
        Investar
      </div>
      <div className="copyright">
        &copy;&nbsp;{new Date().getFullYear()}
      </div>
    </Main>
    <Footer>
      <FaCcMastercard/>
      <FaCcPaypal/>
      <FaCcVisa/>
    </Footer>
  </Wrapper>)
}