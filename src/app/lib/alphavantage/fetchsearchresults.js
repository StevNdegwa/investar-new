import avconnect from "./avconnect";

export default function fetchSearchResults(search){
  let params = new URLSearchParams();
  params.set("function", "SYMBOL_SEARCH");
  params.set("keywords", search);
  
  return avconnect("G2Q7JQRAG9H90QQY").query(params);
}