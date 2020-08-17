import React from "react";
import GetTechnicalIndicators from "../../../../../lib/alphavantage/gettechnicalindicators";

import Select from "../Select";
import {Loader} from "../styles";
import {Wrapper, Controls, Main, Table} from "./styles";

export default function SMA({selectedItem}){
  const [interval, setInterval] = React.useState({label:"Daily", value:"daily"})
  const [seriesType, setSeriesType] = React.useState({label:"Close", value:"close"})
  const [timePeriod, setTimePeriod] = React.useState({label:"200 points", value:200});
  const [show, setShow] = React.useState({loading:true});
  const [dataset, setDataset] = React.useState([]);
  
  React.useEffect(()=>{
    loadData();
  }, [interval, seriesType, timePeriod, selectedItem]);
  
  async function loadData(){
    try{
      setShow((state)=>({...state, loading:true}));
      
      let data = await GetTechnicalIndicators.sma(selectedItem.symbol, interval.value, timePeriod.value, seriesType.value);
      
      setDataset(data);
      
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
      {show.loading ? 
        <Loader/>
        :
        <Table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Date</th>
              <th>SMA</th>
            </tr>
          </thead>
          <tbody>
            {
              dataset.map((d, idx)=>{
                return (<tr key={d.date}>
                  <td className="index">{idx+1}</td>
                  <td className="date">{new Date(d.date).toDateString()}</td>
                  <td>{d.value}</td>
                </tr>)
              })
            }
          </tbody>
        </Table>
      }
    </Main>
  </Wrapper>)
}