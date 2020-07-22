import styled, {css} from "styled-components";

export const Wrapper = styled.div`
background-color:#455a64;
width:100%;
height:100%;
padding:0.5em;
`;

export const Controls = styled.div`
width:100%;
height:50px;
display:flex;
justify-content:space-around;
align-items:center;
`;

export const List = styled.ul`
height:calc(100% - 100px);
width:100%;
padding:0.5em;
overflow:auto;
`;

export const Item  = styled.li`
width:100%;
margin:auto;
height:50px;
line-height:50px;
color:#e0e0e0;
border-radius:3px;
overflow:hidden;
cursor:pointer;
&>div{
  display:inline-block;
  height:100%;
  font-size:1.1em;
  overflow:hidden;
  text-overflow:ellipsis;
  &.symbol{
    width:100px;
    text-align:center;
  }
  &.name{
    width:calc(100% - 100px);
  }
}
&:hover{
  font-weight:600;
  border:1px solid #546e7a;
  box-shadow:0px 0px 3px #546e7a;
}
${({active})=>active && css`
  border:1px outset #2196f3;
  font-weight:600;
  &:hover{
    border:1px outset #2196f3;
    box-shadow:0px 0px 3px #546e7a;
  }
`};
`;

export const Apply = styled.button`
width:90px;
height:40px;
background-image:linear-gradient(#2196f3,#64b5f6,#64b5f6,#2196f3);
color:white;
font-size:1.1em;
font-weight:600;
border:none;
border-radius:10px;
&:focus{
  background-image:none;
  background-color:#2196f3;
}
`;