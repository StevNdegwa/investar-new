import styled from "styled-components";

export const Wrapper = styled.div`
width:400px;
border-radius:10px;
background-color:#263238;
`;

export const Controls = styled.div`
width:100%;
height:50px;
padding:5px;
display:flex;
justify-content:space-between;
& button{
  min-width:80px;
  margin:0 5px;
  padding:0 1em;
  height:40px;
  background-color:#455a64;
  border:none;
  border-radius:5px;
  color:white;
  &:hover{
    box-shadow:0px 0px 5px #455a64;
  }
}
& div.icon{
    color:#455a64;
    &:hover{
      color:#cfd8dc;
    }
    &>svg{
      height:100%;
      width:40px;
    }
}
`;

export const Header = styled(Controls)`
height:40px;
border-bottom:4px solid #2196f3;
`;

export const BreadCrumbs = styled.div`
height:40px;
color:#cfd8dc;
background-color:#37474f;
line-height:40px;
display:flex;
box-shadow:inset 0px 0px 10px #263238;
&>div.level{
  height:100%;
  cursor:pointer;
  display:flex;
  &:hover{
    text-decoration:underline;
  }
  & > span.icon > svg{
    height:40px;
    width:20px;
  }
}
`;

export const Main = styled.form`
width:100%;
`;

export const Indicator = styled.div`
width:100%;
height:50px;
padding:0 0.5em;
& svg{
  height:50px;
  width:20px;
  color:#455a64;
}
&>label{
  display:inline-block;
  width:calc(100% - 30px);
  height:100%;
  position:relative;
  cursor:pointer;
  &>input{
    display:none;
    &:checked + span.check>svg{
      color:#2196f3;
    }
  }
  &>span.label{
    line-height:50px;
    position:absolute;
    left:30px;
    color:#eceff1;
    font-weight:600;
  }
}
&>div.settings{
  display:inline-block;
  width:30px;
  height:100%;
}
`;