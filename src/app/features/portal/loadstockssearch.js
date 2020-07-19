import fetchSearchResults from "../../lib/alphavantage/fetchsearchresults";

import stocksListSlice from "./stocksListSlice";

export default function loadStocksSearch(search){
  return async function(dispatch){
    let response  = await fetchSearchResults(search);
    
    dispatch(stocksListSlice.actions.addList({key: search,  data: response}));
  }
}