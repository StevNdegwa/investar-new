import React from "react";
import PropTypes from "prop-types";

import TradeItem from "../TradeItem";

export default function Stocks({stocksList, getStocksList, setSelectedItem, selectetItem}){
  const [page, setPage] = React.useState("A");
  const [currList, setCurrList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  
  React.useEffect(()=>{
    loadStocksList(page);
  }, [page]);
  
  async function loadStocksList(page){
    setLoading(true);
    
    try{
      
      let list = stocksList[page] ? stocksList[page] : await getStocksList(page);
      
      setCurrList(list || []);
      
      setSelectedItem(list[0] && list[0].symbol);
      
      setLoading(false);
      
    }catch(error){
      
      setLoading(false);
      
    }
  }
  
  return (<TradeItem loading={loading} currList={currList} selectPage={setPage} activeItem={selectetItem}  setActiveItem={setSelectedItem}/>);
}

Stocks.propTypes = {
  stocksList: PropTypes.object.isRequired,
  getStocksList: PropTypes.func.isRequired,
  selectetItem: PropTypes.string.isRequired,
  setSelectedItem: PropTypes.func.isRequired
}