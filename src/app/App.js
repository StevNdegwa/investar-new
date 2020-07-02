import React from "react";
import {IconContext} from "react-icons";

import Home from "./components/Home";
import PortalView from "./containers/PortalView";
import getText from "./lib/getText";
import UserContext from "./UserContext";

import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import reducer from "./features/reducer";

const reduxStore = configureStore({reducer})

export default function App(){
  const [page, setPage] = React.useState({home:true, app:false})
  const [user, setUser] = React.useState({})
  
  function changePage(page){
    setPage({home:false, app:false, [page]:true});
  }
  
  function openApplication(successful, user){
    if(successful){
      setUser(user);
      changePage("app");
    }
  }
  
  return (<Provider store={reduxStore}>
    <IconContext.Provider value={{className:"ip-icons"}}>
      {page.home && <Home openApplication={openApplication}/>}
      {page.app && <PortalView user={user} logOut={()=>changePage("home")}/>}
    </IconContext.Provider>
  </Provider>)
}