import {createSlice} from  "@reduxjs/toolkit";

const stocksTimeseriesSlice  =  createSlice({
  name:"stocksTimeseries",
  initialState:{DAILY:[], WEEKLY:[], MONTHLY:[]},
  reducers:{
    setData(state, action){
      state[action.payload.duration] = action.payload.data || [];
      return state;
    },
    clearData(state, action){
      return {DAILY:[], WEEKLY:[], MONTHLY:[]};
    }
  }
})

export default stocksTimeseriesSlice;