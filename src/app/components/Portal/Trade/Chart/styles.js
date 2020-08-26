import styled, {keyframes, css} from "styled-components";

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
  border-top:2px solid #1976d2;
}
25%{
  transform: rotate(90deg);
  border-right:2px solid #1976d2;
}
50%{
  transform: rotate(180deg);
  border-bottom:2px solid #1976d2;
}
75%{
  transform: rotate(270deg);
  border-left:2px solid #1976d2;
}
100%{
  transform: rotate(360deg);
  border:2px solid #1976d2;
}
`

export const Spinner = styled.div`
width:30px;
border-radius:50%;
animation-name:${spinnerAnim};
animation-duration:2s;
animation-iteration-count:infinite;
animation-timing-function:linear;
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

export const Connecting = styled.div`
width:200px;
height:40px;
padding:5px;
position:absolute;
left:40px;
bottom:-40px;
font-size:1.2em;
font-weight:600;
background-color:#263238;
color:#eceff1;
box-shadow:0px 0px 10px #263238;
border-radius:5px;
cursor:progress;
transition:bottom 500ms;
&>div{
  float:left;
  height:30px;
  width:30px;
  line-height:30px;
  margin:0 10px;
}
${({is_loading})=>is_loading && css`
bottom:10px;
`}
`;