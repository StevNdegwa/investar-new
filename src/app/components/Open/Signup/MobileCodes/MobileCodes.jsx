import React from "react";
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md";
import {Countries, Select, Control} from "./styles";

import countries from "../../../../data/countries-list.json";

const MobileCodes = React.memo(({input})=>{
  const [country, setCountry] = React.useState("254");
  const [show, showList] = React.useState(false);
  
  document.body.addEventListener("click", ()=>{
    showList(false);
  }, true)
  
  return (<>
    <div id="mobile">
      <Select>
        <div id="country_name">{`+${country}`}</div>
        <Control onClick={()=>showList((s)=>(s ? false : true))}>{show ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}</Control>
      </Select>
      {input}
    </div>
    <Countries show={show}>
      {countries.map((c)=>{
        return (<li onClick={()=>setCountry(c.callingCodes[0])}>{c.name} &nbsp;&nbsp;&nbsp; {`+${c.callingCodes[0]}`}</li>)
      })}
    </Countries>
  </>);
})

export default MobileCodes;