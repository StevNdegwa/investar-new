import styled, {css} from "styled-components";

export const Wrapper = styled.div`
width:500px;
height:250px;
background-color:#263238;
border-radius:10px;
`

export const Controls = styled.div`
height:50px;
width:100%;
display:flex;
justify-content:space-between;
padding:0.4em 0.5em;
&>div.icon{
  color:gray;
  &>svg{
    height:30px;
    width:30px;
  }
  &:hover{
    color:#f5f5f5;
  }
}
`;

export const Apply = styled.button`
width:90px;
height:40px;
background-image:linear-gradient(#2196f3,#64b5f6,#64b5f6,#2196f3);
color:white;
font-size:1.1em;
font-weight:600;
border:none;
border-radius:10px;
&:focus{
  background-image:none;
  background-color:#2196f3;
}
`;

export const Main = styled.div`
height:150px;
width:100%;
display:flex;
justify-content:space-around;
`;

export const Layout = styled.div`
width:150px;
height:150px;
display:inline-block;
background-color:#78909c;
border-radius:10px;
cursor:pointer;
color:#f5f5f5;
border:2px solid #263238;
box-shadow:inset 0px 0px 3px #2196f3;
transition:box-shadow 500ms, border-color 500ms;
&>section{
  display:flex;
  align-items:center;
  justify-content:center;
  height:100%;
  border-color:inherit;
  border-width:2px;
}
${({selected})=>selected && css`
border-color:#2196f3;
box-shadow:inset 0px 0px 3px #2196f3;
`}
`;

export const SectionTop = styled.section`
height:${({height})=>height} !important;
width:100%;
border-bottom-style:solid;
`;

export const SectionBottom = styled.section`
height:${({height})=>height} !important;
width:100%;
border-top-style:solid;
`;