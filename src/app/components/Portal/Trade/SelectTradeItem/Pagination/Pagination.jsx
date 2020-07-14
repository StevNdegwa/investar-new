import React from "react";
import {MdNavigateNext, MdNavigateBefore, MdFirstPage, MdLastPage, MdMoreHoriz} from "react-icons/md";
import {Wrapper, Button} from "./styles";

const Pagination = React.memo(()=>{
  const [curr,  setCurr] = React.useState(1);
  
  let letters = Array(26).fill(65).map((p, idx)=>(String.fromCodePoint(p+idx)))
  
  function moveBack(){
    setCurr((c)=>{
      return c - 1;
    })
  }
  
  function moveForward(){
    setCurr((c)=>{
      return c + 1;
    })
  }
  
  return (<Wrapper>
    <Button onClick={()=>setCurr(1)} disabled={curr === 1} className="move-back" title="Move To First Page">
      <MdFirstPage/>
    </Button>
     <Button onClick={()=>moveBack()} disabled={curr === 1} title="Move Backwards">
      <MdNavigateBefore/>
    </Button>
    {(curr >= 2 ) && <Button className="more"><MdMoreHoriz/></Button>}
    <Button className="page">{letters[curr - 1]}</Button>
    <Button className="page">{letters[curr]}</Button>
    <Button className="page">{letters[curr + 1]}</Button>
    {(curr <= 23 ) && <Button className="more"><MdMoreHoriz/></Button>}
     <Button onClick={()=>moveForward()} disabled={curr === 24} title="Move Forward">
      <MdNavigateNext/>
    </Button>
    <Button onClick={()=>setCurr(24)} disabled={curr === 24} className="move-forward" title="Move To Last Page">
      <MdLastPage/>
    </Button>
  </Wrapper>);
});

export default Pagination;