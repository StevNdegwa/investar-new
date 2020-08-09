import React from "react";
import {CSSTransition} from "react-transition-group";

import "./styles.scss";

import ChartLoader from "./ChartLoader.jsx";
import Timeseries from "./Timeseries";
import Volume from "./Volume";
import TradeContext from  "../TradeContext";

import {Wrapper, Spinner, Section, ErrorInfo} from "./styles";

export default function Chart({stocksTimeseries, getStocksTimeseries}){
  const [dataset, setDataset] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState({error:false, message:"No Error"})
  let tradeContext = React.useContext(TradeContext);
  
  React.useEffect(()=>{
    loadData()
  }, []);
  
  async function loadData(){
    setLoading(true);
    setError({error:false, message:"No Error"});
    try{
      
      let data = await getStocksTimeseries(tradeContext.duration, tradeContext.activeItem.item);
      
      data = data.map((d)=>{
        return {...d, date: new Date(d.date)}
      })
      
      setDataset(data);
      setLoading(false);
      
    }catch(error){
      setLoading(false);
      setError({error:true, message:"Application Error"})
    }
  }
  
  if(loading){
    return (<Wrapper>
      <Spinner><div></div></Spinner>
    </Wrapper>)
  }else if(error.error){
    return (<Wrapper>
      <ErrorInfo>
        <div>
          <div className="message">{error.message}</div>
          <div className="action"><button onClick={()=>loadData()}>Reload</button></div>
        </div>
      </ErrorInfo>
    </Wrapper>)
  }
  
  switch(tradeContext.layout.active){
    case "S_V":
      return (
        <CSSTransition timeout={200} classNames="fade" in={true}>
          <Wrapper>
            <Section height="70%">
              <Timeseries layout="S_V" dataset={dataset || []}/>
            </Section>
            <Section height="30%" dataset={dataset || []}>
              <Volume/>
            </Section>
          </Wrapper>
        </CSSTransition>
      );
    case "S":
      return (
        <CSSTransition timeout={200} classNames="fade" in={true}>
          <Wrapper>
            <Section>
              <Timeseries layout="S" dataset={dataset || []}/>
            </Section>
          </Wrapper>
        </CSSTransition>
      );
    default:
      return (
        <CSSTransition timeout={200} classNames="fade" in={true}>
          <Wrapper>
            <Section>
              <Timeseries layout="S" dataset={dataset || []}/>
            </Section>
          </Wrapper>
        </CSSTransition>
      );
  }
}