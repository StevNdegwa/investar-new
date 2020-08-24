import styled, {css} from "styled-components";

export const Wrapper = styled.div`
width:500px;
height:250px;
background-color:#263238;
border-radius:10px;
`;

export const Controls = styled.div`
width:100%;
height:50px;
text-align:right;
padding:5px;
&>div, button{
  display:inline-block;
  width:80px;
  height:40px;
  margin:0px 10px;
  &.icon{
    color:gray;
    &>svg{
      height:30px;
      width:30px;
    }
    &:hover{
      color:#f5f5f5;
    }
  }
}
&>button{
  background-color:#2196f3;
  background-image:linear-gradient(#2196f3,#64b5f6,#64b5f6,#2196f3);
  border-radius:5px;
  color:white;
  border:none;
  font-size:1.1em;
  font-weight:600;
  &:hover{
    box-shadow:0px 0px 5px #2196f3;
  }
  &:focus{
    background-image:none;
  }
}
`;

export const Main = styled.div`
width:100%;
height:150px;
display:flex;
justify-content:space-around;
`

export const Type = styled.div`
width:150px;
height:150px;
line-height:150px;
text-align:center;
display:inline-block;
color:#37474f;
border-radius:10px;
cursor:pointer;
border:1px solid #2196f3;
transition:box-shadow 500ms, border-color 500ms;
&:hover{
  box-shadow:inset 0px 0px 5px #2196f3;
}
&>svg{
  height:150px;
  width:100px;
}
${({selected})=>selected && css`
border-color:#2196f3;
color:#2196f3;
box-shadow:inset 0px 0px 5px #2196f3;
border:4px solid #2196f3;
`}
`