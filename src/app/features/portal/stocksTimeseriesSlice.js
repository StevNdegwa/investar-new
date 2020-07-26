import {createSlice} from  "@reduxjs/toolkit";

const stocksTimeseriesSlice  =  createSlice({
  name:"stocksTimeseries",
  initialState:{daily:[], weekly:[], monthly:[]},
  reducers:{
    setData(state, action){
      
      state[action.payload.period] = action.payload.data || [];
      
      return state;
    }
  }
})

export default stocksTimeseriesSlice;