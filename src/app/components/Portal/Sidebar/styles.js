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
  height:30px;
  &>svg{
    height:30px;
    width:30px;
  }
}
&>div.label{
  width:100%;
  height:30px;
  text-align:center;
  line-height:30px;
  color:white;
}
${({selected})=>selected && css`
background-color:#37474f;
border-right:4px solid #29b6f6;
`
}
`