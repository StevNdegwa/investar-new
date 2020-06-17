import styled, {keyframes} from "styled-components";

const loadAnim = keyframes`
from{
  transform:rotate(0deg)
}
to{
  transform:rotate(360deg);
}
`;

export const Loader = styled.div`
width:${(props)=>(!!props.size ? props.size : "30px")};
height:${(props)=>(!!props.size ? props.size : "30px")};
display:inline-block;
border-top:3px solid white;
border-left:3px solid white;
border-radius:50%;
animation:${loadAnim} 1s linear infinite;
`;

