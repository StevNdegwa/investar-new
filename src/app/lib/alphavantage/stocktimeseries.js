import avconnect from "./avconnect";

class StockTimeseries{
  
  static daily(symbol){
    let params = new URLSearchParams();
    params.set("function", "TIME_SERIES_DAILY");
    params.set("symbol", symbol);
    params.set("outputsize", "compact");
    
    return avconnect("G2Q7JQRAG9H90QQY").query(params);
  }
  
  static weekly(symbol){
    let params = new URLSearchParams();
    params.set("function", "TIME_SERIES_WEEKLY");
    params.set("symbol", symbol);
    params.set("outputsize", "compact");
    
    return avconnect("G2Q7JQRAG9H90QQY").query(params);
  }
  
  static monthly(symbol){
    let params = new URLSearchParams();
    params.set("function", "TIME_SERIES_MONTHLY");
    params.set("symbol", symbol);
    params.set("outputsize", "compact");
    
    return avconnect("G2Q7JQRAG9H90QQY").query(params);
  }
}

export default StockTimeseries;