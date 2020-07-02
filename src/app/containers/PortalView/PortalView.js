import {connect} from "react-redux";

import Portal from "../../components/Portal";
import languageSlice from "../../features/general/languageSlice";

function mapStateToProps(state){
  return {
    language:state.language
  }
}

function matchDispatchToProps(dispatch){
  return {
    changeLanguage:(language)=>dispatch(languageSlice.actions.changeLanguage(language))
  }
}

const PortalView = connect(mapStateToProps, matchDispatchToProps)(Portal);
export default PortalView;