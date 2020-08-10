import styled from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:100%;
display:grid;
grid-template-columns:auto 50px;
grid-template-rows:auto 30px;
`;

export const Graph = styled.div`
height:100%;
width:100%;
grid-column:1 /span 1;
grid-row:1 /span 1;
`;

export const VertAxis = styled.div`
width:100%;
height:100%;
grid-column:2 /span 1;
grid-row:1 /span 1;
`
export const HorzAxis = styled.div`
width:100%;
height:100%;
grid-column:1 /span 2;
grid-row:2 /span 1;
`