import {createSlice} from "@reduxjs/toolkit";

const stocksListSlice = createSlice({
  name:"stocksList",
  initialState:{},
  reducers:{
    addList:{
      reducer(state, action){
        state[action.payload.key] = action.payload.data;
        return state;
      },
      prepare(payload){
        
        let data = payload.data.map((d)=>{
          return {name:d.name, symbol:d.symbol}
        })
        
        //The key is the search varibles
        //This implementation will reduce number of calls to the server
        return {payload:{data, key: payload.key}};
      }
    }
  }
});

export default stocksListSlice;