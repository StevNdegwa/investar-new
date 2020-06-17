import styled from "styled-components";

export const Countries = styled.ul`
list-style-type:none;
cursor:pointer;
display:${(props)=>props.show ? "block" : "none"};
position:absolute;
background-color:#263238;
width:300px;
height:200px;
overflow:auto;
border:1px outset #b0bec5;
border-radius:3px;
box-shadow:1px 1px 3px black;
z-index:100;
&>li{
  height:40px;
  line-height:40px;
  border-bottom:1px inset #b0bec5;
  padding-left:0.5em;
  overflow:hidden;
  text-overflow:ellipsis;
}
`;

export const Select = styled.div`
width:100px;
height:40px;
line-height:40px;
display:flex;
margin:0.5em 0;
padding:0 0.5em;
border:1px solid #b0bec5;
& > #country_name{
  width:100%;
  padding-
}
& .ip-icons{
  width:30px;
}
`;

export const Control = styled.div`
width:20px;
`;