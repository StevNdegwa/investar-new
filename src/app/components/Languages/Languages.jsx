import React from "react";
import {MdLanguage, MdExpandMore, MdExpandLess} from "react-icons/md"
import {CSSTransition} from "react-transition-group";

import languages from "../../data/languages/options.json";

import {Wrapper, Ul} from "./styles";

const Languages = React.memo(({setUserLanguage, currentLanguage})=>{
  const [open, setOpen] = React.useState(false);
  
  return (
    <Wrapper id="languages" onClick={()=>setOpen((o)=>!o)} className="level-400">
      <div>
        <div className="icon">
          <MdLanguage/>
        </div>
        <div className="label">{currentLanguage.name}</div>
        <div className="icon">
          {open ?  <MdExpandLess/> : <MdExpandMore/>}
        </div>
      </div>
      <Ul show={open}>
        {languages.map((l)=>{
          return (<li key={l.key} onClick={()=>setUserLanguage(l)}>{l.name}</li>)
        })}
      </Ul>
      
    </Wrapper>
  )
});

export default Languages;