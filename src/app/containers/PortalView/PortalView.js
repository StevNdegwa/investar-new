import {connect} from "react-redux";

import Portal from "../../components/Portal";
import languageSlice from "../../features/general/languageSlice";
import loadStocksSearch from "../../features/portal/loadstockssearch";
import {daily, weekly, monthly} from "../../features/portal/loadstockstimeseries";

function mapStateToProps(state){
  return {
    language: state.language,
    stocksList: state.stocksList,
    stocksTimeseries: state.stocksTimeseries
  }
}

function matchDispatchToProps(dispatch){
  return {
    setUserLanguage:(language)=>dispatch(languageSlice.actions.changeLanguage(language)),
    getStocksList: (search)=>dispatch(loadStocksSearch(search)),
    getStocksTimeseries: (period, stockSymbol)=>{
      switch(period){
        case "DAILY":
          return dispatch(daily(stockSymbol));
        case "WEEKLY":
          return dispatch(weekly(stockSymbol));
        case "MONTHLY":
          return dispatch(monthly(stockSymbol));
        default:
          return dispatch(daily(stockSymbol));
      }
    }
  }
}

const PortalView = connect(mapStateToProps, matchDispatchToProps)(Portal);
export default PortalView;