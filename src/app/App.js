import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"; 
import {IconContext} from "react-icons";

import Home from "./components/Home";
import Root from "./components/Home/Root";
import PortalView from "./containers/PortalView";
import getText from "./lib/getText";
import UserContext from "./UserContext";

import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import reducer from "./features/reducer";

const reduxStore = configureStore({reducer})

export default function App(){
  const [user, setUser] = React.useState({})

  return (<Provider store={reduxStore}>
    <IconContext.Provider value={{className:"ip-icons"}}>
      <Router>
        <Switch>
          <Route path="/app">
            <PortalView user={user}/>
          </Route>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </IconContext.Provider>
  </Provider>)
}