import {createSlice} from "@reduxjs/toolkit";

const stocksListSlice = createSlice({
  name:"stocksList",
  initialState:{},
  reducers:{
    addList(state, action){
      state[action.key] = action.data;
    }
  }
});

export default stocksListSlice;