import styled, {keyframes} from "styled-components";

export const Wrapper = styled.div`
width:600px;
height:400px;
overflow:hidden;
box-shadow:0px opx 15px #37474f;
background-color: #455a64;
border:2px solid #37474f;
border-radius:10px;
`;

export const Title = styled.div`
width:100%;
height:40px;
line-height:40px;
font-size:1.6em;
color:white;
display:flex;
justify-content:space-between;
padding:0 0.5em;
&>div.clear-icon{
  color:#bdbdbd;
  &>svg{
    height:40px;
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
line-height:100px;
color:white;
font-size:1.3em;
text-align:center;
cursor:pointer;
border:1px outset #455a64;
border-radius:0 5px 5px 0;
transition:background-color 100ms;
&:hover{
  border:2px solid #78909c;
  background-color:#546e7a;
}
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