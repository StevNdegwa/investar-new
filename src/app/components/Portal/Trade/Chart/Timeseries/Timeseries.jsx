import React from "react";
import PropTypes from "prop-types";

import initChart from "./initChart";
import {Wrapper, Graph, VertAxis, HorzAxis} from "./styles";

export default function Timeseries({layout, dataset}){
  
  React.useEffect(()=>{
    initChart(dataset);
  }, [dataset, layout])
  
  return (<Wrapper className="timeseries">
    <Graph>
      <svg className="chart timeseries">
        <defs>
          <pattern id="bg-grid" width="100" height="150" patternUnits="userSpaceOnUse">
            <line x1="0" y1="75" x2="100" y2="75"/>
            <line x1="50" y1="0" x2="50" y2="150"/>
          </pattern>
        </defs>
        <line className="indicator x" x1="0" y1="0" x2="100%" y2="0"/>
        <line className="indicator y" x1="0" y1="0" x2="0" y2="100%"/>
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