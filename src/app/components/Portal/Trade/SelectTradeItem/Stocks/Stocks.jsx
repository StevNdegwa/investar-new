import React from "react";
import PropTypes from "prop-types";

import TradeItem from "../TradeItem";

export default function Stocks({stocksList, getStocksList}){
  const [page, setPage] = React.useState("A");
  const [currList, setCurrList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [activeStock, setActiveStock] = React.useState("");
  
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
  
  return (<TradeItem loading={loading} currList={currList} selectPage={setPage} activeItem={activeStock}  setActiveItem={setActiveStock}/>);
}

Stocks.propTypes = {
  stocksList: PropTypes.object.isRequired,
  getStocksList: PropTypes.func.isRequired
}