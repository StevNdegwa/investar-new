import React from "react";
import {MdInfoOutline} from "react-icons/md";
import GetTechnicalIndicators from "../../../../../lib/alphavantage/gettechnicalindicators";

import Select from "../Select";
import {Loader} from "../styles";
import {Wrapper, Controls, Main, Table} from "./styles";

export default function SMA({selectedItem}){
  const [interval, setInterval] = React.useState({label:"Weekly", value:"weekly"})
  const [seriesType, setSeriesType] = React.useState({label:"Close", value:"close"})
  const [timePeriod, setTimePeriod] = React.useState({label:"30 points", value:30});
  const [show, setShow] = React.useState({loading:true});
  const [dataset, setDataset] = React.useState([]);
  
  React.useEffect(()=>{
    loadData();
  }, [interval, seriesType, timePeriod, selectedItem]);
  
  async function loadData(){
    try{
      setShow((state)=>({...state, loading:true}));
      
      let data = await GetTechnicalIndicators.sma(selectedItem.symbol, interval.value, timePeriod.value, seriesType.value);
      
      setShow((state)=>({...state, loading:false}));
    }catch(error){
      setShow((state)=>({...state, loading:false}));
    }
  }
  
  function handleControlsSubmit(evt){
    evt.preventDefault();
  }
  
  
  return (<Wrapper>
    <Controls onSubmit={(evt)=>handleControlsSubmit(evt)}>
      <Select
        label = "Interval"
        info = "Time interval between two consecutive data points in the time series."
        options = {[
          {label:"1 Min", value:"1min"},
          {label:"5 Min", value:"5min"},
          {label:"15 Min", value:"15min"},
          {label:"30 Min", value:"30min"},
          {label:"60 Min", value:"60min"},
          {label:"Daily", value:"daily"},
          {label:"Weekly", value:"weekly"},
          {label:"Monthly", value:"monthly"}
        ]}
        currentOption = {interval}
        selectOption  = {setInterval}
      />
      <Select
        label = "Series type"
        info = "The desired price type in the time series."
        options = {[
          {label:"Close", value:"close"},
          {label:"Open", value:"open"},
          {label:"High", value:"high"},
          {label:"Low", value:"low"}
        ]}
        currentOption = {seriesType}
        selectOption  = {setSeriesType}
      />
      <Select
        label = "Time period"
        info = "Number of data points used to calculate each moving average value."
        options = {[
          {label:"10 points", value:10},
          {label:"30 points", value:30},
          {label:"60 points", value:60},
          {label:"100 points", value:100},
          {label:"200 points", value:200}
        ]}
        currentOption = {timePeriod}
        selectOption  = {setTimePeriod}
      />
    </Controls>
    <Main>
      <Table>
        <tr>
          <th>Date</th>
          <th>SMA</th>
        </tr>
        <tr><td>{new Date("2020-08-14").toDateString()}</td><td>123.2440</td></tr>
      </Table>
    </Main>
  </Wrapper>)
}