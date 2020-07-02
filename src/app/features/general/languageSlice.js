import {createSlice} from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name:"language",
  initialState:{key:"en", name:"English"},
  reducers:{
    changeLanguage(state, action){
      return action.payload;
    }
  }
})

export default languageSlice;