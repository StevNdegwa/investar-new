import styled, {css} from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
`;

export const Search = styled.div`
width:100%;
height:auto;
min-height:60px;
&>form{
  height:50px;
  width:700px;
  margin:5px auto;
  background-color:#263238;
  display:flex;
  border-radius:25px;
  box-shadow:none;
  transition:box-shadow 500ms;
  &:focus{
    box-shadow:2px 2px 25px black;
  }
  &>div.icon{
    display:inline-block;
    width:50px;
    text-align:center;
    color:#eceff1;
    &>svg{
      height:50px;
      width:30px;
    }
  }
  &>input[type="search"]{
    background-color:#263238;
    width:100%;
  }
  &>input[type="submit"]{
    display:inline-block;
    width:80px;
    height:40px;
    margin:5px 5px 5px 0px;
    border-radius:20px;
    background-color:#29b6f6;
    cursor:pointer;
    &:hover{
      box-shadow:0px 0px 5px #29b6f6;
    }
  }
  &>input{
    border:none;
    display:inline-block;
    font-size:1.2em;
    color:#eceff1;
    &:focus{
      outline:none;
    }
  }
}
`;

export const Empty = styled.div`
height:100%;
width:100%;
display:flex;
justify-content:center;
align-items:center;
&>div.icon{
  width:50px;
  height:50px;
  color:#b0bec5;
  &>svg{
    height:50px;
    width:50px;
  }
}
`;

export const Indicators = styled.div`
display:flex;
flex-wrap:wrap;
width:100%;
height:40px;
background-color:#263238;
`;

export const Results = styled.div`
width:100%;
`;

export const Indicator = styled.button`
width:100px;
height:40px;
margin:0 3px;
border:none;
background-color:#263238;
color:#eceff1;
${({selected})=>selected && css`
background-color:#29b6f6;
`}
`;