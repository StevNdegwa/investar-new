import fetchSearchResults from "../../lib/alphavantage/fetchsearchresults";

import stocksListSlice from "./stocksListSlice";

export default function loadStocksSearch(search){
  return async function(dispatch){
    
    let data  = await fetchSearchResults(search);
    
    if(data){
      
      dispatch(stocksListSlice.actions.addList({key: search,  data}));
      
      return data;
    
    }else{
      
      throw new Error("Empty Dataset");
      
    }
  }
}