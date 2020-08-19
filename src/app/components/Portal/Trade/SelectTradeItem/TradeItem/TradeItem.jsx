import React from "react";
import PropTypes from "prop-types";
import SearchResults from "react-filter-search";

import Pagination from "../Pagination";
import Loader from "../Loader.jsx";
import SearchBar from "../SearchBar";
import TradeContext from "../../TradeContext";
import {Wrapper,Controls, List, Item, Apply} from "./styles";

let letters = Array(26).fill(65).map((p, idx)=>(String.fromCodePoint(p + idx)));

export default function TradeItem({currList, selectPage, loading, activeItem, setActiveItem}){
  const [filter, setFilter] = React.useState("");
  
  let tradeContext = React.useContext(TradeContext);
  
  function handleSearchChanges(evt){
    setFilter(evt.target.value);
  }
  
  function applyChanges(){
    tradeContext.activeItem.setActiveItem(activeItem)
    tradeContext.activeItem.closeDialog()
  }
  
  return (<Wrapper>
    <Controls>
      <SearchBar onSubmit={(evt)=>{evt.preventDefault()}} onChange={handleSearchChanges} searchValue={filter}/>
    </Controls>
    <List>
      {loading ?
        <div><Loader/></div> :
        <SearchResults value={filter} data={currList} 
          renderResults = {(results)=>{
            return results.map((s)=>{
                return (<Item key={s.symbol} active={s.symbol === activeItem.symbol} onClick={()=>setActiveItem(s)}>
                  <div className="symbol">{s.symbol}</div>
                  <div className="name">{s.name}</div>
              </Item>)})}
          }
        />
      }
    </List>
    <Controls>
      <Pagination pages={letters} selectPage={selectPage}/>
      <Apply onClick={applyChanges}>Apply</Apply>
    </Controls>
  </Wrapper>);
}

TradeItem.propTypes = {
  currList: PropTypes.array.isRequired,
  selectPage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  activeItem: PropTypes.object.isRequired, 
  setActiveItem: PropTypes.func.isRequired
}