import styled, {keyframes, css} from "styled-components";

import {Link} from "react-router-dom";

export const Wrapper = styled.div`
width:100%;
min-height:100%;
background-image:linear-gradient(rgba(55, 71, 79,0.6), rgba(55, 71, 79,0.8), rgba(55, 71, 79,1),rgba(55, 71, 79, 1));
display:${(props)=>(props.showingMenu ? "none" : "block")};
`;

export const Header = styled.div`
height:100px;
position:sticky;
top:0;
z-index:350;
&>nav{
  background-color:#37474f;
  border-right:1px outset #37474f;
  border-bottom:1px outset #37474f;
  border-left:1px outset #37474f;
  border-radius:0 0 3px 3px;
  height:60px;
  width:90%;
  margin:auto;
  display:flex;
  justify-content:space-between;
  & button{
    background-color:transparent;
    border:none;
    outline:none;
    color:white;
    margin-right:15px;
    height:100%;
    line-height:30px;
    font-size:1.1em;
    font-weight:lighter;
    padding:0 0.4em;
    &>svg{
      float:left;
      margin-top:0.15em;
    }
    &>div{
      display:inline-block;
      height:100%;
    }
    &.highlight.blue{
      &:hover{
        color:#42a5f5;
      }
    }
    @media only screen and (max-width:700px){
      &>span{
        display:none;
      }
    }
    &:focus{
      background-color:#263238;
      border-left:2px inset #263238;
      border-right:2px inset #263238;
    }
  }
  & button.signup{
    border:1px solid #42a5f5;
    height:35px;
    width:100px;
    line-height:35px;
    text-align:center;
    border-radius:3px;
    &:hover{
      box-shadow:0px 0px 10px #42a5f5;
    }
  }
  @media only screen and (max-width:600px){
    width:100%;
  }
}
`;

export const Main = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:480px;
position:relative;
& div.fot{
  text-align:center;
  font-size:3em;
  height:100px;
  line-height:100px;
  font-weight:600;
  color:white;
}
`;


const loadAnim = keyframes`
from{
  background-image:linear-gradient(-45deg, #03a9f4, #81d4fa, #03a9f4, #81d4fa, #03a9f4, #81d4fa, #03a9f4, #81d4fa);
}
to{
  background-image:linear-gradient(-45deg, #81d4fa, #03a9f4, #81d4fa, #03a9f4, #81d4fa, #03a9f4, #81d4fa, #03a9f4);
}
`;

export const OpenDemo = styled(Link)`
display:block;
text-decoration:none;
color:white;
margin:auto;
background-color:#03a9f4;
box-shadow:0px 0px 5px #03a9f4;
width:300px;
&:hover{
  box-shadow:0px 0px 10px #03a9f4;
  text-shadow:0px 0px 10px white;
  & div.icon svg{
    width:30px;
  }
}
border:1px solid #03a9f4;
border-radius:3px;
height:50px;
font-size:1.1em;
&>div{
  height:100%;
  width:150px;
  margin:auto;
  display:flex;
  justify-content:space-around;
}
& div.label{
  height:100%;
  line-height:50px;
}
& div.icon{
  height:100%;
  &>svg{
    display:inline-block;
    height:50px;
    width:20px;
    transition:width 200ms;
  }
}
${(props)=>props.loading && css`
  animation-name:${loadAnim};
  animation-duration:400ms;
  animation-direction:alternate-reverse;
  animation-iteration-count:infinite;
  animation-timing-function:linear;
`};
`;

export const Container = styled.div`
width:100%;
margin:1em 0;
&>div{
  margin:auto;
  color:white;
  &>h1{
    text-align:center;
    font-weight:500;
    font-size:3em;
    height:100px;
    line-height:100px;
  }
}
`;
