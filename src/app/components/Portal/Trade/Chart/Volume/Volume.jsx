import React from "react";

import InitChart from "./initChart";
import {Graph, VertAxis, HorzAxis, Wrapper} from "./styles";

export default function Volume({dataset}){
  const [chart] = React.useState(()=>(new InitChart()));
  
  React.useEffect(()=>{
    chart.draw(dataset);
    return function(){
      
    }
  })
  
  return (
    <Wrapper className="volume">
      <Graph>
        <svg className="chart volume">
          <rect className="zoombase" width="100%" height="100%" pointerEvents="all"/>
          <g className="indicator">
            <line className="horizontal" x1="0" y1="0" x2="100%" y2="0" pointerEvents="none"/>
            <line className="vertical" x1="0" y1="0" x2="0" y2="100%" pointerEvents="none"/>
            <rect className="board"/>
          </g>
          <g className="graph-container"></g>
        </svg>
      </Graph>
      <VertAxis>
        <svg className="axis y">
          <g className="graph"></g>
        </svg>
      </VertAxis>
      <HorzAxis>
        <svg className="axis x">
          <g className="graph"></g>
        </svg>
      </HorzAxis>
    </Wrapper>
  );
}