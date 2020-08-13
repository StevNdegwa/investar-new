import styled, {keyframes} from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:100%;
background-color:#37474f;
`;

export const Header = styled.div`
height:10px;
width:100%;
background-color:#eeeeee;
overflow:hidden;
`;

let loadAnim = keyframes`
from{
  transform: translate(0px, 0px);
}
to{
  transform: translate(2000px, 0px);
}
`

export const Loader = styled.div`
height:10px;
width:300px;
background-color:#29b6f6;
animation-name:${loadAnim};
animation-duration:3s;
animation-iteration-count:infinite;
`

let textAnim = keyframes`
from{
  text-shadow:0px 0px 2px #29b6f6;
}
to{
  text-shadow:0px 0px 10px #29b6f6;
}
`

export const Main = styled.div`
width:100%;
height:calc(100% - 75px);
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#29b6f6;
&>div.investar{
  font-size:5em;
  font-weight:600;
  animation-name:${textAnim};
  animation-duration:2s;
  animation-iteration-count:infinite;
}
&>div.copyright{
  color:white;
}
`

export const Footer = styled.div`
height:60px;
width:100%;
text-align:center;
color:#90a4ae;
border-top:1px solid #90a4ae;
&>svg{
  height:60px;
  width:50px;
  margin:0 0.2em;
}
`;