import {combineReducers} from "redux";

import languageSlice from "./general/languageSlice";
import stocksListSlice from "./portal/stocksListSlice";

const reducer = combineReducers({
  language:languageSlice.reducer,
  stocksList: stocksListSlice.reducer
})

export default reducer;