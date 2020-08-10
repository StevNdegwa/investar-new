import styled, {keyframes} from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:100%;
transform:translateZ(150px);
`;

const anim = keyframes`
from{
  fill:url(#loading1);
}
to{
  fill:url(#loading2);
}
`;

export const Loader = styled.rect`
animation-name:${anim};
animation-duration:400ms;
animation-direction:alternate-reverse;
animation-iteration-count:infinite;
animation-timing-function:linear;
`;

export const Section = styled.section`
width: 100%;
height:${({height})=>!!height ? height : "100%"};
border-bottom:4px solid #263238;
`;

const spinnerAnim = keyframes`
0%{
  transform: rotate(0deg);
  border-top:3px solid #1976d2;
}
25%{
  transform: rotate(90deg);
  border-right:3px solid #1976d2;
}
50%{
  transform: rotate(180deg);
  border-bottom:3px solid #1976d2;
}
75%{
  transform: rotate(270deg);
  border-left:3px solid #1976d2;
}
100%{
  transform: rotate(360deg);
  border:3px solid #1976d2;
}
`

export const Spinner = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
&>div{
  height:100px;
  width:100px;
  border-radius:50%;
  animation-name:${spinnerAnim};
  animation-duration:2s;
  animation-iteration-count:infinite;
  animation-timing-function:linear;
}
`;

export const ErrorInfo = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
& div{
  text-align:center;
}
& div.message{
  color:red;
  font-size:1.3em;
  line-height:50px;
}
& div.action>button{
  width:80px;
  height:30px;
  color:#fafafa;
  background-color:#212121;
  box-shadow:0px 0px 10px #212121;
  border:none;
  outline:none;  
}
`;
