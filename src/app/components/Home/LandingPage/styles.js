import styled from "styled-components";

export const OpenDialog = styled.div`
width:450px;
padding:1em;
position:absolute;
background-color:rgba(38, 50, 56,0.8);
box-shadow:0px 0px 5px #263238;
display:${(props)=>props.show ? "block" : "none"};
border-radius:3px;
&>div.close{
  text-align:right;
  height:30px;
}
`;


export const HIW = styled.div`
min-height:250px;
width:80%;
&>div.content{
  min-height:150px;
  padding:1em;
  background-color:#263238;
  box-shadow:0px 0px 10px #263238;
  display:flex;
  border-radius:5px;
  &>article{
    width:100%;
    height:100%;
    padding:1em;
    display:flex;
    flex-direction:column;
    &>h3{
      font-weight:600;
      &>svg{
        float:left;
        margin:0.1em;
        margin-right:0.5em;
      }
    }
    &>p{
      color:#cfd8dc;
    }
  }
}
@media only screen and (max-width:600px){
  &>div.content{
    flex-direction:column;
    min-height:360px;
  }
}
`;

export const FAD = styled.div`
min-height:350px;
width:90%;
&>div.content{
  width:100%;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
  &>div.device{
    height:250px;
    width:250px;
    margin:10px;
    padding:1em;
    background-color:#263238;
    box-shadow:0px 0px 10px #263238;
    border-radius:3px;
    &>a{
      width:100%;
      height:100%;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      border-radius:3px;
      color:#cfd8dc;
      border:1px solid #81d4fa;
      & div.name{
        font-size:1.4em;
        text-align:center;
      }
      &:hover{
        border:1px inset #81d4fa;
        box-shadow:inset 0px 0px 4px #81d4fa;
        text-decoration:none;
      }
    }
  }
}
@media only screen and (max-width:600px){
  
}
`;
