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

export const Button = styled.button`
background-color:#29b6f6;
display:inline-block;
&:hover{
  box-shadow:0px 0px 5px #29b6f6;
}
`

export const CallUs = styled(Button)`
width:200px;
height:50px;
`;

export const Message = styled.form`
width:100%;
height:100%;
padding:1em;
border-left:1px outset #37474f;
`;

export const Input = styled.input`
height:40px;
min-width:500px;
line-height:40px;
display:block;
background-color:#546e7a;
font-size:1.1em;
color:#eceff1;
font-weight:500;
margin:0.5em 0;
&:focus{
  box-shadow:0px 0px 3px #263238;
}
`;

export const Textarea = styled.textarea`
display:block;
min-height:200px;
max-height:200px;
min-width:500px;
max-width:500px;
line-height:40px;
background-color:#546e7a;
color:#eceff1;
font-weight:500;
font-size:1.1em;
min-width:500px;
font-family:"PT Serif", serif;
margin:0.5em 0;
&:focus{
  box-shadow:0px 0px 3px #263238;
}
`;

export const Submit = styled(Button)`
height:30px;
width:100px;
`;