import React from "react";
import PropTypes from "prop-types";
import {MdZoomIn, MdZoomOut, MdZoomOutMap} from "react-icons/md";

import InitChart from "./initChart";
import {Wrapper, Graph, VertAxis, HorzAxis, ToolBar, Tool} from "./styles";


export default function Timeseries({layout, dataset, item, type}){
  const [chart] = React.useState(()=>(new InitChart()));
  
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
    chart.init(dataset);
    chart.graph();
    drawChart();
  }, [dataset])
  
  React.useEffect(()=>{
    chart.graph();
    drawChart();
  }, [layout])
  
  React.useEffect(()=>{
    drawChart();
  },[type]);
  
  
  return (<Wrapper className="timeseries">
    <Graph>
      <ToolBar className="level-300">
        <Tool onClick={()=>chart.zoomChart("ZOOM_OUT")} title="Zoom In">
          <div className="icon"><MdZoomOut/></div>
        </Tool>
        <Tool onClick={()=>chart.zoomChart("UNZOOM")} title="Unzoom">
          <div className="icon"><MdZoomOutMap/></div>
        </Tool>
        <Tool onClick={()=>chart.zoomChart("ZOOM_IN")} title="Zoom Out">
          <div className="icon"><MdZoomIn/></div>
        </Tool>
      </ToolBar>
      <svg className="chart timeseries">
        <defs>
          <pattern id="bg-grid" width="100" height="150" patternUnits="userSpaceOnUse">
            <line x1="0" y1="75" x2="100" y2="75"/>
            <line x1="50" y1="0" x2="50" y2="150"/>
          </pattern>
          <linearGradient id="area-shade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor:"#03a9f4",stopOpacity:1}}/>
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