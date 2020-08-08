import styled, {keyframes, css} from "styled-components";

export const Wrapper = styled.div`
width:600px;
height:400px;
overflow:hidden;
box-shadow:0px opx 15px #263238;
background-color: #263238;
border:2px solid #263238;
border-radius:10px;
`;

export const Title = styled.div`
width:100%;
height:50px;
line-height:50px;
font-size:1.6em;
color:white;
display:flex;
justify-content:space-between;
padding:0 0.5em;
&>div.trade-item{
  width:100px;
  text-align:center;
}
&>div.clear-icon{
  color:#bdbdbd;
  &>svg{
    height:50px;
  }
  &:hover{
    color:white;
  }
}
`;

export const Main =  styled.div`
width:100%;
height:350px;
display:flex;
`;

export const Tabs = styled.div`
width:150px;
height:100%;
display:flex;
flex-direction:column;
justify-content:space-around;
`;

export const Tab = styled.div`
height:100px;
color:white;
font-size:1.1em;
cursor:pointer;
border:1px outset #455a64;
border-radius:0 5px 5px 0;
transition:background-color 100ms;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
&>div.icon>svg{
  height:20px;
  width:20px;
}
&:hover{
  border:2px solid #78909c;
  background-color:#455a64;
}
${({active})=>active && css`
  border:2px solid #78909c;
  background-color:#455a64;
`}
`;

export  const Pages = styled.div`
width:100%;
position:relative;
`;

export const Page = styled.div`
position:absolute;
width:100%;
height:100%;
display:${({show})=>(show ? "block" : "none")};
`;


const dataLoaderAnim = keyframes`
from{
  background-color:#2196f3;
  border:1px outset #2196f3;
}
to{
  background-color:#bdbdbd;
  border:1px outset #bdbdbd;
}
`;

export const DataLoaderWrapper = styled.div`
display:flex;
width:60px;
height:20px;
justify-content:space-around;
margin:auto;
&>div{
  width:15px;
  height:15px;
  border-radius:50%;
  background-color:#bdbdbd;
  border:1px outset #bdbdbd;
  animation-duration:300ms;
  animation-direction:alternate-reverse;
  animation-timing-function:ease-in;
  box-shadow:1px 3px 1px #424242;
}
&>div.one{
  animation-name:${dataLoaderAnim};
  animation-delay:0s;
  animation-iteration-count:infinite;
}
&>div.two{
  animation-name:${dataLoaderAnim};
  animation-delay:150ms;
  animation-iteration-count:infinite;
}
&>div.three{
  animation-name:${dataLoaderAnim};
  animation-delay:300ms;
  animation-iteration-count:infinite;
}
`;