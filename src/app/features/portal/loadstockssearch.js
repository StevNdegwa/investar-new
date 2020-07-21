import fetchSearchResults from "../../lib/alphavantage/fetchsearchresults";

import stocksListSlice from "./stocksListSlice";

export default function loadStocksSearch(search){
  return async function(dispatch){
    let response  = await fetchSearchResults(search);
    
    //The aim of this process is to clean the data returned by the apiS
    var data = response.bestMatches.map((d)=>{
      var match = {};
      
      for(let key in d){
        match[key.split(".")[1].trim()] = d[key];
      }
      
      return match;
    });
    
    dispatch(stocksListSlice.actions.addList({key: search,  data}));
    
    return data;
  }
}