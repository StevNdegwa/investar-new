import styled from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
`;

export const Header = styled.div`
height:100px;
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
`;

export const OpenDialog = styled.div`
width:350px;
padding:1em;
border:1px solid black;
background-color:#263238;
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