import React from "react";
import PropTypes from "prop-types";

import {scaleUtc, scaleLinear, scaleBand} from "d3-scale";
import {axisBottom, axisRight, axisLeft} from "d3-axis";
import {zoom, zoomIdentity} from "d3-zoom";
import {mouse, select, event, selectAll} from "d3-selection";
import {extent, max} from "d3-array";
import {timeFormat} from "d3-time-format";

export default function Timeseries({layout, dataset}){
  const [size, setSize] = React.useState({width:0, height:0});
  let svg = React.useRef();
  
  //Measurements
  let margin = {top:20, right:50, bottom:40, left:10},
      candlestickWidth = 5,
      horzDist = (dataset.length * 5);
  
  
  //Scales and axis
  let horzScale = scaleUtc().range([0, horzDist]),
      vertScale = scaleLinear(),
      horzAxis = axisBottom(horzScale).ticks(360).tickFormat(timeFormat("%b, %Y")),
      vertAxis = axisLeft(vertScale);
  
  //Zoom Behavior
  let chartZoom = zoom()
  .scaleExtent([1, 1])
  .on("zoom", function(){
    let transform = event.transform;
    transform.y = 1; //prevent vertical movement
    
    let horzNewScale = transform.rescaleX(horzScale),
        vertNewScale = transform.rescaleY(vertScale);
        
    horzAxis.scale(horzNewScale)
    vertAxis.scale(vertNewScale)
    
    select("g.axis.x").call(horzAxis)
    
    select("g.axis.y").call(vertAxis)
    
    select("svg.chart > g.canvas-group > g.candlesticks-group").attr("transform", transform);
  })
  
  React.useEffect(()=>{
    
    initChart();
    
    return function(){
      
    }
  },[dataset, layout]);
  
  function initChart(){
    //Chart dimensions
    let bbox = svg.current.getBBox();
    setSize({width: bbox.width, height: bbox.height})
    
    //Setup scales and axis
    horzScale.domain(extent(dataset, (d)=>d.date));
    vertScale.domain(extent(dataset, (d)=>d.high))
    .range([(bbox.height - margin.top - margin.bottom), 0]);
    
    select("svg.chart > g.canvas-group > g.candlesticks-group").selectAll("g.candlestick").remove();
    
    select("svg.chart > g.canvas-group > g.candlesticks-group")
    .selectAll("g.candlestick")
    .data(dataset)
    .join("g")
    .classed("candlestick", true)
    .attr("transform", (d, i)=>{
      return`translate(${(i * candlestickWidth) + 1}, 0)`;
    })
    .each(function(){
      select(this).append("rect")
      .classed("body", true)
      .attr("pointer-events", "none")
      .attr("y", (d, i)=>(vertScale(d.close > d.open ? d.close : d.open)))
      .attr("height", (d, i)=>(Math.abs(d.close - d.open)))
      .attr("width", candlestickWidth)
      .attr("fill", (d, i)=>(d.close > d.open ? "green" : "red"))
      
      select(this)
      .append("line")
      .classed("wick", true)
      .attr("pointer-events", "none")
      .attr("x1", 2.5)
      .attr("y1", (d, i)=>(vertScale(d.high)))
      .attr("x2", 2.5)
      .attr("y2", (d, i)=>(vertScale(d.low)))
      .attr("stroke", (d, i)=>(d.close > d.open ? "green" : "red"))
    })
    
    select("g.axis.x").call(horzAxis)
    select("g.axis.y").call(vertAxis)
    
    //Track mouse location
    select("svg.chart .zoombase")
    .call(chartZoom.transform, zoomIdentity.translate((bbox.width-horzDist), 0))
    .call(chartZoom)
    .on("mousemove", function(){
      let [x, y] = mouse(this);
      select("line.indicator.x").attr("y1", y).attr("y2", y)
      select("line.indicator.y").attr("x1", x).attr("x2", x)
    })
  }
  
  return (
    <svg className="chart timeseries" ref={svg}>
      <defs>
        <pattern id="bg-grid" width="100" height="150" patternUnits="userSpaceOnUse">
          <line x1="0" y1="75" x2="100" y2="75"/>
          <line x1="50" y1="0" x2="50" y2="150"/>
        </pattern>
      </defs>
      <line className="indicator x" x1="0" y1="0" x2="100%" y2="0"/>
      <line className="indicator y" x1="0" y1="0" x2="0" y2="100%"/>
      <rect className="zoombase" width="100%" height="100%" pointerEvents="all"/>
      <g className="canvas-group" transform={`translate(${margin.left},${margin.top})`}>
        <g className="candlesticks-group"></g>
        <g className="axis x" transform={`translate(0,${size.height-margin.top-margin.bottom})`}/>
        <g className="axis y" transform={`translate(${size.width-margin.left-margin.right},0)`}/>
      </g>
    </svg>
  );
}

Timeseries.propTypes = {
layout:PropTypes.string.isRequired,
dataset:PropTypes.array.isRequired
}