async function avQuery(queryParameters){ //Pass a URLSearchParams object
  var response = await fetch(`https://www.alphavantage.co/query?${queryParameters}`, {method:"GET"})
  .then((response)=>{
    return response.json();
  })
    
  return response;
}