import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
height: 100%;
background-color:#000033;
position: relative;
`;

export const ToolBar = styled.div`
position: absolute;
top: 40px;
left: 40px;
height: 40px;
border-radius:5px;
border:1px solid #78909c;
background-color: #263238;
box-shadow:0px 0px 10px #263238;
display:flex;
`;

export const Tool = styled.div`
height:100%;
line-height:40px;
padding:0 0.5em;
color:#e0e0e0;
font-size:1.2em;
display:flex;
justify-content:space-between;
cursor:pointer;
border-right:1px solid #78909c;
&>div.icon{
  &>svg{
    width:30px;
    height:40px;
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
