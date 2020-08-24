import avconnect from "./avconnect";

export default async function globalQuote(symbol){
  let params = new URLSearchParams();
  params.set('function', 'GLOBAL_QUOTE');
  params.set('symbol', symbol);
  
  let response =  await avconnect("G2Q7JQRAG9H90QQY").query(params);
  
  let quote = response["Global Quote"];
  
  var data = {};
  
  for(let key in quote){
    
    data[(key.split('.')[1]).trim()] = quote[key];
    
  }
  
  return data;
}