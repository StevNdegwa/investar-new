import {connect} from "react-redux";

import Portal from "../../components/Portal";
import languageSlice from "../../features/general/languageSlice";
import stocksTimeseriesSlice from "../../features/portal/stocksTimeseriesSlice";
import loadStocksSearch from "../../features/portal/loadstockssearch";
import technicalIndicatorsListSlice from "../../features/portal/technicalIndicatorsListSlice";
import activeTradeItemSlice from "../../features/portal/activeTradeItemSlice";
import tradeViewLayoutSlice from "../../features/portal/tradeViewLayoutSlice";
import timeseriesChartTypeSlice from "../../features/portal/timeseriesChartTypeSlice";
import {daily, weekly, monthly} from "../../features/portal/loadstockstimeseries";

function mapStateToProps(state){
  return {
    language: state.language,
    stocksList: state.stocksList,
    stocksTimeseries: state.stocksTimeseries, 
    technicalIndicatorsList: state.technicalIndicatorsList,
    activeTradeItem: state.activeTradeItem,
    tradeViewLayout: state.tradeViewLayout,
    timeseriesChartType: state.timeseriesChartType
  }
}

function matchDispatchToProps(dispatch){
  return {
    setUserLanguage:(language)=>dispatch(languageSlice.actions.changeLanguage(language)),
    getStocksList:(search)=>dispatch(loadStocksSearch(search)),
    getStocksTimeseries: (duration, stockSymbol)=>{
      switch(duration){
        case "DAILY":
          return dispatch(daily(stockSymbol));
        case "WEEKLY":
          return dispatch(weekly(stockSymbol));
        case "MONTHLY":
          return dispatch(monthly(stockSymbol));
        default:
          return dispatch(daily(stockSymbol));
      }
    },
    clearStocksTimeseries:()=>dispatch(stocksTimeseriesSlice.actions.clearData()),
    updateTechnicalIndicatorOptions:(indicator, options)=>dispatch(technicalIndicatorsListSlice.actions.updateOptions({indicator, options})),
    setActiveTechnicalIndicators:(indicators)=>dispatch(technicalIndicatorsListSlice.actions.setActive({indicators})),
    setActiveTradeItem:(item)=>dispatch(activeTradeItemSlice.actions.setTradeItem({item})),
    setTradeViewLayout:(layout)=>dispatch(tradeViewLayoutSlice.actions.setLayout({layout})),
    setTimeseriesChartType:(chartType)=>dispatch(timeseriesChartTypeSlice.actions.setChartType({chartType}))
  }
}

const PortalView = connect(mapStateToProps, matchDispatchToProps)(Portal);
export default PortalView;