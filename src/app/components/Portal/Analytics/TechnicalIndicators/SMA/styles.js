import styled from "styled-components";;

export const Wrapper = styled.div`
width:100%;
height:calc(100%  - 140px);
overflow:auto;
`
export const Controls = styled.div`
width:100%;
height:50px;
background-color:#263238;
color:#eceff1;
display:flex;
& input, select{
  width:70px;
  height:30px;
  margin:0 5px;
  cursor:pointer;
  border-radius:5px;
  border:none;
  outline:none;
  color:#263238;
  background-color:#eceff1;
  padding:0 0.3em;
  line-height:30px;
}
&>div{
  margin:0 5px
}
`;

export const Main = styled.div`
width:100%;
padding:1em;
`

export const Table = styled.table`
width:400px;
border-collapse:collapse;
color:#263238;
& thead, td.index, td.date{
  background-color:#263238;
  color:#eceff1;
}
& tr,td,th{
  border:1px solid #90a4ae;
  text-align:center;
  height:40px;
  line-height:40px;
}
& td.index{
  width:50px;
}
&  td.date{
  width:150px;
}
`;