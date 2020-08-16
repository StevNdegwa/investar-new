import React from "react";
import PropTypes from "prop-types";
import {MdInfoOutline, MdExpandMore, MdExpandLess} from "react-icons/md";
import {Wrapper, Label, Active, Options, Option, Info} from "./styles";

const Select = React.memo(({options, label, info, currentOption, selectOption})=>{
  const [expanded, setExpanded] = React.useState(false);
  const [showInfo, setShowInfo] = React.useState(false);
  
  function handleOptionSelected(option){
    selectOption(option);
    setExpanded(false);
  }
  
  function handleActiveClick(evt){
    setExpanded((e)=>!e);
  }
  
  return (<Wrapper>
    <Label>
      <div>{label}</div>
      <div className="icon" onMouseEnter={()=>setShowInfo(true)} onMouseLeave={()=>setShowInfo(false)}>
        <MdInfoOutline/>
      </div>
    </Label>
    <Active onClick={handleActiveClick}>
      <div>{currentOption.label}</div>
      <div className="icon">{expanded ? <MdExpandLess/> : <MdExpandMore/>}</div>
    </Active>
    <Info show={showInfo} className="level-200">{info}</Info>
    {expanded &&
      <Options>
        {
          options.map((o)=>{
            return (<Option key={o.value} 
              onClick={()=>handleOptionSelected(o)} 
              active={currentOption.value === o.value}
            >{o.label}</Option>)
          })
        }
      </Options>
    }
  </Wrapper>)
});

Select.propTypes = {
options:PropTypes.array.isRequired,
label:PropTypes.string.isRequired,
info:PropTypes.string.isRequired,
defaultOption:PropTypes.object.isRequired
}

export default Select;