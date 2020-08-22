import styled, {css} from "styled-components";

export const Wrapper = styled.div`
height:40px;
display:flex;
`

export const Button = styled.button`
width:40px;
height:40px;
background-color:transparent;
color:#fafafa;
font-size:1.2em;
font-weight:500;
border:1px solid #546e7a;
border-radius:0;
&:hover{
  background-color:#546e7a;
}
&>svg{
  height:30px;
}
&.move-back{
  border-radius:15px 0 0 15px;
}
&.move-forward{
  border-radius:0 15px 15px 0;
}
${({disabled})=>disabled && css`
border:none;
color:#9e9e9e;
&:hover{
  background-color:transparent;
}
`};
`;