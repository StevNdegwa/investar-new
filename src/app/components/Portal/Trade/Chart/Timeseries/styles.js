import styled from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:100%;
display:grid;
grid-template-columns:auto 70px;
grid-template-rows:auto 30px;
`;

export const Graph = styled.div`
height:100%;
width:100%;
position:relative;
grid-column:1 /span 1;
grid-row:1 /span 1;
`;

export const VertAxis = styled.div`
width:100%;
height:100%;
grid-column:2 /span 1;
grid-row:1 /span 1;
`;

export const HorzAxis = styled.div`
width:100%;
height:100%;
grid-column:1 /span 2;
grid-row:2 /span 1;
`

export const ControlsHub = styled.div`
width:200px;
position:absolute;
right:10px;
top:10px;
color:#e0e0e0;
border:1px solid #78909c;
border-radius:3px;
overflow:hidden;
background-color:rgba(38, 50, 56,0.4);
box-shadow:0px 0px 10px #263238;
cursor:pointer;
`;

export const ToolBar = styled.div`
height:30px;
width:100%;
background-color:rgba(38, 50, 56, 1);
text-align:right;
border-bottom:1px solid #78909c;
`;

export const Tool = styled.div`
width:30px;
height:30px;
display:inline-block;
border-left:1px solid #78909c;
text-align:center;
&:hover{
  box-shadow:inset 0px 0px 2px #78909c;
}
&>svg{
  height:100%;
  width:20px;
}
`;
