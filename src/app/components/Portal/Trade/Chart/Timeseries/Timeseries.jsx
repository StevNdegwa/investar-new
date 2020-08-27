import React from "react";
import PropTypes from "prop-types";
import {MdZoomIn, MdZoomOut, MdZoomOutMap, MdMoreVert, MdClear} from "react-icons/md";

import WebWorker from "react-webworker";

import InitChart from "./initChart";
import GlobalQuote from "./GlobalQuote";
import {Wrapper, Graph, VertAxis, HorzAxis, ToolBar, Tool, ControlsHub} from "./styles";

import TradeContext from "../../TradeContext";

export default function Timeseries({layout, dataset, item, type, showLoading}){
  const [chart] = React.useState(()=>(new InitChart()));
  const [showGlobalQuote, setShowGlobalQuote] = React.useState(true);
  
  let tradeContext = React.useContext(TradeContext);
  
  function drawChart(){
    switch(type){
      case "LC":
        chart.lineChart();
        break;
      default:
        chart.candlesticks();
        break;
    }
  }
  
  React.useEffect(()=>{
    setShowGlobalQuote(false);
    chart.init(dataset);
    chart.graph();
    drawChart();
  }, [dataset]);
  
  React.useEffect(()=>{
    chart.graph();
    drawChart();
  }, [layout]);
  
  React.useEffect(()=>{
    drawChart();
  },[type]);
  
  function loadQuoteData(quote){
    var {open, high, low, price, volume, change, "latest trading day":latestTradingDay, "previous close":previousClose, "change percent":percentChange} = quote;
    
    return {open, high, low, price, volume, change, latestTradingDay:new Date(latestTradingDay).toDateString(), previousClose, percentChange};
  }
  
  let createControlsHub = () => (
    <WebWorker url="/assets/workers/alphavantage/globalquote.js" parser={JSON.parse} serializer={JSON.stringify} onMessage={()=>showLoading(false)}>
      {({data, error, postMessage, onMessage})=>{
        let flag = showGlobalQuote && data;
        
        return (
          <ControlsHub className="level-300">
            <ToolBar>
              <Tool onClick={()=>chart.zoomChart("ZOOM_OUT")} title="Zoom In"><MdZoomOut/></Tool>
              <Tool onClick={()=>chart.zoomChart("UNZOOM")} title="Unzoom"><MdZoomOutMap/></Tool>
              <Tool onClick={()=>chart.zoomChart("ZOOM_IN")} title="Zoom Out"><MdZoomIn/></Tool>
              <Tool onClick={()=>{
                if(showGlobalQuote){
                  setShowGlobalQuote(false);
                }else{
                  let sk = {symbol:tradeContext.activeItem.item.symbol, key:"G2Q7JQRAG9H90QQY"};
                  postMessage(sk);
                  showLoading(true);
                  setShowGlobalQuote(true);
                }
              }}>{flag ? <MdClear/> : <MdMoreVert/>}</Tool>
            </ToolBar>
            {flag && <GlobalQuote quoteData={loadQuoteData(data)}/>}
          </ControlsHub>
        )}
      }
    </WebWorker>
  );
  
  return (<Wrapper className="timeseries">
    <Graph>
      {createControlsHub()}
      <svg className="chart timeseries">
        <defs>
          <pattern id="bg-grid" width="100" height="150" patternUnits="userSpaceOnUse">
            <line x1="0" y1="75" x2="100" y2="75"/>
            <line x1="50" y1="0" x2="50" y2="150"/>
          </pattern>
          <linearGradient id="area-shade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor:"#03a9f4",stopOpacity:0.7}}/>
            <stop offset="100%" style={{stopColor:"#03a9f4",stopOpacity:0}}/>
          </linearGradient>
        </defs>
        <text className="company-name" x="50%" y="50%" pointerEvents="none">{item.name}</text>
        <g className="indicator">
          <line className="horizontal" x1="0" y1="0" x2="100%" y2="0" pointerEvents="none"/>
          <line className="vertical" x1="0" y1="0" x2="0" y2="100%" pointerEvents="none"/>
          <rect className="board"/>
        </g>
        <rect className="zoombase" width="100%" height="100%" pointerEvents="all"/>
        <g className="graph-container"></g>
      </svg>
    </Graph>
    <VertAxis>
      <svg className="y axis">
        <g className="graph"></g>
        <rect className="bg" width="100%" height="100%" pointerEvents="none"/>
        <g className="pointer"  pointerEvents="none">
          <rect x="0" rx="5px"/>
          <text x="50%" y="15px"></text>
        </g>
      </svg>
    </VertAxis>
    <HorzAxis>
      <svg className="x axis">
        <g className="graph"></g>
        <rect className="bg" width="100%" height="100%" pointerEvents="none"/>
        <g className="pointer"  pointerEvents="none">
          <rect y="0" rx="5px"/>
          <text x="50px" y="15px"></text>
        </g>
      </svg>
    </HorzAxis>
  </Wrapper>)
}

Timeseries.propTypes = {
layout:PropTypes.string.isRequired,
dataset:PropTypes.array.isRequired
}