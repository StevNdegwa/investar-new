import styled from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:100%;
background-image:linear-gradient(#03a9f4, #29b6f6, #81d4fa);
position:absolute;
padding:1em;
display:${(props)=>(props.show ? "block" : "none")};
z-index:400;
&>section{
  width:100%;
  padding-left:100px;
  display:flex;
  &>subdir-container{
    position:relative;
    width:100%;
  }
  @media only screen and (max-width:700px){
    padding-left:10px;
  }
}
`;

export const Dir = styled.ul`
font-size:3em;
width:300px;
font-weight:600;
color:#eeeeee;
cursor:pointer;
&>li{
  height:80px;
  line-height:80px;
  &:hover{
    text-shadow:1px 1px 8px white;
  }
  @media only screen and (max-width:700px){
    height:40px;
    line-height:40px;
  }
  &.active{
    color:white;
    & a{
      color:white;
    }
  }
}
& a{
  text-decoration:none;
  color:#eeeeee;
  &.active{
    color:white;
  }
}
@media only screen and (max-width:700px){
  font-size:1.7em;
  width:150px;
}
`;

export const Subdir = styled.ul`
position:absolute;
display:${(props)=>props.show ? "block" : "none"};
font-weight:600;
font-size:1.5em;
& a{
  text-decoration:none;
  color:#e0e0e0;
  &:hover{
    text-decoration:underline;
  }
}
&>li{
  height:40px;
  line-height:40px;
  margin-left:0;
}
&.subdir-enter{
  opacity:0; 
  &>li{
   transform:translate(20px, 0);
  }
}
&.subdir-enter-active{
  opacity:1;
  transition:opacity 200ms linear; 
  &>li{
    transform:translate(0px, 0);
    transition:transform 200ms linear; 
  }
  &>li:nth-last-child(3){
    transition:transform 250ms linear; 
  }
  &>li:nth-last-child(2){
    transition:transform 300ms linear; 
  }
  &>li:last-child{
    transition:transform 350ms linear; 
  }
}
&.subdir-exit{
  opacity:1;   
  &>li{
    transform:translate(20px, 0);
  }
}
&.subdir-exit-active{
  opacity:0;
  transition:opacity 200ms linear; 
  &>li{
    transform:translate(20px, 0);
    transition:transform 200ms linear; 
  }
  &>li:nth-last-child(3){
    transition:transform 250ms linear; 
  }
  &>li:nth-last-child(2){
    transition:transform 300ms linear; 
  }
  &>li:last-child{
    transition:transform 350ms linear; 
  }
}
@media only screen and (max-width:700px){
  font-size:1em;
}
`;