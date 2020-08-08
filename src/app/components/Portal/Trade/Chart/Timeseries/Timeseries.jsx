import React from "react";

export default function Timeseries(){
  return (
    <svg width="100%" height="100%">
      <defs>
        <pattern id="bg-grid" width="100" height="150" patternUnits="userSpaceOnUse">
          <rect width="100" height="150" fill="none" stroke="#fafafa" stroke-width="0.05"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg-grid)"/>
      <text dy="1em">Timeseries Chart</text>
    </svg>
  );
}