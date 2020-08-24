import React from "react";
import PropTypes from "prop-types";
import {MdClear} from  "react-icons/md";
import {AiTwotoneSliders, AiOutlineBarChart} from "react-icons/ai";
import {CSSTransition} from "react-transition-group";

import TradeContext from "../TradeContext";
import {Wrapper, Controls, Main, Apply, Layout, SectionTop, SectionBottom} from "./styles";

const SetLayout = React.memo(({layoutDialog, closeDialog})=>{
  let tradeContext = React.useContext(TradeContext);
  let [layout, setLayout] = React.useState(tradeContext.layout.active);
  
  function close(){
    closeDialog();
    setLayout(tradeContext.layout.active);
  }
  
  function applyLayout(){
    tradeContext.layout.setLayout(layout);
    closeDialog();
  }
  
  return (
    <CSSTransition in={layoutDialog} timeout={100} classNames="pop">
      <Wrapper>
        <Controls>
          <div></div>
          <div className="icon" onClick={()=>close()}>
            <MdClear/>
          </div>
        </Controls>
        <Main>
          <Layout selected={layout === "S_V"} onClick={()=>setLayout("S_V")}>
            <SectionTop height="98px">
              <AiTwotoneSliders size="90px"/>
            </SectionTop>
            <SectionBottom height="48px">
              <AiOutlineBarChart size="40px"/>
            </SectionBottom>
          </Layout>
          <Layout selected={layout === "S"} onClick={()=>setLayout("S")}>
            <section>
              <AiTwotoneSliders size="130px"/>
            </section>
          </Layout>
        </Main>
        <Controls>
            <div></div>
            <Apply onClick={()=>applyLayout()}>Apply</Apply>
        </Controls>
      </Wrapper>
  </CSSTransition>)
});

SetLayout.propTypes = {
layoutDialog:PropTypes.bool.isRequired,
closeDialog:PropTypes.func.isRequired
}

export default SetLayout;