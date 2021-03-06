import styled from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:rgba(38, 50, 56,0.7);
display:${({show})=>show ? "flex" : "none"};
align-items:center;
justify-content:center;
overflow:auto;
&>section.free-space{
  width:100%;
  height:100%;
  position:absolute;
  background-color:transparent;
}
`;