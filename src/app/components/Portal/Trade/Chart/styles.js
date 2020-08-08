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