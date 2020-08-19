import styled from "styled-components";

export const Wrapper = styled.div`
height:100%;
position:relative;
background-color:#263238;
border:1px solid #37474f;
padding:0 0.1em;
color:white;
list-style-type:none;
cursor:pointer;
&>div{
  display:flex;
  &>div.icon{
    width:30px;
    &>svg{
      height:50px;
      width:30px;
    }
  }
  &>div.label{
    padding:0 0.2em;
    font-weight:600;
  }
}
`;

export const Ul = styled.ul`
position:absolute;
top:105%;
left:0px;
width:150px;
display:${(props)=>(props.show ? "block" : "none")};
border-radius:0 0 3px 3px;
background-color:#263238;
overflow:hidden;
padding:0.2em;
&>li{
  cursor:pointer;
  height:40px;
  line-height:40px;
  padding:0 0.5em;
  &:hover{
    background-color:#37474f;
  }
}
` 