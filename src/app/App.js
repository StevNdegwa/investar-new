import React from "react";
import {IconContext} from "react-icons";

import Home from "./components/Home";
import Portal from "./components/Portal";
import getText from "./lib/getText";
import UserContext from "./UserContext";

export default function App(){
  const [language, setLanguage] = React.useState("English");
  const [page, setPage] = React.useState({home:true, app:false})
  const [user, setUser] = React.useState({})
  
  function changeLanguage(lang){
    if(lang !== language){
      setLanguage(lang);
    }
  }
  
  function changePage(page){
    setPage({home:false, app:false, [page]:true});
  }
  
  function openApplication(successful, user){
    if(successful){
      setUser(user);
      changePage("app");
    }
  }
  
  return (
  <IconContext.Provider value={{className:"ip-icons"}}>
  <UserContext.Provider value = {{language, changeLanguage, translate:(text)=>getText(language, text)}}>
    {page.home && <Home openApplication={openApplication}/>}
    {page.app && <Portal user={user}/>}
  </UserContext.Provider>
  </IconContext.Provider>)
}