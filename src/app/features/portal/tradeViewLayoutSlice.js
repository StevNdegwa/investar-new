import {createSlice} from "@reduxjs/toolkit";

const tradeViewLayoutSlice = createSlice({
  name:"tradeViewLayout",
  initialState:"S",
  reducers:{
    setLayout(state, action){
      return action.payload.layout;
    }
  }
})

export default tradeViewLayoutSlice;