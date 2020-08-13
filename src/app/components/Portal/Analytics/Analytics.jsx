import React from "react";
import {MdSearch} from "react-icons/md"
import {Wrapper, Tabs, Tab, Main, Search} from "./styles";

export default function Analytics(){
  const [search, setSearch] = React.useState("");
  
  function handleSearchSubmit(evt){
    evt.preventDefault();
  }
  
  return (<Wrapper>
    <Tabs>
      <Tab>Technical indicators</Tab>
    </Tabs>
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
    <Main></Main>
  </Wrapper>);
}