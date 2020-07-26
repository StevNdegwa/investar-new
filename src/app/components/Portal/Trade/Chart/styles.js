import styled, {keyframes} from "styled-components";

export const Wrapper = styled.svg`
width:100%;
height:99%;
display:inline-block;
margin:0;
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