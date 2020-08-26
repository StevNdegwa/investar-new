import React from "react";
import {CSSTransition} from "react-transition-group";
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from "react-icons/ai";

import {line, curveMonotoneX} from "d3-shape";
import {scalePoint, scaleLinear} from "d3-scale";
import {extent} from "d3-array";
import {select} from "d3-selection";
import {axisBottom} from "d3-axis";
import {format} from "d3-format";

import {Wrapper, Ul, Chart} from './styles';

let numberFormat = format(" ,"),
  priceFormat = format("$,.2f");

export default function GlobalQuote({quoteData}){
  const [showChart, setShowChart] = React.useState(false);
  
  let lineChart = React.useCallback((dataset)=>{
    let horzScale = scalePoint(dataset.map((d)=>d.label), [15, 170]),
      vertScale = scaleLinear(extent(dataset, (d)=>d.value), [120, 10]);
      select("svg.gq-chart > g.graph > g.axis").call(axisBottom(horzScale)).attr("transform", "translate(0, 120)").select(".domain").remove();
      return line().x((d)=>horzScale(d.label)).y((d)=>vertScale(d.value)).curve(curveMonotoneX)(dataset);
  }, []);
  
  
  return (<Wrapper>
    <CSSTransition timeout={100} in={!showChart} classNames="expand-down">
      <Ul is_showing={!showChart}>
        <li className="control" onClick={()=>setShowChart(true)}><AiOutlineDoubleRight/></li>
        <li>{quoteData.latestTradingDay}</li>
        <li>Price: {priceFormat(quoteData.price || 0)}</li>
        <li>Open: {priceFormat(quoteData.open || 0)}</li>
        <li>High: {priceFormat(quoteData.high || 0)}</li>
        <li>Low: {priceFormat(quoteData.low || 0)}</li>
        <li>Volume: {numberFormat(quoteData.volume || 0)}</li>
      </Ul>
    </CSSTransition>
    <CSSTransition timeout={100} in={showChart} classNames="expand-down">
      <Chart is_showing={showChart} posChange={quoteData.change > 0}>
        <div className="control" onClick={()=>setShowChart(false)}><AiOutlineDoubleLeft/></div>
        <div className="quote">{priceFormat(quoteData.price)} <div>&nbsp;{quoteData.percentChange}</div></div>
        <svg width="100%" height="100%" className="gq-chart">
          <g className="graph" transform="translate(10,10)">
            <path className="line" 
              d={lineChart([
                  {value:quoteData.previousClose, label:"Prev. Close"}, 
                  {value:quoteData.open, label:"Opening"}, 
                  {value:quoteData.price, label:"Price"}
                  ])
                }
              />
            <g className="axis"></g>
          </g>
        </svg>
      </Chart>
    </CSSTransition>
  </Wrapper>)
}