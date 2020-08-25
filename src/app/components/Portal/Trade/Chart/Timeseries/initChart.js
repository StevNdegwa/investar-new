import {scaleUtc, scaleLinear, scaleBand} from "d3-scale";
import {line, area, curveLinear} from "d3-shape";
import {axisBottom, axisRight} from "d3-axis";
import {zoom, zoomIdentity} from "d3-zoom";
import {mouse, select, event} from "d3-selection";
import {extent, max, min} from "d3-array";
import {format} from "d3-format";
import {timeFormat} from "d3-time-format";
import {interpolateNumber} from "d3-interpolate";

let numberFormat = format(" $,.2f"),
  formatTime = timeFormat("%b, %Y");

class InitChart{
  constructor(){
    this.chartZoom = zoom();
    this.horzDist = 0;
    this.width = 0;
    this.height = 0;
    this.horzLinearScale = scaleUtc();
    this.horzBandScale = scaleBand().padding(0.4);
    this.vertScale = scaleLinear();
    this.vertAxis = axisRight(this.vertScale).tickFormat(numberFormat);
    this.horzAxis = axisBottom(this.horzLinearScale).tickFormat(formatTime);
    this.currentZoomLevel = 1;
    this.dataset = [];
    this.show = null;
  }
  
  get currentDataset(){
    return this.dataset;
  }
  
  set currentDataset(d){
    this.dataset =  d;
  }
  
  
  init(dataset){
    this.dataset = dataset;
    
    let chart = this;
    
    chart.horzDist = dataset.length * 10;
    
    chart.show = (g)=>g.transition().duration(Math.max(500, chart.dataset.length / 2))
    .attrTween("opacity", ()=>interpolateNumber(0, 1))
    
    chart.vertScale.domain([min(dataset, (d)=>d.low), max(dataset, (d)=>d.high)]);
    
    chart.horzLinearScale.domain(extent(dataset, (d)=>d.date)).range([0, chart.horzDist]);
    chart.horzBandScale.domain(dataset.map((d)=>d.date).reverse()).range([0, chart.horzDist]);
    
    //Axis functions
    chart.horzAxis.ticks(parseInt(dataset.length / 30)) 
    
  }
  
  graph(){
    let chart = this,
      graphContainer = select("div.timeseries svg.chart.timeseries > g.graph-container"),
      vertAxisGraph = select("div.timeseries svg.axis.y > g.graph"),
      horzAxisGraph = select("div.timeseries svg.axis.x > g.graph"),
      vertAxisPointer = select("div.timeseries svg.axis.y > g.pointer"),
      horzAxisPointer = select("div.timeseries svg.axis.x > g.pointer"),
      indicator = select("div.timeseries svg.chart.timeseries > g.indicator"),
      horzIndicator = select("div.timeseries svg.chart.timeseries > g.indicator > line.horizontal"),
      vertIndicator = select("div.timeseries svg.chart.timeseries > g.indicator > line.vertical"),
      indicatorBoard = select("div.timeseries svg.chart.timeseries > g.indicator > rect.board"),
      zoomBase = select("div.timeseries svg.chart.timeseries > .zoombase");
    
    //Get the chart dimensions
    let {width, height} = select("div.timeseries svg.chart.timeseries").node().getBoundingClientRect();
    
    chart.width = width;
    
    chart.height = height;
    
    chart.vertScale.range([chart.height, 0])
    
    vertAxisGraph.call(chart.vertAxis);
    horzAxisGraph.call(chart.horzAxis);
   
    chart.chartZoom
    .translateExtent([[0, 0], [Infinity, chart.height]])//Limit the zoom translation
    .scaleExtent([1, 8]) //Limit zoom scaling
    .on("zoom", function(){
      let transform = event.transform;
      
      let newHorzScale = transform.rescaleX(chart.horzLinearScale);
      chart.horzAxis.scale(newHorzScale);
      
      let newVertScale = transform.rescaleY(chart.vertScale);
      chart.vertAxis.scale(newVertScale);
      
      
      //indicatorBoard.transition().duration(300).attr("transform", transform);
      //vertIndicator.transition().duration(300).attr("transform", `translate(${-transform.x}, 0)`);
      graphContainer.transition().duration(300).attr("transform", transform);
      
      vertAxisGraph.transition().duration(300).call(chart.vertAxis);
      horzAxisGraph.transition().duration(300).call(chart.horzAxis);
    })
    
    zoomBase
    .call(chart.chartZoom.transform, zoomIdentity.translate((chart.width - chart.horzDist), 0))
    .call(chart.chartZoom)
    .on("dblclick.zoom", null) //Prevent zoom on double click
    .on("mousemove", function(){
      let [x, y] = mouse(this);
    
      horzIndicator.attr("y1", y).attr("y2", y);
      vertAxisPointer.attr("transform", `translate(0, ${y-10})`).select("text").text(numberFormat(chart.vertScale.invert(y)));
      vertIndicator.attr("x1", x).attr("x2", x);
      horzAxisPointer.attr("transform", `translate(${x-50}, 0)`).select("text").text("-");
    })
  }
  
  candlesticks(){
    let chart = this;
    
    let graphContainer = select("div.timeseries svg.chart.timeseries > g.graph-container");
    
    graphContainer.selectAll(".graph").remove();
  
    graphContainer
    .selectAll("g.candlestick.graph")
    .data(chart.dataset)
    .join("g")
    .classed("candlestick graph", true)
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
    .append("title")
    .text((d, i)=>{
      return `Trade Date: ${d.date.toDateString()}.\nOpen: ${numberFormat(d.open)}.\nClose: ${numberFormat(d.close)}.\nHigh: ${numberFormat(d.high)}.\nLow: ${numberFormat(d.low)}`;
    })
    
    graphContainer.call(chart.show);
  }
  
  lineChart(){
    let chart = this;
    
    let graphContainer = select("div.timeseries svg.chart.timeseries > g.graph-container");
    
    graphContainer.selectAll(".graph").remove();
    
    let lineGraph = line().x((d)=>chart.horzLinearScale(d.date)).y((d)=>chart.vertScale(d.close)).curve(curveLinear);
    
    let areaGraph = area().x((d)=>chart.horzLinearScale(d.date)).y0(()=>chart.vertScale(0)).y1((d)=>chart.vertScale(d.close)).curve(curveLinear);
    
    graphContainer
    .append("path")
    .classed("line graph", true)
    .datum(chart.dataset)
    .attr("d", lineGraph)
    
    graphContainer
    .append("path")
    .classed("area graph", true)
    .datum(chart.dataset)
    .attr("d", areaGraph)
    .attr("pointer-events", "none")
    
    graphContainer.call(chart.show);
  }
  
  zoomChart(action){
    let zm = select("div.timeseries svg.chart.timeseries > .zoombase"), 
      chart = this;
    switch(action){
      case "ZOOM_IN":
        //Can't scale over 4
        if(chart.currentZoomLevel < 8){
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