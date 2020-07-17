import styled from "styled-components";

export const Wrapper = styled.div`
background-color:#263238;
box-shadow:0px 0px 20px #263238;
width:350px;
height:150px;
color:white;
border-radius:3px;
overflow:hidden;
&>h4{
  height:40px;
  line-height:40px;
  display:flex;
  justify-content:space-between;
  font-size:1.3em;
  font-weight:600;
  padding:0 1em;
  &>span{
    margin-top:0.3em;
  }
}
&>p{
  height:50px;
  line-height:50px;
  text-align:center;
  font-size:1.3em;
}
&>div{
  height:60px;
  text-align:right;
  display:flex;
  justify-content:space-around;
  &>button{
    background-image:linear-gradient(#2196f3,#64b5f6,#64b5f6,#2196f3);
    border:1px solid #2196f3;
    margin:0.3em;
    border-radius:3px;
    color:white;
    font-size:1.2em;
    font-weight:500;
    height:40px;
    line-height:40px;
    width:40%;
    &:focus{
      background-image:none;
      background-color:#2196f3;
    }
  }
}
`;