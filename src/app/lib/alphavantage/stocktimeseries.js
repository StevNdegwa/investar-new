import avconnect from "./avconnect";

const av = avconnect("G2Q7JQRAG9H90QQY");

class StockTimeseries{
  static objToArray(obj){
    let data = [];
    
    for(let date in obj){  
      let ts = obj[date];
      
      data.push({
        date, 
        open: parseFloat(ts["1. open"]), 
        high: parseFloat(ts["2. high"]), 
        low: parseFloat(ts["3. low"]), 
        close: parseFloat(ts["4. close"]), 
        volume: parseInt(ts["5. volume"])
      });
      
    }
    
    return data;
  }
  
  static async daily(symbol){
    let params = new URLSearchParams();
    params.set("function", "TIME_SERIES_DAILY");
    params.set("symbol", symbol);
    params.set("outputsize", "full");
    
    let response = await av.query(params);
    
    let  data = StockTimeseries.objToArray(response["Time Series (Daily)"]);
    
    return data;
  }
  
  static async weekly(symbol){
    let params = new URLSearchParams();
    params.set("function", "TIME_SERIES_WEEKLY");
    params.set("symbol", symbol);
    params.set("outputsize", "full");
    
    let response = await av.query(params);
    
    let  data = StockTimeseries.objToArray(response["Weekly Time Series"]);
    
    return data;
  }
  
  static async monthly(symbol){
    let params = new URLSearchParams();
    params.set("function", "TIME_SERIES_MONTHLY");
    params.set("symbol", symbol);
    params.set("outputsize", "full");
    
    let response = await av.query(params);
    
    let  data = StockTimeseries.objToArray(response["Monthly Time Series"]);
    
    return data;
  }
}

export default StockTimeseries;