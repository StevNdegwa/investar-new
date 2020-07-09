import {connect} from "react-redux";
import Home from "../../components/Home";
import languageSlice from "../../features/general/languageSlice";

function mapStateToProps(state){
  return {
    language:state.language
  }
}

function mapDispatchToProps(dispatch){
  return {
    setUserLanguage:(language)=>dispatch(languageSlice.actions.changeLanguage(language))
  }
}

const HomeView = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeView;