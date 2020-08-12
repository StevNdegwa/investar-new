import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"; 
import {IconContext} from "react-icons";

import PortalLoader from "./components/PortalLoader";
import HomeView from "./containers/HomeView";
import UserContext from "./UserContext";

import getText from "./lib/language/getText";

import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import reducer from "./features/reducer";

const reduxStore = configureStore({reducer});

const Portal = React.lazy(()=>import("./containers/PortalView"));

export default function App(){
  return (<Provider store={reduxStore}>
    <UserContext.Provider value={{translate:(language, text)=>getText(language, text)}}>
    <IconContext.Provider value={{className:"ip-icons"}}>
      <Router>
        <Switch>
          <Route path="/app">
            {(renderParams, t)=>{
              let queries = new URLSearchParams(renderParams.location.search);
              return (<React.Suspense fallback={<PortalLoader/>}>
                <Portal  demo={Boolean(queries.get("demo") === "true")}/>
              </React.Suspense>)
            }}
          </Route>
          <Route path="/">
            <HomeView/>
          </Route>
        </Switch>
      </Router>
    </IconContext.Provider>
    </UserContext.Provider>
  </Provider>)
}