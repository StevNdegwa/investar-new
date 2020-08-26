import React from 'react';
import {render} from 'react-dom';
import "./base.scss";
import "./layout.scss";

import App from "./app/App";

render(<App/>, document.getElementById("root"));

(function(){
  if("serviceWorker" in navigator){
    window.addEventListener("load", function(){
      navigator.serviceWorker.register("./sw.js").then(function(registration){
        //Registration was successful
        //console.log("Service worker regstration was successful with scope: ", registration.scope)
      }, function(err){
        //console.log("Service worker registration Error: ", err);
      })
    })
  }
})();