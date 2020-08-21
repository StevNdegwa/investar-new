import {connect} from "react-redux";

import Trade from "../../components/Portal/Trade";
import stocksTimeseriesSlice from "../../features/portal/stocksTimeseriesSlice";
import loadStocksSearch from "../../features/portal/loadstockssearch";
import technicalIndicatorsListSlice from "../../features/portal/technicalIndicatorsListSlice";
import activeTradeItemSlice from "../../features/portal/activeTradeItemSlice";
import tradeViewLayoutSlice from "../../features/portal/tradeViewLayoutSlice";
import timeseriesChartTypeSlice from "../../features/portal/timeseriesChartTypeSlice";
import {daily, weekly, monthly} from "../../features/portal/loadstockstimeseries";

function mapStateToProps(state){
  return {
    stocksList: state.stocksList,
    stocksTimeseries: state.stocksTimeseries,
    technicalIndicatorsList: state.technicalIndicatorsList,
    activeItem: state.activeTradeItem,
    viewLayout: state.tradeViewLayout,
    timeseriesChartType: state.timeseriesChartType
  }
}

function mapDispatchToProps(dispatch){
  return {
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
    setActiveItem:(item)=>dispatch(activeTradeItemSlice.actions.setTradeItem({item})),
    setViewLayout:(layout)=>dispatch(tradeViewLayoutSlice.actions.setLayout({layout})),
    setTimeseriesChartType:(chartType)=>dispatch(timeseriesChartTypeSlice.actions.setChartType({chartType}))
  }
}

const TradeView = connect(mapStateToProps, mapDispatchToProps)(Trade);
export default TradeView;