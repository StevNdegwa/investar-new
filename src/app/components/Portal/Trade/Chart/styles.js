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
from{
  transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
}
`

export const Spinner = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
&>div{
  height:150px;
  width:150px;
  border:none;
  border-top:5px solid #1976d2;
  border-right:5px solid #1976d2;
  border-radius:50%;
  animation-name:${spinnerAnim};
  animation-duration:700ms;
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
