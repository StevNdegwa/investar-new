import {createSlice} from "@reduxjs/toolkit";

const activeTradeItemSlice = createSlice({
  name:"activeTradeItem",
  initialState:{name:"Agilent Technologies Inc.", symbol:"A"},
  reducers:{
    setTradeItem(state, action){
      return action.payload.item;
    }
  }
})

export default activeTradeItemSlice;