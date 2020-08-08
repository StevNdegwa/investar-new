import React from "react";
import {MdClear} from  "react-icons/md";
import {CSSTransition} from "react-transition-group";

import TradeContext from "../TradeContext";
import {Wrapper, Controls, Main, Apply, Layout, SectionTop, SectionBottom} from "./styles";

const SetLayout = ()=>{
  let tradeContext = React.useContext(TradeContext);
  let [layout, setLayout] = React.useState(tradeContext.layout.active);
  
  function closeDialog(){
    tradeContext.layout.setLayout({type:"CLOSE_DIALOG"});
    setLayout(tradeContext.layout.active);
  }
  
  function applyLayout(){
    tradeContext.layout.setLayout({type:"SET_LAYOUT", layout})
  }
  
  return (
    <CSSTransition in={tradeContext.layout.dialog} timeout={200} classNames="pop">
      <Wrapper>
        <Controls>
          <div></div>
          <div className="icon" onClick={()=>closeDialog()}>
            <MdClear/>
          </div>
        </Controls>
        <Main>
          <Layout selected={layout === "S_V"} onClick={()=>setLayout("S_V")}>
            <SectionTop height="98px">
              Stocks Timeseries
            </SectionTop>
            <SectionBottom height="48px">
              Stocks Volume
            </SectionBottom>
          </Layout>
          <Layout selected={layout === "S"} onClick={()=>setLayout("S")}>
            <section>
              Stocks Timeseries
            </section>
          </Layout>
        </Main>
        <Controls>
            <div></div>
            <Apply onClick={()=>applyLayout()}>Apply</Apply>
        </Controls>
      </Wrapper>
  </CSSTransition>)
};

export default SetLayout;