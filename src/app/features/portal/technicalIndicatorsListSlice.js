import {createSlice} from "@reduxjs/toolkit";

const technicalIndicatorsListSlice = createSlice({
  name:"technicalIndicatorsList",
  initialState:[
    {sf:"SMA", lf:"Simple Moving Average", active:false, options:{interval:"daily", seriesType:"close", timePeriod:200}},
    {sf:"EMA", lf:"Exponential  Moving Average", active:false, options:{interval:"daily", seriesType:"close", timePeriod:200}},
    {sf:"WMA", lf:"Weighted  Moving Average", active:false, options:{interval:"daily", seriesType:"close", timePeriod:200}},
  ],
  reducers:{
    updateOptions(state, action){
      return state.map((indicator)=>{
        if(indicator.sf === action.payload.indicator){
          return {...indicator, options:action.payload.options}
        }else{
          return indicator;
        }
      })
    },
    setActive(state, action){
      return state.map((indicator)=>{
        if(action.payload.indicators.includes(indicator.sf)){
          return {...indicator, active:true};
        }else{
          return {...indicator, active:false};
        }
      })
    }
  }
})

export default technicalIndicatorsListSlice;