import styled from "styled-components";

export const Wrapper = styled.div`
width:100%;
height:150px;
& .control>svg{
  height:20px;
  width:20px;
}
`;

export const Ul = styled.ul`
width:100%;
overflow:hidden;
&>li{
 height:20px;
 padding:0 0.3em;
 line-height:20px;
 &.control{
  text-align:right;
  &>svg{
    height:20px;
    width:20px;
  }
 }
}
display:${({is_showing})=>is_showing ? "block" : "none"};
`;

export const Chart = styled.div`
width:100%;
height:100%;
position:relative;
display:${({is_showing})=>is_showing ? "block" : "none"};
color:#212121;
&>div{
  position:absolute;
  display:none;
  transition:display 1s;
  &.control{
    width:20px;
    height:20px;
    right:5px;
    &>svg{
      height:20px;
      width:20px;
    }
  }
  &.quote{
    font-weight:600;
    font-size:1.5em;
    line-height:30px;
    &>div{
      font-size:16px;
      line-height:20px;
      color:${({posChange})=>posChange ? "#00FF00" : "red"};
    }
  }
}
&:hover{
  & > div{
    display:block;
  }  
}
&>svg.gq-chart{
  background-color:#e0e0e0;
  &>g.graph{
    stroke-linecap:round;
    fill:none;
    &>path.line{
      stroke:${({posChange})=>posChange ? "#00FF00" : "red"};
    }
  }
}
`;
