import React from "react";
import PropTypes from "prop-types";
import {MdSearch} from "react-icons/md";
import SearchResults from "react-filter-search";

import Pagination from "../Pagination";
import Loader from "../Loader.jsx";
import TradeContext from "../../TradeContext";
import {Wrapper,Controls, Search, List, Item, Apply} from "./styles";


let letters = Array(26).fill(65).map((p, idx)=>(String.fromCodePoint(p+idx)));

export default function Stocks({stocksList, getStocksList}){
  const [page, setPage] = React.useState("A");
  const [loading, setLoading] = React.useState(true);
  const [currList, setCurrList] = React.useState([]);
  const [filter, setFilter] = React.useState("");
  const [activeStock, setActiveStock] = React.useState("");
  
  let tradeContext = React.useContext(TradeContext);
  
  React.useEffect(()=>{
    loadStocksList(page);
  }, [page]);
  
  async function loadStocksList(page){
    setLoading(true);
    
    try{
      
      let list = stocksList[page] ? stocksList[page] : await getStocksList(page);
      
      setCurrList(list || []);
      
      setActiveStock(list[0] && list[0].symbol);
      
      setLoading(false);
      
    }catch(error){
      
      setLoading(false);
      
    }
  }
  
  function handleSearchChanges(evt){
    setFilter(evt.target.value);
  }
  
  function applyChanges(){
    tradeContext.selectItem(activeStock)
  }
  
  return (<Wrapper>
    <Controls>
      <Search onSubmit={(evt)=>{evt.preventDefault()}}>
        <div className="search">
          <div className="icon"><MdSearch/></div>
          <input type="search" placeholder="Search" value={filter} onChange={handleSearchChanges}/>
        </div>
      </Search>
    </Controls>
    <List>
      {loading ?
        <div><Loader/></div> :
        <SearchResults value={filter} data={currList} 
          renderResults = {(results)=>{
            return results.map((s)=>{
                return (<Item key={s.symbol} active={s.symbol === activeStock} onClick={()=>setActiveStock(s.symbol)}>
                  <div className="symbol">{s.symbol}</div>
                  <div className="name">{s.name}</div>
              </Item>)})}
          }
        />
      }
    </List>
    <Controls>
      <Pagination pages={letters} selectPage={setPage}/>
      <Apply onClick={applyChanges}>Apply</Apply>
    </Controls>
  </Wrapper>);
}

Stocks.propTypes = {
  stocksList: PropTypes.object.isRequired,
  getStocksList: PropTypes.func.isRequired
}