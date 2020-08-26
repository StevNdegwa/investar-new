import React from "react";
import PropTypes from "prop-types";
import {CSSTransition} from "react-transition-group";
import {MdClear, MdSettings, MdChevronRight} from "react-icons/md";
import {FaCheckSquare} from "react-icons/fa";

import SMA from "./SMA";
import EMA from "./EMA";
import WMA from "./WMA";
import {Wrapper, Header, Main, BreadCrumbs, Indicator, Controls} from "./styles";

export default function SetTechnicalIndicators({show, indicatorsList, updateOptions, setActive, closeDialog}){
  const [levels, setLevel] = React.useReducer(levelsReducer, ["Technical indicators"]);
  const [indicators, setIndicators] = React.useReducer(indicatorsReducer, [], function(){
    return indicatorsList.filter((i)=>i.active).map((i)=>i.sf);
  });
  
  function handleIndicatorClick(evt, indicator){
    if(evt.target.checked){
      setIndicators({type:"ADD", indicator});
    }else{
      setIndicators({type:"REMOVE", indicator});
    }
  }
  
  function handleSaveOptions(indicator, options){
    updateOptions(indicator, options);
    setLevel({type:"UP"});
  }
  
  function handleSaveIndicators(){
    setActive(indicators);
    closeDialog();
  }
  
  function main(){
    switch(levels[levels.length - 1]){
      case "SMA":
        return (<SMA 
          currentOptions = {indicatorsList.find((i)=>(i.sf === "SMA")).options} 
          back = {()=>setLevel({type:"UP"})} 
          saveOptions = {(options)=>handleSaveOptions("SMA", options)}
          closeDialog = {closeDialog}
          />);
      case "EMA":
        return (<EMA 
          currentOptions = {indicatorsList.find((i)=>(i.sf === "EMA")).options} 
          back = {()=>setLevel({type:"UP"})} 
          saveOptions = {(options)=>handleSaveOptions("EMA", options)}
          closeDialog = {closeDialog}
          />);
      case "WMA":
        return (<WMA 
          currentOptions = {indicatorsList.find((i)=>(i.sf === "WMA")).options} 
          back = {()=>setLevel({type:"UP"})} 
          saveOptions = {(options)=>handleSaveOptions("WMA", options)}
          closeDialog = {closeDialog}
        />);
      default:
        return (<Main onSubmit={(evt)=>{evt.preventDefault()}}>
          {indicatorsList.map((indicator)=>{
            return (
              <Indicator key={indicator.sf}>
                <label>
                  <input type="checkbox" checked={indicator.options.active} readOnly/>
                  <span className="check"><FaCheckSquare/></span>
                  <span className="label">{indicator.sf}&nbsp;({indicator.lf})</span>
                </label>
                <div className="settings" onClick={()=>setLevel({type:"DOWN", to:indicator.sf})}><MdSettings/></div>
              </Indicator>
            )
          })}
          <Controls>
            <div></div>
            <div>
              <button onClick={()=>closeDialog()}>Cancel</button>
            </div>
          </Controls>
        </Main>)
    }
  }
  
  return (
    <CSSTransition classNames="pop" in={show} timeout={100}>
      <Wrapper>
        <Header>
          <div></div>
          <div className="icon" onClick={()=>closeDialog()}>
            <MdClear/>
          </div>
        </Header>
        <BreadCrumbs>
          {levels.map((l)=>{
            return (<div className="level" key={l}>
                <span className="icon"><MdChevronRight/></span>
                <span className="label" onClick={()=>setLevel({type:"TO", to:l})}>{l}</span>
              </div>)
            })
          }
        </BreadCrumbs>
        {main()}
      </Wrapper>
    </CSSTransition>
  )
}

SetTechnicalIndicators.propTypes = {
indicatorsList:PropTypes.array.isRequired,
updateOptions:PropTypes.func.isRequired,
setActive:PropTypes.func.isRequired,
closeDialog:PropTypes.func.isRequired  
}

function levelsReducer(state, action){
  switch(action.type){
    case "UP":
      state.pop();
      return Array(...state);
    case "DOWN":
      state.push(action.to);
      return Array(...(new Set(state))); //use a set to clear duplicates
    case "TO":
      let idx = state.findIndex((s)=>(s === action.to)) + 1;
      state.splice(idx);
      return Array(...state);
    default:
      return state;
  }
}

function indicatorsReducer(state, action){
  switch(action.type){
    case "ADD":
      state.push(action.indicator);
      return Array(...state);;
    case "REMOVE":
      return state.filter((s)=>s !== action.indicator);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}