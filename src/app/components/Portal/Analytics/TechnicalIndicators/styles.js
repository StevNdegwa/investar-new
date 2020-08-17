import styled, {css, keyframes} from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:100%;
`;

export const Search = styled.div`
width:100%;
height:60px;
position:relative;
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

export const ResultOptions = styled.ul`
position:absolute;
top:60px;
max-height:600px;
width:100%;
list-style-type:none;
font-size:1.1em;
font-weight:500;
color:#eceff1;
cursor:pointer;
overflow:auto;
padding-bottom:10px;
&>li{
  width:700px;
  background-color:#263238;
  margin:0 auto;
  padding:0 0.5em;
  height:40px;
  line-height:40px;
  border:1px solid #37474f;
  border-top:none;
  &:first-child{
    border-radius:5px 5px 0px 0px;
  }
  &:last-child{
    border-radius:0px 0px 5px 5px;
    box-shadow:0px 5px 10px #263238;
  }
}
`;

export const Info = styled.div`
height:100%;
width:100%;
display:flex;
justify-content:center;
align-items:center;
&>div.icon{
  width:50px;
  height:50px;
  color:#b0bec5;
  &>svg{
    height:50px;
    width:50px;
  }
}
`;

const loaderAnim = keyframes`
from{
  background-image:linear-gradient(120deg, #29b6f6, #81d4fa, #29b6f6, #81d4fa, #29b6f6, #81d4fa, #29b6f6, #81d4fa, #29b6f6);
}
to{
  background-image:linear-gradient(120deg, #81d4fa, #29b6f6, #81d4fa, #29b6f6, #81d4fa, #29b6f6, #81d4fa, #29b6f6, #81d4fa);
}
`;

export const Loader = styled.div`
width:150px;
height:20px;
border-radius:10px;
animation-name:${loaderAnim};
animation-duration:500ms;
animationn-timing-function:linear;
animation-iteration-count:infinite;
`;

export const Title = styled.h4`
width:100%;
height:40px;
line-height:40px;
font-size:1.3em;
font-weight:600;
text-align:center;
color:#eceff1;
`;

export const Indicators = styled.div`
display:flex;
width:100%;
height:40px;
background-color:#263238;
`;

export const Indicator = styled.button`
width:100px;
height:40px;
margin:0 3px;
border:none;
background-color:#263238;
color:#eceff1;
${({selected})=>selected && css`
background-color:#29b6f6;
`}
`;