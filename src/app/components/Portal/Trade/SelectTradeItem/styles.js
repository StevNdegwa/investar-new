import styled from "styled-components";

export const Wrapper = styled.div`
width:600px;
height:400px;
overflow:hidden;
box-shadow:0px opx 15px #37474f;
background-color: #455a64;
border:2px solid #37474f;
border-radius:10px;
`;

export const Title = styled.div`
width:100%;
height:50px;
line-height:50px;
font-size:1.6em;
color:white;
display:flex;
justify-content:space-between;
padding:0 1em;
&>div.clear{
  color:#bdbdbd;
  padding:0.3em;
  &:hover{
    color:white;
  }
}
`;

export const Main =  styled.div`
width:100%;
height:350px;
display:flex;
`;

export const Tabs = styled.div`
width:150px;
height:100%;
display:flex;
flex-direction:column;
justify-content:space-around;
`;

export const Tab = styled.div`
height:100px;
line-height:100px;
color:white;
font-size:1.3em;
text-align:center;
cursor:pointer;
border:1px outset #455a64;
border-radius:0 5px 5px 0;
transition:background-color 100ms;
&:hover{
  border:2px solid #78909c;
  background-color:#546e7a;
}
`;

export  const Pages = styled.div`
width:100%;
position:relative;
`;

export const Page = styled.div`
position:absolute;
width:100%;
height:100%;
display:${({show})=>(show ? "block" : "none")};
`;