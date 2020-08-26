importScripts("avconnect.js");

async function globalQuote(symbol, key){
  const params = new URLSearchParams();
  params.set('function', 'GLOBAL_QUOTE');
  params.set('symbol', symbol);
  params.set("apikey", key);
  
  var response =  await avQuery(params);
  
  var quote = response["Global Quote"];
  
  const data = {};
  
  for(var key in quote){
    
    data[(key.split('.')[1]).trim()] = quote[key];
    
  }
  
  return data;
}

self.addEventListener("message", async function(e){
  const messageData = JSON.parse(e.data);
  
  var data = await globalQuote(messageData.symbol, messageData.key);
  
  self.postMessage(JSON.stringify(data));
});