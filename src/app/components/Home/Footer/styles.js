import styled from "styled-components";

export const Wrapper = styled.div`
background-color:#37474f;
border-top: 1px solid #cfd8dc;
`;

export const Top = styled.div`
min-height:300px;
padding:1em 2em;
display:flex;
&>ul{
  width:80%;
  color:white;
  line-height:30px;
  &>li{
    float:left;
    width:calc(25% - 20px);
    margin:10px;
    font-weight:400;
    &>ul.sub-list{
      width:100%;
      & a{
        text-decoration:none;
        color:#cfd8dc;
      }
    }
  }
}
&>div.payment-methods{
  width:20%;
  color:white;
  &>div.content{
    & a{
      color:white;
      text-decoration:none;
    }
    & svg{
      width:40px;
      height:40px;
      margin-right:10px;
    }
  }
}
@media only screen and (max-width:600px){
flex-direction:column;
&>ul{
  width:100%;
  &>li{
    clear:both;
    width:100%;
  }
}
&>div.payment-methods{
  width:100%;
}
}
`;

export const Bottom = styled.div`
height:50px;
padding:0.5em;
font-size:1.3em;
border-top: 1px solid #cfd8dc;
display:flex;
justify-content:space-between;
font-weight:500;
color:white;
&>div.social-media{
  & a{
    color:#cfd8dc;
  }
  & svg{
    width:30px;
    height:30px;
    margin-right:5px;
  }
}
`;