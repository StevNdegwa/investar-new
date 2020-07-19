import React from "react";
import {MdSearch} from "react-icons/md";

import Pagination from "../Pagination";
import Loader from "../Loader.jsx";
import {Wrapper,Controls, Search, List, Item, Apply} from "./styles";


let letters = Array(26).fill(65).map((p, idx)=>(String.fromCodePoint(p+idx)));

export default function Stocks({stocksList, getStocksList}){
  const [page, setPage] = React.useState("A");
  const [loading, setLoading] = React.useState(true);
  const [currList, setCurrList] = React.useState([]);
  
  React.useEffect(()=>{
    loadStocksList(page);
  }, [page]);
  
  async function loadStocksList(page){
    setLoading(true);
    try{
      if(stocksList[page]){
        setCurrList(stocksList[page])
      }else{
        let results = await getStocksList(page);
      }
    }catch(error){
      setLoading(false);
    }
  }
  
  if(loading){
    return (<Wrapper><Loader/></Wrapper>);
  }
  
  return (<Wrapper>
    <Controls>
      <Search onSubmit={(evt)=>{evt.preventDefault()}}>
        <div className="search">
          <div className="icon"><MdSearch/></div>
          <input type="search" placeholder="Search"/>
        </div>
      </Search>
    </Controls>
    <List>
      {currList && currList.map((s)=>{
        return (<Item key={s.name}>
          <div className="symbol">GOOGL</div>
          <div className="name">Alphaabet</div>
        </Item>)
      })}
    </List>
    <Controls>
      <Pagination pages={letters} selectPage={setPage}/>
      <Apply>Apply</Apply>
    </Controls>
  </Wrapper>);
}