import styled from "styled-components";

export const Wrapper = styled.div`
position:absolute;
width:100%;
height:100%;
z-index:400;
background-color:rgba(38, 50, 56,0.7);
display:${({show})=>show ? "flex" : "none"};
align-items:center;
justify-content:center;
`;