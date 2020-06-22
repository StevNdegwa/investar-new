import styled, {css} from "styled-components";

export const Control = styled.div`
height:60px;
width:102%;
cursor:pointer;
padding:0.5em;
background-color:transparent;
border-left:none;
transition:border-left 200ms, background-color 200ms;
&:hover{
  &>div.label{
    color:white;
  }
}
&>div.icon{
  width:20px;
  height:20px;
  color:#cfd8dc;
  margin:auto;
  &>svg{
    width:100%;
    height:100%;
  }
}
&>div.label{
  height:30px;
  font-size:0.8em;
  text-align:center;
  color:#cfd8dc;
}
${(props)=>props.active && css`
background-color:#546e7a;
border-left:4px solid #29b6f6;
&>div.icon{
  color:#29b6f6;
}
&>div.label{
  color:white;
}
`}
`;

export const Action = styled.div`
width:30px;
height:30px;
margin:10px auto;
color:#cfd8dc;
&>svg{
  width:100%;
  height:100%;
  transform:rotate(180deg);
}
`;