import styled from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
`;

export const Tabs = styled.div`
width:100%;
height:50px;
background-color:#263238;
padding-top:10px;
padding-left:10px;
`

export const Tab = styled.div`
height:40px;
min-width:60px;
cursor:pointer;
line-height:40px;
color:#eeeeee;
font-weight:600;
background-color:#455a64;
display:inline-block;
padding:0 0.5em;
border-radius:5px 5px 0px 0px;
`;

export const Main = styled.div`
width:100%;
height:100%;
`;

export const Search = styled.div`
width:100%;
height:auto;
min-height:60px;
border-bottom:1px solid #b0bec5;
&>form{
  height:50px;
  width:700px;
  margin:5px auto;
  background-color:#263238;
  display:flex;
  border-radius:25px;
  box-shadow:none;
  transition:box-shadow 500ms;
  &:focus{
    box-shadow:2px 2px 25px black;
  }
  &>div.icon{
    display:inline-block;
    width:50px;
    text-align:center;
    color:#eceff1;
    &>svg{
      height:50px;
      width:30px;
    }
  }
  &>input[type="search"]{
    background-color:#263238;
    width:100%;
  }
  &>input[type="submit"]{
    display:inline-block;
    width:80px;
    height:40px;
    margin:5px 5px 5px 0px;
    border-radius:20px;
    background-color:#29b6f6;
    cursor:pointer;
    &:hover{
      box-shadow:0px 0px 5px #29b6f6;
    }
  }
  &>input{
    border:none;
    display:inline-block;
    font-size:1.2em;
    color:#eceff1;
    &:focus{
      outline:none;
    }
  }
}
`;