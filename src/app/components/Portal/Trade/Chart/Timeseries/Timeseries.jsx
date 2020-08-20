import React from "react";
import PropTypes from "prop-types";
import {MdZoomIn, MdZoomOut, MdZoomOutMap} from "react-icons/md";

import InitChart from "./initChart";
import {Wrapper, Graph, VertAxis, HorzAxis, ToolBar, Tool} from "./styles";

import TradeContext from "../../TradeContext";

export default function Timeseries({layout, dataset, item}){
  const [chart] = React.useState(()=>(new InitChart()))
  let tradeContext  = React.useContext(TradeContext);
  
  React.useEffect(()=>{
    chart.candlesticks(dataset);
  }, [dataset, layout])
  
  
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
        </defs>
        <text className="company-name" x="50%" y="50%" pointerEvents="none">{item.name}</text>
        <line className="indicator x" x1="0" y1="0" x2="100%" y2="0" pointerEvents="none"/>
        <line className="indicator y" x1="0" y1="0" x2="0" y2="100%" pointerEvents="none"/>
        <rect className="zoombase" width="100%" height="100%" pointerEvents="all"/>
        <g className="graph"></g>
      </svg>
    </Graph>
    <VertAxis>
      <svg className="y axis">
        <g></g>
        <rect className="bg" width="100%" height="100%" pointerEvents="none"/>
      </svg>
    </VertAxis>
    <HorzAxis>
      <svg className="x axis">
        <g></g>
        <rect className="bg" width="100%" height="100%" pointerEvents="none"/>
      </svg>
    </HorzAxis>
  </Wrapper>)
}

Timeseries.propTypes = {
layout:PropTypes.string.isRequired,
dataset:PropTypes.array.isRequired
}