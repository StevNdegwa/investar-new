import React from "react";
import {CSSTransition} from "react-transition-group";
import {MdChevronRight, MdChevronLeft} from "react-icons/md";
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from "react-icons/ai";
import {line, curveMonotoneX} from "d3-shape";
import {scalePoint, scaleLinear} from "d3-scale";
import {extent} from "d3-array";
import {select} from "d3-selection";
import {axisBottom} from "d3-axis";
import {format} from "d3-format";

import globalQuote from "../../../../../../lib/alphavantage/globalquote";
import {Wrapper, Ul, Chart} from './styles';

import TradeContext from "../../../TradeContext";

let numberFormat = format(" ,"),
  priceFormat = format("$,.2f");

export default function GlobalQuote(){
  const [showChart, setShowChart] = React.useState(false);
  const [quoteData, setQuoteData] = React.useState({open:0, high:0, low:0, price:0, volume:0, change:0, latestTradingDay:new Date().toDateString(), previousClose:0, percentChange:0});
  
  let tradeContext = React.useContext(TradeContext);
  
  let lineChart = React.useCallback((dataset)=>{
    let horzScale = scalePoint(dataset.map((d)=>d.label), [15, 170]),
      vertScale = scaleLinear(extent(dataset, (d)=>d.value), [120, 10]);
      select("svg.gq-chart > g.graph > g.axis").call(axisBottom(horzScale)).attr("transform", "translate(0, 120)").select(".domain").remove();
      return line().x((d)=>horzScale(d.label)).y((d)=>vertScale(d.value)).curve(curveMonotoneX)(dataset);
  }, []);
  
  
  let loadQuoteData = React.useCallback(async ()=>{
    try{
      let quote = await globalQuote(tradeContext.activeItem.item.symbol);
      
      if(!quote){
        throw new Error("Empty dataset");
      }
      
      var {name, symbol, open, high, low, price, volume, change, "latest trading day":latestTradingDay, "previous close":previousClose, "change percent":percentChange} = quote;
      
      setQuoteData({open, high, low, price, volume, change, latestTradingDay:new Date(latestTradingDay).toDateString(), previousClose, percentChange});
      
    }catch(error){
      
      setQuoteData({open:0, high:0, low:0, price:0, volume:0, change:0, latestTradingDay:new Date().toDateString(), previousClose:0, percentChange:0});
      
    }
  }, [tradeContext.activeItem.item]);
  
  React.useEffect(()=>{
    loadQuoteData();
  }, [tradeContext.activeItem.item])
  
  return (<Wrapper>
    <CSSTransition timeout={100} in={!showChart} classNames="expand-down">
      <Ul is_showing={!showChart}>
        <li className="control" onClick={()=>setShowChart(true)}><AiOutlineDoubleRight/></li>
        <li>Date: {quoteData.latestTradingDay}</li>
        <li>Price: {priceFormat(quoteData.price)}</li>
        <li>Open: {priceFormat(quoteData.open)}</li>
        <li>High: {priceFormat(quoteData.high)}</li>
        <li>Low: {priceFormat(quoteData.low)}</li>
        <li>Volume: {numberFormat(quoteData.volume)}</li>
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