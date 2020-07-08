import styled from "styled-components";

export const OpenDialog = styled.div`
position:absolute;
width:450px;
padding:1em;
background-color:rgba(38, 50, 56,0.8);
box-shadow:0px 0px 5px #263238;
display:${(props)=>props.show ? "block" : "none"};
border-radius:3px;
& div.close{
  position:relative;
  height:30px;
  &>span{
    position:absolute;
    right:10px;
  }
}
&.open-enter{
  transform:scale(0.8);
}
&.open-enter-active{
  transform:scale(1);
  transition:transform 200ms linear;
}
&.open-exit{
  transform:scale(1);
}
&.open-exit-active{
  transform:scale(0.8);
  transition:transform 200ms linear;
}
`;


export const HIW = styled.div`
height:250px;
width:80%;
&>div.content{
  background-color:#263238;
  box-shadow:0px 0px 10px #263238;
  display:flex;
  height:150px;
  border-radius:5px;
  padding:1em;
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
  height:410px;
  &>div.content{
    flex-direction:column;
    height:360px;
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
    background-color:#263238;
    margin:10px;
    box-shadow:0px 0px 10px #263238;
    padding:1em;
    border-radius:3px;
    &>a{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      border-radius:3px;
      width:100%;
      height:100%;
      text-decoration:none;
      color:#cfd8dc;
      border:1px solid #81d4fa;
      & div.name{
        font-size:1.4em;
        text-align:center;
      }
      &:hover{
        border:1px inset #81d4fa;
        box-shadow:inset 0px 0px 4px #81d4fa;
      }
    }
  }
}
`;
