import React from "react";
import range from "../../../../lib/utils/range.js"

import {Loader} from "./styles";

export default function ChartLoader(){
  return (<>
    <defs>
      <linearGradient id="loading1" x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
        {range(0, 1, 0.04).map((r)=>(<React.Fragment key={r}>
          <stop offset={r} stopColor="#455a64"/>
          <stop offset={r} stopColor="#546e7a"/>
        </React.Fragment>))}
      </linearGradient>
      <linearGradient id="loading2" x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
        {range(0, 1, 0.04).map((r)=>(<React.Fragment key={r}>
          <stop offset={r} stopColor="#546e7a"/>
          <stop offset={r} stopColor="#455a64"/>
        </React.Fragment>))}
      </linearGradient>
    </defs>
    <Loader x="0" y="0" width="100%" height="100%"/>
  </>)
}