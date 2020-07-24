import React from "react";
import PropTypes from "prop-types";
import {MdChevronRight, MdExpandMore} from "react-icons/md";
 
import DialogContainer from "../DialogContainer";
import SelectTradeItem from "./SelectTradeItem";
import Chart from "./Chart";
import {Wrapper, ToolBar, Tool} from "./styles";

import TradeContext from "./TradeContext";

export default function Trade(props){
  const [activeItem, setActiveItem] = React.useReducer(activeItemReducer, {dialog:false, item:"A"});
  
  function activeItemReducer(state, action){
    switch(action.type){
      case "SET_ITEM":
        return {dialog:false, item:action.item};
      case "OPEN_DIALOG":
        return {...state, dialog:true};
      case "CLOSE_DIALOG":
        return {...state, dialog:false};
      default:
        return state;
    }
  }
  
  return (
    <TradeContext.Provider value={
        {
          close:()=>setActiveItem({type:"CLOSE_DIALOG"}),
          selectItem:(item)=>setActiveItem({type:"SET_ITEM", item}),
          activeItem
        }
    }>
    <Wrapper>
      <DialogContainer show={activeItem.dialog} close={()=>setActiveItem({type:"CLOSE_DIALOG"})}>
        <SelectTradeItem stocksList={props.stocksList} getStocksList={props.getStocksList}/>
      </DialogContainer>
      <ToolBar>
        <Tool onClick={()=>setActiveItem({type:"OPEN_DIALOG"})}>
          <div>{activeItem.item}</div>
          <div className="icon"><MdExpandMore/></div>
        </Tool>
        <Tool>
          <button className="active">D</button>
          <button>W</button>
          <button>M</button>
        </Tool>
      </ToolBar>
      <Chart loading/>
    </Wrapper>
  </TradeContext.Provider>);
}

Trade.propTypes = {
  stocksList: PropTypes.object.isRequired,
  getStocksList: PropTypes.func.isRequired
}