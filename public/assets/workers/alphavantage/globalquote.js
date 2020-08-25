importScripts("avconnect.js");

async function globalQuote(symbol, key){
  let params = new URLSearchParams();
  params.set('function', 'GLOBAL_QUOTE');
  params.set('symbol', symbol);
  params.set("apikey", key);
  
  let response =  await avQuery(params);
  
  let quote = response["Global Quote"];
  
  var data = {};
  
  for(let key in quote){
    
    data[(key.split('.')[1]).trim()] = quote[key];
    
  }
  
  return data;
}

self.addEventListener("message", async function(e){
  let messageData = JSON.parse(e.data);
  
  let data = await globalQuote(messageData.symbol, messageData.key);
  
  self.postMessage(JSON.stringify(data));
})