import {scaleUtc, scaleLinear, scaleBand} from "d3-scale";
import {axisBottom, axisRight} from "d3-axis";
import {zoom, zoomIdentity} from "d3-zoom";
import {mouse, select, event} from "d3-selection";
import {extent, max, min} from "d3-array";
import {timeFormat} from "d3-time-format";
import {transition} from "d3-transition";
import {interpolateNumber} from "d3-interpolate"

export default function initChart(dataset){
  let bbox, //bounding box 
    horzDist, //Full chart distance
    vertScale, //Vertical Scale
    horzLinearScale, //Horizontal linear scale - for setting up axis 
    horzBandScale, //Horizontal band scale - for moving candle-sticks 
    vertAxis, //Vertical axis
    horzAxis, //Horizontal axis
    chartZoom, //Zoom behavior function
    show; //Transition function
  
  bbox = select("div.timeseries svg.chart.timeseries").node().getBBox();
  horzDist = dataset.length * 5;
  
  //Scale functions
  vertScale = scaleLinear()
  .domain([min(dataset, (d)=>d.low), max(dataset, (d)=>d.high)])
  .range([bbox.height, 0]);
  horzLinearScale = scaleUtc().domain(extent(dataset, (d)=>d.date)).range([0, horzDist]);
  horzBandScale = scaleBand(dataset.map((d)=>d.date).reverse(), [0, horzDist]);
  
  //Axis functions
  vertAxis = axisRight(vertScale);
  horzAxis = axisBottom(horzLinearScale).ticks(300).tickFormat(timeFormat("%b, %Y"));
  
  show = transition().duration(500)
  .attrTween("opacity", ()=>interpolateNumber(0, 1))
  
  select("div.timeseries svg.chart.timeseries > g.graph")
  .selectAll("g.candlestick").remove();
  
  
  select("div.timeseries svg.chart.timeseries > g.graph")
  .selectAll("g.candlestick")
  .data(dataset)
  .join("g")
  .classed("candlestick", true)
  .attr("transform", (d, i)=>{
    return`translate(${horzBandScale(d.date)}, 0)`;
  })
  .each(function(){
    select(this).append("rect")
    .classed("body", true)
    .attr("pointer-events", "none")
    .attr("y", (d, i)=>(vertScale(d.close > d.open ? d.close : d.open)))
    .attr("height", (d, i)=>(Math.abs(d.close - d.open)))
    .attr("width", horzBandScale.bandwidth())
    .attr("fill", (d, i)=>(d.close > d.open ? "#00FF00" : "red"))
      
    select(this)
    .append("line")
    .classed("wick", true)
    .attr("pointer-events", "none")
    .attr("x1", 2.5)
    .attr("y1", (d, i)=>(vertScale(d.high)))
    .attr("x2", 2.5)
    .attr("y2", (d, i)=>(vertScale(d.low)))
    .attr("stroke", (d, i)=>(d.close > d.open ? "#00FF00" : "red"))
  })
  .transition(transition)
    
  //Zoom behavior
  chartZoom = zoom().scaleExtent([1, 1])
  .on("zoom", function(){
    let transform = event.transform;
    transform.y = 1; //Prevent horizontal Movement
    
    let horzNewLinearScale = transform.rescaleX(horzLinearScale);
    horzAxis.scale(horzNewLinearScale);
    
    select("div.timeseries svg.axis.x > g").call(horzAxis);
    select("div.timeseries svg.chart.timeseries > g.graph").attr("transform", transform);
  })
  
  
  
  select("div.timeseries svg.axis.y > g").call(vertAxis);
  select("div.timeseries svg.axis.x > g").call(horzAxis);
  
  select("div.timeseries svg.chart.timeseries > .zoombase")
  .call(chartZoom.transform, zoomIdentity.translate((bbox.width - horzDist), 0))
  .call(chartZoom)
  .on("mousemove", function(){
    let [x, y] = mouse(this);
    select("div.timeseries line.indicator.x").attr("y1", y).attr("y2", y);
    select("div.timeseries line.indicator.y").attr("x1", x).attr("x2", x);
  })
}