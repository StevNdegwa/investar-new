import styled from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:100%;
display:grid;
grid-template-columns:auto 50px;
grid-template-rows:auto 30px;
`;

export const Graph = styled.div`
height:100%;
width:100%;
grid-column:1 /span 1;
grid-row:1 /span 1;
`;

export const VertAxis = styled.div`
width:100%;
height:100%;
grid-column:2 /span 1;
grid-row:1 /span 1;
`
export const HorzAxis = styled.div`
width:100%;
height:100%;
grid-column:1 /span 2;
grid-row:2 /span 1;
`

export const ToolBar = styled.div`
position:absolute;
top:20px;
right:50px;
min-width:30px;
height:30px;
border-radius:5px;
border:1px solid #78909c;
background-color: #263238;
box-shadow:0px 0px 10px #263238;
display:flex;
`;

export const Tool = styled.div`
height:100%;
line-height:30px;
padding:0 0.5em;
color:#e0e0e0;
font-size:1em;
display:flex;
cursor:pointer;
border-right:1px solid #78909c;
&>div.icon{
  &>svg{
    width:20px;
    height:30px;
  }
}
&:hover{
  box-shadow:inset 0px 0px 2px #78909c;
}
&>button{
  min-width:30px;
  background-color:transparent;
  border:none;
  font-size:1em;
  font-weight:600;
  color:#e0e0e0;
  &.active{
    color:#2196f3;
  }
}
`;
