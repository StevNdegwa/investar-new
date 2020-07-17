import React from "react";
import {MdSearch} from "react-icons/md";

import Pagination from "../Pagination";
import {Wrapper,Controls, Search, List, Item, Apply} from "./styles";
let letters = Array(26).fill(65).map((p, idx)=>(String.fromCodePoint(p+idx)));

export default function Stocks(){
  const [page, setPage] = React.useState("A");
  
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
      <Item>
        <div className="symbol">GOOGL</div>
        <div className="name">Alphabet</div>
      </Item>
    </List>
    <Controls>
      <Pagination pages={letters} selectPage={setPage}/>
      <Apply>Apply</Apply>
    </Controls>
  </Wrapper>);
}