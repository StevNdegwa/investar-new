import styled from "styled-components"

export const Wrapper = styled.div`
width:100%;
height:100%;
display:flex;
`;

export const Contacts = styled.div`
width:500px;
height:100%;
border-right:1px outset #37474f;
padding:1em;
color:#eceff1;
text-align:center;
&>svg{
  width:400px;
  height:400px;
}
`;

export const CallUs = styled.button`
width:200px;
height:50px;
background-color:#29b6f6;
color:white;
display:inline-block;
border:none;
outline:none;
&:hover{
  box-shadow:0px 0px 5px #29b6f6;
}
&:focus{
  outline:none;
}
`

export const Message = styled.form`
width:100%;
height:100%;
padding:1em;
border-left:1px outset #37474f;
`;

export const Input = styled.input`
display:block;
height:40px;
min-width:500px;
line-height:40px;
border:none;
background-color:#546e7a;
margin:0.5em 0;
padding:0 0.5em;
font-size:1.1em;
color:#eceff1;
font-weight:500;
outline:none;
&:focus{
  box-shadow:0px 0px 3px #263238;
  outline:none;
}
`;

export const Textarea = styled.textarea`
display:block;
min-height:200px;
max-height:200px;
min-width:500px;
max-width:500px;
line-height:40px;
border:none;
background-color:#546e7a;
margin:0.5em 0;
padding:0 0.5em;
color:#eceff1;
font-weight:500;
font-size:1.1em;
outline:none;
min-width:500px;
font-family:"PT Serif", serif;
&:focus{
  box-shadow:0px 0px 3px #263238;
  outline:none;
}
`;

export const Submit = styled.button`
height:30px;
min-width:100px;
margin:0.5em 0;
background-color:#29b6f6;
color:white;
border:#29b6f6;
outline:none;
&:hover{
  box-shadow:0px 0px 5px #29b6f6;
}
`;