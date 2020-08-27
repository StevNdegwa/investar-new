import React from "react";
import {CSSTransition} from "react-transition-group";

import "./styles.scss";

import Timeseries from "./Timeseries";
import Volume from "./Volume";
import TradeContext from  "../TradeContext";

import {Wrapper, Spinner, Section, ErrorInfo,Connecting} from "./styles";

export default function Chart({stocksTimeseries, getStocksTimeseries}){
  const [dataset, setDataset] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState({error:false, message:"No Error"})
  
  let tradeContext = React.useContext(TradeContext);
  
  React.useEffect(()=>{
    handleDataLoad();
    /* return function cleanup(){
      setDataset([])
    } */
  }, [tradeContext.duration, tradeContext.activeItem.item]);
  
  let loadDataWorker = React.useMemo(()=>{
    let worker = new Worker("/assets/workers/alphavantage/stocktimeseries.js");

    worker.addEventListener("message", function(e){
      let data = JSON.parse(e.data);
      
      if(data.error){
        setError({error:true, message:"Connection Error"});
      }else{
        data = data.map((d)=>{    
          return {...d, date: new Date(d.date)};
        })
        setDataset(data);
      }
      setLoading(false);
    })
    
    worker.addEventListener("error", function(e){
      setLoading(false);
      
      setError({error:true, message:"Connection Error"});
    })
    
    return worker;
  }, []);
  
  function handleDataLoad(){
    setLoading(true);
    setError({error:false, message:"No Error"});
    
    if(window.Worker){
      let config = {
        symbol: tradeContext.activeItem.item.symbol, 
        duration: tradeContext.duration, 
        key: "G2Q7JQRAG9H90QQY"
      };
      
      loadDataWorker.postMessage(JSON.stringify(config));
    }else{
      loadData();
    }
  }
  
  
  async function loadData(){
    setLoading(true);
    setError({error:false, message:"No Error"});
    
    try{
      let data = await getStocksTimeseries(tradeContext.duration, tradeContext.activeItem.item.symbol);
      
      data = data.map((d)=>{
        return {...d, date: new Date(d.date)}
      })
      
      setDataset(data);
      setLoading(false);
    }catch(error){
      setLoading(false);
      setError({error:true, message:"Application error"})
    }
  }
  
  if(error.error){
    return (<Wrapper>
      <ErrorInfo>
        <div>
          <div className="message">{error.message}</div>
          <div className="action"><button onClick={()=>handleDataLoad()}>Reload</button></div>
        </div>
      </ErrorInfo>
    </Wrapper>)
  }
  
  switch(tradeContext.layout.active){
    case "S_V":
      return (
        <Wrapper>
          <Connecting className="level-300" is_loading={loading}>
            <Spinner/><div>Connecting...</div>
          </Connecting>
          <Section height="70%">
            <Timeseries 
              layout = "S_V" 
              dataset = {dataset || []} 
              item = {tradeContext.activeItem.item}
              type = {tradeContext.timeseriesChartType.active}
              showLoading = {setLoading}
            />
          </Section>
          <CSSTransition timeout={100} classNames="slide-up" in={true}>
            <Section height="30%" dataset={dataset || []}>
              <Volume dataset={dataset || []}/>
            </Section>
          </CSSTransition>
        </Wrapper>
      );
    case "S":
      return (
        <Wrapper>
          <Connecting className="level-300" is_loading={loading}>
            <Spinner/><div>Connecting...</div>
          </Connecting>
          <Section>
            <Timeseries 
              layout = "S" 
              dataset = {dataset || []}
              item = {tradeContext.activeItem.item}
              type = {tradeContext.timeseriesChartType.active}
              showLoading = {setLoading}
            />
          </Section>
        </Wrapper>
      );
    default:
      return (
        <Wrapper>
          <Connecting className="level-300" is_loading={loading}>
            <Spinner/><div>Connecting...</div>
          </Connecting>
          <Section>
            <Timeseries 
              layout = "S" 
              dataset = {dataset || []}
              item = {tradeContext.activeItem.item}
              type = {tradeContext.timeseriesChartType.active}
              showLoading = {setLoading}
            />
          </Section>
        </Wrapper>
      );
  }
}