import {combineReducers} from "redux";

import languageSlice from "./general/languageSlice";
import stocksListSlice from "./portal/stocksListSlice";
import stocksTimeseriesSlice from "./portal/stocksTimeseriesSlice";
import technicalIndicatorsListSlice from "./portal/technicalIndicatorsListSlice";
import activeTradeItemSlice from "./portal/activeTradeItemSlice";
import tradeViewLayoutSlice from "./portal/tradeViewLayoutSlice";
import timeseriesChartTypeSlice from "./portal/timeseriesChartTypeSlice";

const reducer = combineReducers({
  language:languageSlice.reducer,
  stocksList: stocksListSlice.reducer,
  stocksTimeseries: stocksTimeseriesSlice.reducer,
  technicalIndicatorsList: technicalIndicatorsListSlice.reducer,
  activeTradeItem: activeTradeItemSlice.reducer,
  tradeViewLayout: tradeViewLayoutSlice.reducer,
  timeseriesChartType: timeseriesChartTypeSlice.reducer
})

export default reducer;