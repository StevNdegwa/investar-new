import React from "react";
import {MdChevronRight, MdExpandMore} from "react-icons/md";
import DialogContainer from "../DialogContainer";
import SelectTradeItem from "./SelectTradeItem";
import {Wrapper, ToolBar, Tool} from "./styles";

export default function Trade(props){
  const [activeItem, setActiveItem] = React.useState({dialog:false});
  
  return (<Wrapper>
    <DialogContainer show={activeItem.dialog} close={()=>setActiveItem({dialog:false})}>
      <SelectTradeItem show={activeItem.dialog} close={()=>setActiveItem({dialog:false})} stocksList={props.stocksList} getStocksList={props.getStocksList}/>
    </DialogContainer>
    <ToolBar>
      <Tool onClick={()=>setActiveItem({dialog:true})}>
        <div>Select Trade Item</div>
        <div className="icon"><MdExpandMore/></div>
      </Tool>
    </ToolBar>
  </Wrapper>);
}