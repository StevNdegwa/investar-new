import {scaleUtc, scaleLinear, scaleBand} from "d3-scale";
import {axisBottom, axisRight} from "d3-axis";
import {zoom, zoomIdentity} from "d3-zoom";
import {mouse, select, event} from "d3-selection";
import {extent, max, min} from "d3-array";
import {format} from "d3-format";
import {timeFormat} from "d3-time-format";
import {transition} from "d3-transition";
import {interpolateNumber} from "d3-interpolate"

let numberFormat = format(" ,");

class InitChart{
  constructor(){
    this.chartZoom = zoom();
    this.horzDist = 0;
    this.vertScale = scaleLinear();
    this.horzLinearScale = scaleUtc();
    this.horzBandScale = scaleBand().padding(0.4);
    this.vertAxis = axisRight();
    this.horzAxis = axisBottom().tickFormat(timeFormat("%b, %Y"));
    this.currentZoomLevel = 1;
  }
  
  draw(dataset){
    let chart = this;
    //Get the chart dimensions
    let {x, y, width, height, top, right, bottom, left} = select("div.timeseries svg.chart.timeseries").node().getBoundingClientRect();
    
    chart.horzDist = dataset.length * 5;
   
    chart.vertScale.domain([min(dataset, (d)=>d.low), max(dataset, (d)=>d.high)])
    .range([height, 0]);
    
    chart.horzLinearScale.domain(extent(dataset, (d)=>d.date)).range([0, chart.horzDist]);
    chart.horzBandScale.domain(dataset.map((d)=>d.date).reverse()).range([0, chart.horzDist]);
    
    //Axis functions
    chart.horzAxis.ticks(parseInt(dataset.length / 30)) 
    
    let show = (g)=>g.transition().duration(Math.max(500, dataset.length))
    .attrTween("opacity", ()=>interpolateNumber(0, 1))
  
    select("div.timeseries svg.chart.timeseries > g.graph").selectAll("g.candlestick").remove();
  
    select("div.timeseries svg.chart.timeseries > g.graph")
    .selectAll("g.candlestick")
    .data(dataset)
    .join("g")
    .classed("candlestick", true)
    .attr("transform", (d, i)=>{
      return`translate(${this.horzBandScale(d.date)}, 0)`;
    })
    .each(function(){
      select(this)
      .append("rect")
      .classed("body", true)
      .attr("y", (d, i)=>(chart.vertScale(d.close > d.open ? d.close : d.open)))
      .attr("height", (d, i)=>(Math.abs(d.close - d.open)))
      .attr("width", chart.horzBandScale.bandwidth())
      .attr("fill", (d, i)=>(d.close > d.open ? "#00FF00" : "red"))
      
      select(this)
      .append("line")
      .classed("wick", true)
      .attr("pointer-events", "none")
      .attr("x1", chart.horzBandScale.bandwidth()/2)
      .attr("y1", (d, i)=>(chart.vertScale(d.high)))
      .attr("x2", chart.horzBandScale.bandwidth()/2)
      .attr("y2", (d, i)=>(chart.vertScale(d.low)))
      .attr("stroke", (d, i)=>(d.close > d.open ? "#00FF00" : "red"))
    })
    .call(show)
    .append("title")
    .text((d, i)=>{
      return `Trade Date: ${d.date.toDateString()},\nOpen: ${numberFormat(d.open)},\nClose: ${numberFormat(d.close)},\nHigh: ${numberFormat(d.high)},\nLow: ${numberFormat(d.low)}`;
    })
    
    chart.vertAxis.scale(chart.vertScale);
    chart.horzAxis.scale(chart.horzLinearScale)
    
    select("div.timeseries svg.axis.y > g").call(chart.vertAxis);
    select("div.timeseries svg.axis.x > g").call(chart.horzAxis);
    
    chart.chartZoom
    .translateExtent([[0, 0], [chart.horzDist, height]])//Limit the zoom translation
    .scaleExtent([1, 8]) //Limit zoom scaling
    .on("zoom", function(){
      let transform = event.transform;
    
      let newHorzScale = transform.rescaleX(chart.horzLinearScale);
      chart.horzAxis.scale(newHorzScale);
      
      let newVertScale = transform.rescaleY(chart.vertScale);
      chart.vertAxis.scale(newVertScale);
      
      select("div.timeseries svg.axis.y > g").transition().duration(300).call(chart.vertAxis);
      select("div.timeseries svg.axis.x > g").transition().duration(300).call(chart.horzAxis);
      select("div.timeseries svg.chart.timeseries > g.graph")
      .transition().duration(300).attr("transform", transform);
    })
    
    select("div.timeseries svg.chart.timeseries > .zoombase")
    .call(chart.chartZoom.transform, zoomIdentity.translate((width - chart.horzDist), 0))
    .call(chart.chartZoom)
    .on("mousemove", function(){
      let [x, y] = mouse(this);
    
      select("div.timeseries line.indicator.x").attr("y1", y).attr("y2", y);
      select("div.timeseries line.indicator.y").attr("x1", x).attr("x2", x);
    })
  }
  
  zoomChart(action){
    let zm = select("div.timeseries svg.chart.timeseries > .zoombase"), 
      chart = this;
    switch(action){
      case "ZOOM_IN":
        //Can't scale over 4
        if(chart.currentZoomLevel < 4){
          chart.chartZoom.scaleBy(zm, 2);
          chart.currentZoomLevel++;
        }
        break;
      case "ZOOM_OUT":
        //Can't scale to under 1
        if(chart.currentZoomLevel > 1){
          chart.chartZoom.scaleBy(zm, 0.5);
          chart.currentZoomLevel--;
        }
        break;
      default:
        chart.currentZoomLevel = 1;
        chart.chartZoom.scaleTo(zm, 1);
    }
  }
}

export default InitChart;