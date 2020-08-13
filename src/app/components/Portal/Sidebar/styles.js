import styled, {css} from "styled-components";

export const Wrapper = styled.div`
color:#29b6f6;
border-left:1px outset #263238;
`

export const Tab = styled.div`
width:59px;
height:60px;
border-right:none;
background-color:transparent;
transition:border-right 200ms, background-color 200ms;
cursor:pointer;
&>div.icon{
  width:100%;
  text-align:center;
  height:60px;
  &>svg{
    height:60px;
    width:30px;
  }
}
${({selected})=>selected && css`
background-color:#37474f;
border-right:4px solid #29b6f6;
`
}
`