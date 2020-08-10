import styled from "styled-components";


export const Graph = styled.div`
width:100%;
height:100%;
grid-area:graph;
`;

export const VertAxis = styled.div`
width:100px;
height:100%;
grid-area:vertaxis;
`;

export const HorzAxis = styled.div`
width:100%;
height:5px;
grid-area:horzaxis;
`

export const Wrapper = styled.div`
width:100%;
height:100%;
display:grid;
grid-template-columns:auto 100px;
grid-template-rows:90% 5px;
grid-template-areas:'graph vertaxis' 'horzaxis horzaxis';
`;