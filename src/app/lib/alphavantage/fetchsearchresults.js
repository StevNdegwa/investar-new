import avconnect from "./avconnect";

export default async function fetchSearchResults(search){
  let params = new URLSearchParams();
  params.set("function", "SYMBOL_SEARCH");
  params.set("keywords", search);
  
  let response = await avconnect("G2Q7JQRAG9H90QQY").query(params);
  
  //The aim of this process is to clean the data returned by the apiS
  var data = response.bestMatches.map((d)=>{
    var match = {};
      
    for(let key in d){
      
      match[key.split(".")[1].trim()] = d[key];
    
    }
      
      return match;
  });
  
  return data;
}