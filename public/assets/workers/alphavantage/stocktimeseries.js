importScripts("avconnect.js");

function objToArray(obj){//Transfom object to array
  const data = [];
  for(var date in obj){  
    var ts = obj[date];
    
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

async function getTSData(symbol, duration, key){
  const params = new URLSearchParams();
  params.set("symbol", symbol);
  params.set("outputsize", "full");
  params.set("apikey", key);
  
  var data, response;
  
  switch(duration){
    case "DAILY":
      params.set("function", "TIME_SERIES_DAILY");
      
      response = await avQuery(params);
    
      data = objToArray(response["Time Series (Daily)"]);
      
      break;
    case "WEEKLY":
      params.set("function", "TIME_SERIES_WEEKLY");
      
      response = await avQuery(params);
      
      data = objToArray(response["Weekly Time Series"]);
      
      break;
    case "MONTHLY":
      params.set("function", "TIME_SERIES_MONTHLY");
      
      response = await avQuery(params);
      
      data = objToArray(response["Monthly Time Series"]);
      break;
  }
  
  return data;
}

self.addEventListener("message", async function(e){
  try{
    const config = JSON.parse(e.data);
  
    const data = await getTSData(config.symbol, config.duration, config.key);
  
    self.postMessage(JSON.stringify(data));
  }catch(error){
    
    const data = {error:true, message:"Connection failure"};
    
    self.postMessage(JSON.stringify(data));
    
  }
})