import React from "react";
import PropTypes from "prop-types";
import {MdMenu, MdClear, MdFullscreen, MdFullscreenExit} from "react-icons/md";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import './styles.scss';
import logo from "./images/logo.png";

import Sidenav from "./Sidenav";
import Languages from "../Languages";
import DialogContainer from "./DialogContainer";
import ConfirmExit from "./ConfirmExit";
import ErrorBoundary from "./ErrorBoundary";
import Trade from "./Trade";
import Help from "./Help";
import Analytics from "./Analytics";
import Finances from "./Finances";
import Sidebar from "./Sidebar";
import Settings from "./Settings";

import UserContext from "../../UserContext";

export default function Portal(props){
  const [logOut, setLogOut] = React.useState({confirmed:false, dialog:false});
  const [sidebar, setSidebar] = React.useState(false);
  const [settingsDialog, setSettingsDialog] = React.useState(false);
  const [fullscreen, setFullscreen] = React.useState(false);
  
  let userContext = React.useContext(UserContext);
  
  const enterFullscreen = React.useCallback(()=>{
    let root = document.getElementById("root");
    
    let requestFullscreen = root.requestFullscreen || root.mozRequestFullScreen || root.webkitRequestFullscreen || root.msRequestFullscreen;
    
    let exitFullscreen = document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.msExitFullscreen;
    
    let fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    
    if(!fullscreenElement){
      
      requestFullscreen.call(root);
      
      setFullscreen(true);
      
    }else{
      
      exitFullscreen.call(document);
      
      setFullscreen(false);
      
    }
    
  },[]);
  
  if(logOut.confirmed){
    return <Redirect to="/"/>
  }
  
  function getTranslation(text){
    return userContext.translate(props.language.key, text)
  }
  
  return (<div id="portal">
    <div id="header" className="level-100">
      <div className="rSide">
        <div id="logo"><img src={logo} alt="Log"/></div>
        <Languages setUserLanguage={props.setUserLanguage} currentLanguage={props.language}/>
        <div className="icon control fullscreen" onClick={()=>enterFullscreen()} title="Fullscreen">
          {fullscreen ? <MdFullscreenExit/> : <MdFullscreen/>}
        </div>
      </div>
      <div className="lSide">
        {props.demo && <button className="o-r-a">Open Real Account</button>}
        {<div className="icon sidebar control" onClick={()=>setSidebar((s)=>!s)}>
          {sidebar ? <MdClear/> : <MdMenu/>}
        </div>}
      </div>
    </div>
    <div id="main">
      <Router basename="/app">
        <Sidenav 
          logOut={()=>setLogOut({confirmed:false, dialog:true})} 
          language={props.language}
          openSettingsDialog={()=>setSettingsDialog(true)}
        />
        <div id="space">
          <DialogContainer show={logOut.dialog} close={()=>setLogOut({confirmed:false, dialog:false})}>
            <ConfirmExit close={setLogOut} show={logOut.dialog}/>
          </DialogContainer>
          <DialogContainer show={settingsDialog} close={()=>setSettingsDialog(false)}>
            <Settings/>
          </DialogContainer>
          <Switch>
            <Route path="/billing">
              <Finances demo={props.demo}/>
            </Route>
            <Route path="/user">
              <div>User Profile</div>
            </Route>
            <Route path="/platforms">
              <div>Platforms</div>
            </Route>
            <Route path="/analytics">
              <Analytics/>
            </Route>
            <Route path="/education">
              <div>Education</div>
            </Route>
            <Route path="/info">
              <Help/>
            </Route>
            <Route path="/" exact>
              <ErrorBoundary>
                <Trade 
                  stocksList={props.stocksList} 
                  getStocksList={props.getStocksList} 
                  stocksTimeseries={props.stocksTimeseries} 
                  getStocksTimeseries={props.getStocksTimeseries}
                  clearStocksTimeseries={props.clearStocksTimeseries}
                  technicalIndicatorsList={props.technicalIndicatorsList}
                  updateTechnicalIndicatorOptions={props.updateTechnicalIndicatorOptions}
                  setActiveTechnicalIndicators={props.setActiveTechnicalIndicators}
                  activeItem={props.activeTradeItem}
                  setActiveItem={props.setActiveTradeItem}
                  viewLayout={props.tradeViewLayout}
                  setViewLayout={props.setTradeViewLayout}
                  />
              </ErrorBoundary>
            </Route>
          </Switch>
        </div>
        <Sidebar open={sidebar}/>
      </Router>
    </div>
  </div>)
}

Portal.propTypes = {
  language:PropTypes.object.isRequired,
  setUserLanguage:PropTypes.func.isRequired,
  stocksList: PropTypes.object.isRequired,
  getStocksList: PropTypes.func.isRequired,
  demo: PropTypes.bool,
  stocksTimeseries: PropTypes.object.isRequired,
  getStocksTimeseries: PropTypes.func.isRequired,
  clearStocksTimeseries: PropTypes.func.isRequired,
  technicalIndicatorsList:PropTypes.array.isRequired,
  updateTechnicalIndicatorOptions:PropTypes.func.isRequired,
  setActiveTechnicalIndicators:PropTypes.func.isRequired,
  activeTradeItem:PropTypes.object.isRequired,
  setActiveTradeItem:PropTypes.func.isRequired,
  tradeViewLayout:PropTypes.string.isRequired,
  setTradeViewLayout:PropTypes.func.isRequired
}
