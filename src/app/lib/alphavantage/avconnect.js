import fetch from "cross-fetch";

class AvConnect{
  constructor(key){
    this.key = key;
  }
  
  async query(queryParameters){ //Pass a URLSearchParams object
    queryParameters.set('apikey', this.apiKey);
    
    var response = await fetch(`https://www.alphavantage.co/query?${queryParameters}`, {method:"GETS"})
    .then((response)=>{
      return response.json();
    })
    
    return response;
  }
}

export default (key)=>(new AvConnect(key));