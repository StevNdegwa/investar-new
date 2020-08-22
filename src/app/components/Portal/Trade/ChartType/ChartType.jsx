import React from "react";
import {CSSTransition} from "react-transition-group";
import {MdClear} from "react-icons/md";
import {Wrapper, Controls, Main, Type} from "./styles";

import TradeContext from "../TradeContext";

export default function ChartType({open, closeDialog}){
  let tradeContext = React.useContext(TradeContext);
  
  const [type, setType] = React.useState(tradeContext.timeseriesChartType.active);
  
  function cancelChanges(){
    setType(tradeContext.timeseriesChartType.active);
    closeDialog();
  }
  
  function applyChanges(){
    tradeContext.timeseriesChartType.setChartType(type);
    closeDialog();
  }
  
  return (<CSSTransition timeout={100} in={open} classNames="pop">
    <Wrapper>
      <Controls>
        <div className="icon" onClick={()=>cancelChanges()}><MdClear/></div>
      </Controls>
      <Main>
        <Type selected={type==="CS"} onClick={()=>setType("CS")}>Candlestick charts</Type>
        <Type selected={type==="LC"} onClick={()=>setType("LC")}>Line Chart</Type>
      </Main>
      <Controls>
        <button onClick={()=>applyChanges()}>Apply</button>
      </Controls>
    </Wrapper>
  </CSSTransition>)
}