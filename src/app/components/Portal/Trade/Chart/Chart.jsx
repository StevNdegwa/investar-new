import React from "react";

import * as d3 from  "d3";

import ChartLoader from "./ChartLoader.jsx";
import {Wrapper} from "./styles";

import TradeContext from  "../TradeContext";

export default function Chart({stocksTimeseries, getStocksTimeseries}){
  const [loading, setLoading] = React.useState(true);
  const [dataset, setDataset] = React.useState([]);
  
  let tradeContext = React.useContext(TradeContext);
  
  let margin = 40;
  
  let chart = React.useRef();
  
  React.useEffect(()=>{
    
    loadData();
  }, [tradeContext.activeItem.item]);
  
  async function loadData(){
    setLoading(true)
      
    try{
     
      let data = await getStocksTimeseries("DAILY", tradeContext.activeItem.item);
      console.log(data)
      setDataset(data);
      createChart(data);
      setLoading(false);
      
    }catch(error){
      
    }
  }
  
  function createChart(dataset){
    let width = chart.current.width.baseVal.value,
        height = chart.current.height.baseVal.value,
        horzScale = d3.scaleUtc(d3.extent(dataset, (d)=>d.date), [0, width-80]),
        vertScale =  d3.scaleLinear([d3.min(dataset, (d)=>d.low), d3.max(dataset, (d)=>d.high)], [height-80, 0]),
        area = d3.line().x((d)=>horzScale(d.date)).y0((d)=>0).y1((d)=>vertScale(d.close))
        
        
        console.log(d3.min(dataset, (d)=>d.low))
        
    d3.select(chart.current).select(".chart").append("p").datum(dataset).attr("d", area).attr("stroke", "steelblue")
    .attr("stroke-width", "1.5");
  }
  
  return (<Wrapper ref={chart}>
    {loading && <ChartLoader/>}
    <g className="chart" transform={`translate(${margin}, ${margin})`} stroke="steelblue"></g>
  </Wrapper>)
}