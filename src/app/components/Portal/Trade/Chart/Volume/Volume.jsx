import React from "react";

import {mouse} from "d3-selection";

export default function Volume(){
  return (
    <svg width="100%" height="100%">
      <defs>
        <pattern id="bg-grid" width="100" height="150" patternUnits="userSpaceOnUse">
          <line x1="0" y1="75" x2="100" y2="75"/>
          <line x1="50" y1="0" x2="50" y2="150"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg-grid)"/>
      <text dy="1em">Volume Chart</text>
    </svg>
  );
}