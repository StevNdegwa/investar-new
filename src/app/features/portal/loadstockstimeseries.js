import StockTimeseries from "../../lib/alphavantage/stocktimeseries";
import stocksTimeseriesSlice from "./stocksTimeseriesSlice";

export function daily(stockSymbol){
  
  return async function(dispatch){
    
    let data =  await StockTimeseries.daily(stockSymbol);
    
    if(data){
      
      dispatch(stocksTimeseriesSlice.actions.setData({data, duration:"DAILY"}))
      
      return data;
      
    }else{
      
      throw new Error("Empty Dataset");
      
    }
  
  }
}

export function weekly(stockSymbol){
  
  return async function(dispatch){
    
    let data =  await StockTimeseries.weekly(stockSymbol);
    
    if(data){
      
      dispatch(stocksTimeseriesSlice.actions.setData({data, duration:"WEEKLY"}))
      
      return data;
      
    }else{
      
      throw new Error("Empty Dataset");
      
    }
  
  }
}


export function monthly(stockSymbol){
  
  return async function(dispatch){
    
    let data =  await StockTimeseries.monthly(stockSymbol);
    
    if(data){
      
      dispatch(stocksTimeseriesSlice.actions.setData({data, duration:"MONTHLY"}))
      
      return data;
      
    }else{
      
      throw new Error("Empty Dataset");
      
    }
  
  }
}