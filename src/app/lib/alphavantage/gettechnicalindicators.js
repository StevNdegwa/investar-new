import avconnect from "./avconnect";

let av = avconnect("G2Q7JQRAG9H90QQY");

class GetTechnicalIndicators{
  
  static async movingAverages(ma, symbol, interval, time_period, series_type){
    let params = new URLSearchParams();
    params.set("function", ma);
    params.set("symbol", symbol);
    params.set("interval", interval); //1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
    params.set("time_period", time_period);
    params.set("series_type", series_type); //close, open, high, low
  
    let response = await av.query(params);
    
    let analysis = response[`Technical Analysis: ${ma}`],
        data = [];
    
    for(let date in analysis){
      let r = analysis[date];
      data.push({date, value: r[ma]});
    }
    
    return data;
  }
  
  static async sma(symbol, interval, time_period, series_type){
    let params = new URLSearchParams();
    params.set("function", "SMA");
    params.set("symbol", symbol);
    params.set("interval", interval); //1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
    params.set("time_period", time_period);
    params.set("series_type", series_type); //close, open, high, low
  
    let response = await av.query(params);
    
    let analysis = response["Technical Analysis: SMA"],
        data = [];
    
    for(let date in analysis){
      let r = analysis[date];
      data.push({date, value: r["SMA"]});
    }
    
    return data;
  }
  
  static async ema(symbol, interval, time_period, series_type){
    let params = new URLSearchParams();
    params.set("function", "EMA");
    params.set("symbol", symbol);
    params.set("interval", interval); //1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
    params.set("time_period", time_period);
    params.set("series_type", series_type); //close, open, high, low
  
    let response = await av.query(params);
    
    let analysis = response["Technical Analysis: EMA"],
        data = [];
    
    for(let date in analysis){
      let r = analysis[date];
      data.push({date, value: r["EMA"]});
    }
    
    return data;
  }
  
  static async wma(symbol, interval, time_period, series_type){
    let params = new URLSearchParams();
    params.set("function", "WMA");
    params.set("symbol", symbol);
    params.set("interval", interval); //1min, 5min, 15min, 30min, 60min, daily, weekly, monthly
    params.set("time_period", time_period);
    params.set("series_type", series_type); //close, open, high, low
  
    let response = await av.query(params);
    
    let analysis = response["Technical Analysis: WMA"],
        data = [];
    
    for(let date in analysis){
      let r = analysis[date];
      data.push({date, value: r["WMA"]});
    }
    
    return data;
  }
}

export default GetTechnicalIndicators;