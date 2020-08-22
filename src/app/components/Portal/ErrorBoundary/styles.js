import styled from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;


export const Info = styled.div`
&>div.message{
  line-hight:40px;
  font-size:1.4em;
  color:red;
}
&>button{
  display:block;
  height:40px;
  width:70px;
  background-color:#212121;
  box-shadow:0px 0px 10px #212121;
}
`