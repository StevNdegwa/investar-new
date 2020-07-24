import React from "react";
import {CSSTransition} from "react-transition-group";
import {Wrapper} from "./styles";
import languages from "../../data/languages/options.json";

const Languages = React.memo(({show, setUserLanguage, close, position})=>{
  document.body.addEventListener("click", close, true);
  
  React.useEffect(()=>{
    return function(){
      document.body.removeEventListener("click", close)
    }
  },[]);
  
  return (<CSSTransition timeout={200} in={show} classNames="fade">
    <Wrapper id="languages" show={show} position={position}>
      {languages.map((l)=>{
        return (<li key={l.key} onClick={()=>setUserLanguage(l)}>{l.name}</li>)
      })}
    </Wrapper>
  </CSSTransition>)
});

export default Languages;