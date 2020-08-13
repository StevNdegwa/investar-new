import React from "react";
import {MdSearch, MdInfoOutline} from "react-icons/md";

import {Wrapper, Empty, Search, Indicators, Indicator, Results} from "./styles";

export default function TechnicalIndicators({empty}){
  const [search, setSearch] = React.useState("");
  
  function handleSearchSubmit(evt){
    evt.preventDefault();
  }
  
  return (<Wrapper className="main">
    <Search>
      <form onSubmit={handleSearchSubmit}>
        <div className="icon">
          <MdSearch/>
        </div>
        <input 
            type="search" 
            placeholder="Search Stock symbol or Company name" 
            value={search} 
            onChange={(evt)=>setSearch(evt.target.value)}/>
        <input type="submit" value="Go"/>
      </form>
    </Search>
    {empty && 
      <Empty>
        <div className="icon">
          <MdInfoOutline/>
        </div>
      </Empty>
    }
  </Wrapper>)
}