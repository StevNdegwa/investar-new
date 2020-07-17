import React from "react";
import PropTypes from "prop-types";
import {MdNavigateNext, MdNavigateBefore, MdFirstPage, MdLastPage, MdMoreHoriz} from "react-icons/md";
import {Wrapper, Button} from "./styles";

const Pagination = ({pages, selectPage})=>{
  const [curr,  setCurr] = React.useState(1);
  
  let e = pages.length - 2; //The last page index
  
  function moveBack(){
    setCurr((c)=>{
      return --c;
    })
  }
  
  function moveForward(){
    setCurr((c)=>{
      return ++c;
    })
  }
  
  return (<Wrapper>
    <Button onClick={()=>setCurr(1)} disabled={curr === 1} className="move-back" title="Move To First Page">
      <MdFirstPage/>
    </Button>
    <Button onClick={()=>moveBack()} disabled={curr === 1} title="Move Backwards">
      <MdNavigateBefore/>
    </Button>
    <Button className="page" onClick={()=>selectPage(pages[curr - 1])}>{pages[curr - 1]}</Button>
    <Button className="page" onClick={()=>selectPage(pages[curr])}>{pages[curr]}</Button>
    <Button className="page" onClick={()=>selectPage(pages[curr + 1])}>{pages[curr + 1]}</Button>
    <Button onClick={()=>moveForward()} disabled={curr === e} title="Move Forward">
      <MdNavigateNext/>
    </Button>
    <Button onClick={()=>setCurr(e)} disabled={curr === e} className="move-forward" title="Move To Last Page">
      <MdLastPage/>
    </Button>
  </Wrapper>);
};

Pagination.propTypes = {
  selectPage:PropTypes.func.isRequired,
  page:PropTypes.array.isRequired
}

export default Pagination;