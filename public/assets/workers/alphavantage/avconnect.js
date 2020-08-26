async function avQuery(queryParameters){ //Pass a URLSearchParams object
  return fetch(`https://www.alphavantage.co/query?${queryParameters}`, {method:"GET"})
  .then((response)=>{
    return response.json();
  })
}