import styled from "styled-components";

export const Wrapper = styled.div`
height:50px;
min-width:70px;
position:relative;
border:1px solid #37474f;
padding:0 0.2em;
&>div{
  display:flex;
  justify-content:space-between;
}
& div.icon{
  margin:0 0.5em;
}
`

export const Label = styled.div`
width:100%;
height:20px;
line-height:20px;
font-weight:600;
color:#607d8b;
& svg{
  height:20px;
}
`
export const Active = styled.div`
width:100%;
height:30px;
line-height:30px;
cursor:pointer;
& svg{
  height:30px;
}
`
export const Options = styled.ul`
position:absolute;
top:50px;
left:0px;
min-width:100px;
background-color:#263238;
list-style-type:none;
cursor:pointer;
border-radius:0px 0px 5px 5px;
box-shadow:0px 5px 10px #263238;
`;

export const Option = styled.li`
height:30px;
line-height:30px;
padding:0 0.5em;
background-color:${({active})=>(active ? "#37474f" : "transparent")};
&:hover{
  background-color:#37474f;
}
`;

export const Info = styled.div`
position:absolute;
left:100%;
top:0px;
background-color:#263238;
min-width:200px;
padding:0.3em;
border-radius:3px;
box-shadow:0px 0px 5px #263238;
display:${({show})=>(show ? "block" : "none")} !important;
`