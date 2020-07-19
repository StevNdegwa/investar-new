import React from "react";

import {DataLoaderWrapper} from "./styles";

const Loader = React.memo(()=>{
  return (<DataLoaderWrapper>
    <div className="one"></div>
    <div className="two"></div>
    <div className="three"></div>
  </DataLoaderWrapper>);
});

export default Loader;