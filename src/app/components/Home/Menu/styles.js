import styled from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:100%;
background-image:linear-gradient(#03a9f4, #29b6f6, #81d4fa);
position:absolute;
padding:1em;
display:${(props)=>(props.show ? "block" : "none")};
&.menu-enter{
  opacity:0;
}
&.menu-enter-active{
  opacity:1;
  transition:opacity 200ms linear;
}
&.menu-exit{
  opacity:1;
}
&.menu-exit-active{
  opacity:0;
  transition:opacity 200ms linear;
}
`;