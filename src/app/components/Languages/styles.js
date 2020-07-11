import styled from "styled-components";

export const Wrapper = styled.ul`
min-width:200px;
min-height:50px;
line-height:50px;
font-size:1.1em;
font-weight:600;
background-color:#263238;
color:white;
position:absolute;
top:${({position})=>position.top};
left:${({position})=>position.left};
display:${(props)=>(props.show ? "block" : "none")};
list-style-type:none;
z-index:360;
border-radius:0 0 3px 3px;
box-shadow:0px 2px 5px #263238;
overflow:hidden;
&>li{
  cursor:pointer;
  padding:0.3em;
  height:50px;
  vertical-align:middle;
  &:hover{
    background-color:#546e7a;
    border:1px inset #546e7a;
  }
}
`;