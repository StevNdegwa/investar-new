import {scaleLinear, scaleBand} from "d3-scale";
import {axisRight} from "d3-axis";
import {zoom, zoomIdentity} from "d3-zoom";
import {mouse, select, event} from "d3-selection";
import {max} from "d3-array";
import {format} from "d3-format";

const numFormat = format(" ,");

class InitChart{
  constructor(){
    this.horzDist = 0;
    this.vertScale = scaleLinear();
    this.horzScale = scaleBand().padding(0.1);;
    this.vertAxis = axisRight(this.vertScale);
    this.chartZoom = zoom();
    this.dataset = [];
    this.width = 0;
    this.height = 0;
  }
  
  get currentDataset(){
    return this.dataset;
  }
  
  set currentDataset(dataset){
    this.dataset = dataset;
  }
  
  draw(dataset){
    let chart = this,
      graphContainer = select("div.volume svg.chart.volume > g.graph-container"),
      zoomBase = select("div.volume svg.chart.volume > rect.zoombase"),
      horzIndicator = select("svg.chart.volume > g.indicator > line.horizontal"),
      vertIndicator = select("svg.chart.volume > g.indicator > line.vertical"),
      vertAxisGraph = select("div.volume svg.axis.y > g.graph");
    
    chart.dataset = dataset;
    
    //Get the chart dimensions
    let {width, height} = select("div.volume svg.chart.volume").node().getBoundingClientRect();
    
    chart.width = width;
    chart.height = height;
    
    chart.vertScale.domain([0, max(dataset, (d)=>d.volume)]).range([height, 0]);
    
    chart.horzDist = dataset.length * 5;
  
    chart.horzScale.domain(dataset.map((d)=>d.date).reverse()).range([0, chart.horzDist]);
  
    chart.chartZoom
      .scaleExtent([1, 1]) //Limit the  zoom scaling
      .translateExtent([[0, 0], [chart.horzDist, height]])//Limit the zoom translation
      .on("zoom", function(){
        let transform = event.transform;
        transform.y = 1;
        graphContainer.attr("transform", transform)
      })
    
    
    graphContainer
    .selectAll("rect.bar")
    .data(dataset)
    .join("rect")
    .classed("bar", true)
    .attr("width", chart.horzScale.bandwidth())
    .attr("height", (d)=>(height - chart.vertScale(d.volume)))
    .attr("x", (d)=>chart.horzScale(d.date))
    .attr("y", (d)=>chart.vertScale(d.volume))
    .append("title")
    .text((d, i)=>{
      return `Trade Date: ${d.date.toDateString()}\nTrade Volume: ${numFormat(d.volume)}`
    })
  
    vertAxisGraph.call(chart.vertAxis);
  
    zoomBase
    .call(chart.chartZoom.transform, zoomIdentity.translate((width - chart.horzDist), 0))
    .call(chart.chartZoom)
    .on("mousemove", function(){
      let [x, y] = mouse(this);
      horzIndicator.attr("y1", y).attr("y2", y);
      vertIndicator.attr("x1", x).attr("x2", x);
    })
  }
  
}

export default InitChart;