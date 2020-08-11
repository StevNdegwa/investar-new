import React from "react";
import PropTypes from "prop-types";
import {MdChevronRight, MdExpandMore, MdTune} from "react-icons/md";
 
import {select} from "d3-selection";
import {zoom, zoomIdentity} from "d3-zoom";
 
import DialogContainer from "../DialogContainer";
import SelectTradeItem from "./SelectTradeItem";
import SetLayout from "./SetLayout";
import Chart from "./Chart";
import {Wrapper, ToolBar, Tool} from "./styles";

import TradeContext from "./TradeContext";

export default function Trade(props){
  const [activeItem, setActiveItem] = React.useReducer(activeItemReducer, {dialog:false, item:"A"});
  const [layout, setLayout] = React.useReducer(layoutReducer, {dialog:false, active:"S_V"});
  const [duration, setDuration]  = React.useState("DAILY");
  
  
  return (
    <TradeContext.Provider 
      value={
        {
          activeItem: {...activeItem, setActiveItem},
          duration,
          layout: {...layout, setLayout}
        }
      }
    >
    <Wrapper>
      <DialogContainer show={activeItem.dialog} close={()=>setActiveItem({type:"CLOSE_DIALOG"})}>
        <SelectTradeItem 
          stocksList={props.stocksList} 
          getStocksList={props.getStocksList}
          clearStocksTimeseries={props.clearStocksTimeseries}
          />
      </DialogContainer>
      <DialogContainer show={layout.dialog} close={()=>setLayout({type:"CLOSE_DIALOG"})}>
        <SetLayout/>
      </DialogContainer>
      <ToolBar>
        <Tool onClick={()=>setActiveItem({type:"OPEN_DIALOG"})}>
          <div>{activeItem.item}</div>
          <div className="icon"><MdExpandMore/></div>
        </Tool>
        <Tool>
          <button 
            className={`${(duration === "DAILY") && "active"}`} 
            onClick={()=>setDuration("DAILY")}
            title="Daily"
          >D</button>
          <button 
            className={`${(duration === "WEEKLY") && "active"}`} 
            onClick={()=>setDuration("WEEKLY")}
            title="Weekly"
          >W</button>
          <button 
            className={`${(duration === "MONTHLY") && "active"}`}
            onClick={()=>setDuration("MONTHLY")}
            title="Monthly"
          >M</button>
        </Tool>
        <Tool onClick={()=>setLayout({type:"OPEN_DIALOG"})}>
          <div className="icon"><MdTune/></div>
        </Tool>
      <Chart stocksTimeseries={props.stocksTimeseries} getStocksTimeseries={props.getStocksTimeseries}/>
    </Wrapper>
  </TradeContext.Provider>);
}

Trade.propTypes = {
  stocksList: PropTypes.object.isRequired,
  getStocksList: PropTypes.func.isRequired,
  stocksTimeseries: PropTypes.object.isRequired,
  getStocksTimeseries: PropTypes.func.isRequired,
  clearStocksTimeseries: PropTypes.func.isRequired
}

function activeItemReducer(state, action){
  switch(action.type){
    case "SET_ITEM":
      return {dialog:false, item: action.item};
    case "OPEN_DIALOG":
      return {...state, dialog:true};
    case "CLOSE_DIALOG":
      return {...state, dialog:false};
    default:
      return state;
  }
}

function layoutReducer(state, action){
  switch(action.type){
    case "SET_LAYOUT":
      return {dialog: false, active: action.layout};
    case "OPEN_DIALOG":
      return {...state, dialog: true}
    case "CLOSE_DIALOG":
      return {...state, dialog: false};
    default:
      return state;
  }
}