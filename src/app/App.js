import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {IconContext} from "react-icons";
import Open from "./components/Open";
import Portal from "./components/Portal";
import getText from "./lib/getText";
import UserContext from "./UserContext";

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.state = {language:"English"}
  }
  
  changeLanguage(lang){
    const {language} = this.state;
    if(lang !== language){
      this.setState({language:lang});
    }
  }
  
  render(){
    const {language} = this.state;
    return (
    <IconContext.Provider value={{className:"ip-icons"}}>
    <Router>
      <Switch>
        <Route path="/app">
          <UserContext.Provider 
            value = {
              {
                language,
                changeLanguage:this.changeLanguage,
                translate:(text)=>getText(language, text),
                user:"Demo Account"
              }
            }>
            <Portal/>
          </UserContext.Provider>
        </Route>
        <Route path="/">
          <Open/>
        </Route>
      </Switch>
    </Router>
    </IconContext.Provider>)
  }
}