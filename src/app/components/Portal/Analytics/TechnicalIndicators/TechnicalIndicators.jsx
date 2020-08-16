import React from "react";
import {CSSTransition} from "react-transition-group";
import {MdSearch, MdInfoOutline} from "react-icons/md";

import fetchSearchResults from "../../../../lib/alphavantage/fetchsearchresults";

import SMA from "./SMA";

import {Wrapper, Info, Search, Results, Loader, ResultOptions, Main, Title, Indicators, Indicator} from "./styles";

export default function TechnicalIndicators(){
  const [show, setShow] = React.useState({empty:true, loading:false, main:function(){ return !this.empty && !this.loading}});
  const [search, setSearch] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState({});
  const [currentIndicator, setCurrentIndicator] = React.useState("SMA")
  
  function handleSearchSubmit(evt){
    evt.preventDefault();
    loadResults();
  }
  
  async function loadResults(){
    try{
      setShow((state)=>({...state, empty:false, loading:true}));
      
      let results = await fetchSearchResults(search);
      if(!results.length){
        throw new Error("Zero Results");
      }
      setSearchResults(results);
      setShow((state)=>({...state, empty:true, loading:false}));
    }catch(error){
      setShow((state)=>({...state, empty:true, loading:false}));
    }
  }
  
  
  function handleSearchResultClick(resultItem){
    setSelectedItem(resultItem); 
    setSearchResults([]);
    setShow((state)=>({...state, empty:false}));
  }
  
  function handleContainerClick(){
    setSearchResults([]);
  }
  
  return (<Wrapper onClick={()=>handleContainerClick()}>
    <Search>
      <form onSubmit={handleSearchSubmit}>
        <div className="icon">
          <MdSearch/>
        </div>
        <input 
            type="search" 
            placeholder="Search Stock symbol or Company name e.g. MSFT or Microsoft" 
            value={search} 
            onChange={(evt)=>setSearch(evt.target.value)}
          />
        <input type="submit" value="Go"/>
      </form>
      <CSSTransition in={Boolean(searchResults.length)} timeout={200} classNames="fade">
        <ResultOptions>
          {searchResults.map((r)=>{
            return (<li key={r.symbol} onClick={()=>handleSearchResultClick(r)}>{r.symbol}, {r.name}</li>);
          })}
        </ResultOptions>
      </CSSTransition>
    </Search>
    {show.main() ?
      <>
        <Title>{selectedItem.symbol}, {selectedItem.name}</Title>
        <Indicators>
          <Indicator selected={currentIndicator === "SMA"}>SMA</Indicator>
        </Indicators>
        <SMA selectedItem={selectedItem}/>
      </>
      :
      <Info>
        {show.loading && <Loader/>}
      </Info>
    }
  </Wrapper>);
}