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
`;

export const Message = styled.form`
width:100%;
height;100%;
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
border-radius:3px;
margin:0.5em 0;
padding:0 0.5em;
font-size:1.3em;
color:#eceff1;
font-weight:500;
outline:none;
&:focus{
  box-shadow:0px 0px 10px #263238;
}
`;

export const Textarea = styled.textarea`
display:block;
min-height:200px;
max-height:200px;
min-width:500px;
max-width:500px;
line-height:40px;
border-radius:3px;
border:none;
background-color:#546e7a;
margin:0.5em 0;
padding:0 0.5em;
color:#eceff1;
font-weight:500;
font-size:1.3em;
outline:none;
min-width:500px;
&:focus{
  box-shadow:0px 0px 10px #263238;
}
`;

export const Submit = styled.button`
height:30px;
min-width:60px;
margin:0.5em 0;
background-color:#29b6f6;
color:white;
border:#29b6f6;
outline:none;
font-size:1.1em;
border-radius:5px;
&:hover{
  box-shadow:0px 0px 5px #29b6f6;
}
`;