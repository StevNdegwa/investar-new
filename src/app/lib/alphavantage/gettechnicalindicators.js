import avconnect from "./avconnect";

let av = avconnect("G2Q7JQRAG9H90QQY");

class GetTechnicalIndicators{
  
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
      data.push({date, value:r["SMA"]});
    }
    
    return data;
  }
}

export default GetTechnicalIndicators;