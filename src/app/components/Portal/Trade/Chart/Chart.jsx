import React from "react";

import * as d3 from  "d3";

import ChartLoader from "./ChartLoader.jsx";
import {Wrapper} from "./styles";

import TradeContext from  "../TradeContext";

export default function Chart({stocksTimeseries, getStocksTimeseries}){
  
  let tradeContext = React.useContext(TradeContext);
  
  React.useEffect(()=>{
    loadData()  
  }, []);
  
  async function loadData(){
    try{
      
      let data = await getStocksTimeseries(tradeContext.duration, tradeContext.activeItem.item);
      
    }catch(error){
      console.log(error)
    }
  }
  
  return (<Wrapper>
  </Wrapper>)
}