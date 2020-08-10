import {scaleLinear, scaleBand} from "d3-scale";
import {axisRight} from "d3-axis";
import {zoom, zoomIdentity} from "d3-zoom";
import {mouse, select, event} from "d3-selection";
import {max} from "d3-array";
import {format} from "d3-format";

export default function initChart(dataset){
  let bbox, //bounding box
    horzDist, //Full horizontal distance
    vertScale, //Vertical scale
    horzScale, //Horizontal scale
    vertAxis, //Vertical axis
    chartZoom, //Zoom behavior
    numFormat; //Number format function
  
  bbox = select("svg.chart.volume").node().getBBox();
  horzDist = dataset.length * 5;
  
  //Scale functions
  vertScale = scaleLinear()
  .domain([0, max(dataset, (d)=>d.volume)])
  .range([bbox.height, 0]);
  horzScale = scaleBand(dataset.map((d)=>d.date).reverse(), [0, horzDist]).padding(0.1);
  
  numFormat = format(" ,");
  
  //Axis functions
  vertAxis = axisRight(vertScale);
  
  //Zoom behavior
  chartZoom = zoom().scaleExtent([1, 1])
  .on("zoom", function(){
    let transform = event.transform;
    transform.y = 1;
    select("div.volume svg.chart.volume > g.graph").attr("transform", transform)
  })
  
  select("div.volume svg.chart.volume > g.graph")
  .selectAll("rect.bar")
  .data(dataset)
  .join("rect")
  .classed("bar", true)
  .attr("width", horzScale.bandwidth())
  .attr("height", (d)=>(bbox.height - vertScale(d.volume)))
  .attr("x", (d)=>horzScale(d.date))
  .attr("y", (d)=>vertScale(d.volume))
  .append("title")
  .text((d, i)=>{
    return `Trade Date: ${d.date.toDateString()}\nTrade Volume: ${numFormat(d.volume)}`
  })
  
  select("div.volume svg.axis.y > g").call(vertAxis);
  
  select("div.volume svg.chart.volume > rect.zoombase")
  .call(chartZoom.transform, zoomIdentity.translate((bbox.width - horzDist), 0))
  .call(chartZoom)
  .on("mousemove", function(){
    let [x, y] = mouse(this);
    select("svg.chart.volume line.indicator.x").attr("y1", y).attr("y2", y);
    select("svg.chart.volume line.indicator.y").attr("x1", x).attr("x2", x);
  })
}