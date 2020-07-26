import {combineReducers} from "redux";

import languageSlice from "./general/languageSlice";
import stocksListSlice from "./portal/stocksListSlice";
import stocksTimeseriesSlice from "./portal/stocksTimeseriesSlice";

const reducer = combineReducers({
  language:languageSlice.reducer,
  stocksList: stocksListSlice.reducer,
  stocksTimeseries: stocksTimeseriesSlice.reducer
})

export default reducer;