import React from 'react';

import Open from "../Open";
import {Wrapper, Main, Header, Footer} from "./styles";

export default function Home({openApplication}){
  return (<Wrapper>
  <Header></Header>
  <Main>
    <Open openApplication={openApplication}/>
  </Main>
  <Footer></Footer>
  </Wrapper>)
}