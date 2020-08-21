import {createSlice} from "@reduxjs/toolkit";

const timeseriesChartTypeSlice = createSlice({
  name:"timeseriesChartType",
  initialState:"CS",
  reducers:{
    setChartType(state, action){
      return action.payload.chartType;
    }
  }
})

export default timeseriesChartTypeSlice;