import styled, {keyframes} from "styled-components";

import {Button} from "../styles";

export const Wrapper = styled.div`
width:500px;
height:300px;
background-color:#263238;
border-radius:10px;
`;

const callAnim = keyframes`
from{
  color:#eceff1;
}
to{
  color:#29b6f6;
}
`

export const Main = styled.div`
width:100%;
height:calc(100% - 50px);
padding:1em;
display:flex;
&>div.icon{
  width:300px;
  height:100%;
  animation-name:${callAnim};
  animation-duration:1s;
  animation-iteration-count:infinite;
  &>svg{
    height:100%;
    width:270px;
  }
}
&>div.calling{
  width:100%;
  height:100%;
}
`;

export const Footer = styled.div`
width:100%;
height:50px;
position:relative;
padding-bottom:0.5em;
`;

export const EndCall = styled(Button)`
width:100px;
height:40px;
position:absolute;
right:20px;
`;

