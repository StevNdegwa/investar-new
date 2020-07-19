import {connect} from "react-redux";

import Portal from "../../components/Portal";
import languageSlice from "../../features/general/languageSlice";
import loadStocksSearch from "../../features/portal/loadstockssearch";

function mapStateToProps(state){
  return {
    language: state.language,
    stocksList: state.stocksList
  }
}

function matchDispatchToProps(dispatch){
  return {
    setUserLanguage:(language)=>dispatch(languageSlice.actions.changeLanguage(language)),
    getStocksList: (search)=>dispatch(loadStocksSearch(search))
  }
}

const PortalView = connect(mapStateToProps, matchDispatchToProps)(Portal);
export default PortalView;