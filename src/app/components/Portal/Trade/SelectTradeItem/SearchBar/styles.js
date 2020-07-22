import styled from "styled-components";

export const Form = styled.form` 
height:40px;
width:100%;
border:1px solid #546e7a;
border-radius:15px;
overflow:hidden;
color:#e0e0e0;
&>div.search{
  position:relative;
  height:100%;
  &>div.icon{
    width:40px;
    display:inline-block;
    text-align:center;
    &>svg{
      height:40px;
      width:30px;
    }
  }
  &>input[type="search"]{
    height:100%;
    display:inline-block;
    position:absolute;
    left:40px;
    width:calc(100% - 40px);
    transition:left 200ms, width 200ms;
    &:focus{
      width:100%;
      left:0px;
    }
    background-color:#455a64;
    border:none;
    border-left:1px solid #546e7a;
    padding:0 0.5em;
    font-size:1.2em;
    color:#e0e0e0;
  }
}
`;
