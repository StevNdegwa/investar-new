import styled, {keyframes, css} from "styled-components";

import {Link} from "react-router-dom";

export const Wrapper = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
`;

export const Header = styled.div`
height:100px;
background-color:rgba(38, 50, 56,0.6);
&>nav{
  background-color:#263238;
  border-right:2px outset #263238;
  border-bottom:2px outset #263238;
  border-left:2px outset #263238;
  border-radius:0 0 3px 3px;
  height:60px;
  width:90%;
  margin:auto;
  padding:0.6em;
  display:flex;
  justify-content:space-between;
  & button{
    background-color:transparent;
    border:none;
    outline:none;
    color:white;
    margin-right:15px;
    height:30px;
    line-height:30px;
    font-size:1.1em;
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
    @media only screen and (max-width:600px){
      &>span{
        display:none;
      }
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
}
`;

export const Footer = styled.div`
height:100px;
background-color:#263238;
border-top: 5px double #cfd8dc;
`;

export const Main = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100%;
position:relative;
background-color:rgba(38, 50, 56,0.6);
& div.fot{
  text-align:center;
  font-size:3em;
  height:100px;
  line-height:100px;
  font-weight:600;
  color:white;
}
`;

export const OpenDialog = styled.div`
position:absolute;
width:450px;
padding:1em;
background-color:rgba(38, 50, 56,0.8);
box-shadow:0px 0px 5px #263238;
display:${(props)=>props.show ? "block" : "none"};
border-radius:3px;
&.open-enter{
  transform:scale(0.8);
}
&.open-enter-active{
  transform:scale(1);
  transition:transform 200ms linear;
}
&.open-exit{
  transform:scale(1);
}
&.open-exit-active{
  transform:scale(0.8);
  transition:transform 200ms linear;
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
padding:0 1em;
width:200px;
&:hover{
  box-shadow:0px 0px 10px #03a9f4;
  &>svg{
    transform: scale(1.15);
  }
}
${(props)=>props.loading && css`
  animation-name:${loadAnim};
  animation-duration:200ms;
  animation-direction:alternate-reverse;
  animation-iteration-count:infinite;
  animation-timing-function:linear;
`};
border:1px solid #03a9f4;
border-radius:3px;
height:50px;
text-align:center;
line-height:50px;
font-size:1.3em;
&>svg{
  float:right;
  margin-top:0.6em;
}
`;