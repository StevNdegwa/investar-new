import styled, {css} from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:100%;
`;

export const Tabs = styled.div`
width:100%;
height:50px;
background-color:#263238;
padding-top:10px;
padding-left:10px;
`

export const Tab = styled.div`
height:40px;
min-width:60px;
cursor:pointer;
line-height:40px;
color:#eeeeee;
font-weight:600;
background-color:#455a64;
display:inline-block;
padding:0 0.5em;
border-radius:5px 5px 0px 0px;
`;

export const Content = styled.div`
width:100%;
height:calc(100% - 50px);
`;

