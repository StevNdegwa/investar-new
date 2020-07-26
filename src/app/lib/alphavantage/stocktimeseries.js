import avconnect from "./avconnect";

class StockTimeseries{
  
  static async daily(symbol){
    let params = new URLSearchParams();
    params.set("function", "TIME_SERIES_DAILY");
    params.set("symbol", symbol);
    params.set("outputsize", "compact");
    
    let response = await avconnect("G2Q7JQRAG9H90QQY").query(params);
    
    let  data = [];
    
    for(let date in response["Time Series (Daily)"]){
      
      let ts = response["Time Series (Daily)"][date];
      
      data.push({date:new Date(date), open: Number(ts["1. open"]),  high: Number(ts["2. high"]), low: Number(ts["3. low"]), close: Number(ts["4. close"]), volume: Number(ts["5. volume"])});
      
    }
    
    return data;
  }
  
  static async weekly(symbol){
    let params = new URLSearchParams();
    params.set("function", "TIME_SERIES_WEEKLY");
    params.set("symbol", symbol);
    params.set("outputsize", "compact");
    
    let response = await avconnect("G2Q7JQRAG9H90QQY").query(params);
    
    let  data = [];
    
    for(let date in response["Weekly Time Series"]){
      
      let ts = response["Weekly Time Series"][date];
      
      data.push({date:new Date(date), open: ts["1. open"],  high: ts["2. high"], low: ts["3. low"], close: ts["4. close"], volume: ts["5. volume"]});
      
    }
    
    
    return data;
  }
  
  static async monthly(symbol){
    let params = new URLSearchParams();
    params.set("function", "TIME_SERIES_MONTHLY");
    params.set("symbol", symbol);
    params.set("outputsize", "compact");
    
    let response = await avconnect("G2Q7JQRAG9H90QQY").query(params);
    
    let  data = [];
    
    for(let date in response["Monthly Time Series"]){
      
      let ts = response["Monthly Time Series"][date];
      
      data.push({date:new Date(date), open: ts["1. open"],  high: ts["2. high"], low: ts["3. low"], close: ts["4. close"], volume: ts["5. volume"]});
      
    }
    
    
    return data;
  }
}

export default StockTimeseries;