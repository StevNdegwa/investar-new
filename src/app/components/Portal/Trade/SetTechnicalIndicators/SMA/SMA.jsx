import React from "react";
import GetTechnicalIndicators from "../../../../../lib/alphavantage/gettechnicalindicators";

import Select from "../Select";
import {Wrapper, Main} from "./styles";
import {Controls}  from "../styles";

let intervals = [
  {label:"Daily", value:"daily"},
  {label:"Weekly", value:"weekly"},
  {label:"Monthly", value:"monthly"}
];

let seriesTypes = [
  {label:"Close", value:"close"},
  {label:"Open", value:"open"},
  {label:"High", value:"high"},
  {label:"Low", value:"low"}
];

let timePeriods = [
  {label:"10 points", value:10},
  {label:"30 points", value:30},
  {label:"60 points", value:60},
  {label:"100 points", value:100},
  {label:"200 points", value:200}
]

let activeStatus = [
  {label:"On", value:true},
  {label:"Off", value:false}
]

export default function SMA({back, saveOptions, currentOptions, closeDialog}){
  const [interval, setInterval] = React.useState(()=>intervals.find((i)=>i.value === currentOptions.interval))
  const [seriesType, setSeriesType] = React.useState(()=>seriesTypes.find((i)=>i.value === currentOptions.seriesType))
  const [timePeriod, setTimePeriod] = React.useState(()=>timePeriods.find((i)=>i.value === currentOptions.timePeriod));
  const [active, setActive] = React.useState(()=>activeStatus.find((i)=>i.value === currentOptions.active));
  
  function applySelectedOptions(){
    saveOptions({active:active.value, interval:interval.value, seriesType:seriesType.value, timePeriod:timePeriod.value});
    closeDialog();
  }
  
  return (<Wrapper>
      <Select
        label = "Active"
        info = "Select whether the indicator should be shown."
        options = {activeStatus}
        currentOption = {active}
        selectOption = {setActive}
      />
      <Select
        label = "Interval"
        info = "Time interval between two consecutive data points in the time series."
        options = {intervals}
        currentOption = {interval}
        selectOption  = {setInterval}
      />
      <Select
        label = "Series type"
        info = "The desired price type in the time series."
        options = {seriesTypes}
        currentOption = {seriesType}
        selectOption  = {setSeriesType}
      />
      <Select
        label = "Time period"
        info = "Number of data points used to calculate each moving average value."
        options = {timePeriods}
        currentOption = {timePeriod}
        selectOption  = {setTimePeriod}
      />
      <Controls>
        <div></div>
        <div>
          <button onClick={()=>back()}>Back</button>
          <button onClick={()=>applySelectedOptions()}>Apply Changes</button>
        </div>
      </Controls>
  </Wrapper>)
}