import styled, {keyframes, css} from "styled-components";

import {Link} from "react-router-dom";

export const Wrapper = styled.div`
width:100%;
min-height:100%;
background-image:linear-gradient(rgba(55, 71, 79,0.6), rgba(55, 71, 79,0.8), rgba(55, 71, 79,1),rgba(55, 71, 79, 1));
`;

export const Header = styled.div`
height:100px;
position:sticky;
top:0;
&>nav{
  background-color:#37474f;
  border:1px outset #37474f;
  border-top:none;
  border-radius:0 0 3px 3px;
  height:60px;
  width:90%;
  margin:auto;
  display:flex;
  justify-content:space-between;
  & button{
    height:100%;
    margin-right:15px;
    line-height:60px;
    font-size:1.1em;
    border-radius:0;
    background-color:transparent;
    &>svg{
      width:25px;
    }
    &.highlight.blue{
      &:hover{
        color:#42a5f5;
      }
    }
    &.signup{
      border:1px solid #42a5f5;
      height:35px;
      width:100px;
      line-height:35px;
      border-radius:5px;
      &:hover{
        box-shadow:0px 0px 10px #42a5f5;
      }
      &:focus{
        border:1px solid #42a5f5;
      }
    }
    &:focus{
      background-color:#263238;
      border-left:2px inset #263238;
      border-right:2px inset #263238;
    }
    @media only screen and (max-width:700px){
      &>span{
        display:none;
      }
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
@media only screen and (max-width:600px){
  & div.fot{
    height:50px;
    font-size:2em;
    line-height:50px;
    font-weight:500;
  }
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
width:300px;
height:50px;
margin:auto;
display:block;
background-color:#03a9f4;
box-shadow:0px 0px 5px #03a9f4;
border:1px solid #03a9f4;
border-radius:5px;
font-size:1.1em;
line-height:45px;
&:hover{
  box-shadow:0px 0px 10px #03a9f4;
  text-shadow:0px 0px 10px white;
  text-decoration:none;
  &>div>div.icon>svg{
    width:30px;
  }
}
&>div{
  width:150px;
  height:100%;
  margin:auto;
  display:flex;
  &>div{
    height:100%;
  }
  &>div.icon>svg{
    width:20px;
    transition:width 200ms;
  }
}
${(props)=>props.loading && css`
  animation-name:${loadAnim};
`};
`;

export const Container = styled.div`
width:100%;
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
@media only screen and (max-width:600px){
  &>div>h1{
    font-weight:500;
    font-size:2em;
    height:50px;
    line-height:50px;
  }
}
`;
