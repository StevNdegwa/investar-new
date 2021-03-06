import React from "react";
import {MdLanguage, MdExpandMore, MdExpandLess} from "react-icons/md";

import languages from "../../data/languages/options.json";

import {Wrapper, Ul} from "./styles";

const Languages = React.memo(({setUserLanguage, currentLanguage})=>{
  const [open, setOpen] = React.useState(false);
  
  function closeMenu(){
    setOpen(false);
  }
  
  React.useEffect(()=>{
    document.body.addEventListener("click", closeMenu);
    return function cleanup(){
      document.body.removeEventListener("click", closeMenu);
    }
  })
  
  return (
    <Wrapper id="languages" onClick={()=>setOpen((o)=>!o)}>
      <div>
        <div className="icon">
          <MdLanguage/>
        </div>
        <div className="label">{currentLanguage.name}</div>
        <div className="icon">
          {open ?  <MdExpandLess/> : <MdExpandMore/>}
        </div>
      </div>
      <Ul show={open} className="level-400">
        {languages.map((l)=>{
          return (<li key={l.key} onClick={()=>setUserLanguage(l)}>{l.name}</li>)
        })}
      </Ul>
    </Wrapper>
  )
});

export default Languages;