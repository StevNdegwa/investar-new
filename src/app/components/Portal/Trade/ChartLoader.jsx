import React from "react"
import {range} from "d3-array";

export default function ChartLoader(){
  return (<>
    <linearGradient id="loading1" x1="0" y1="0" x2="100%" y2="100%">
      {range(0, 1, 0.04).map((r)=>(<><stop offset={r} stop-color="#455a64"/><stop offset={r} stop-color="#546e7a"/></>))}
    </linearGradient>
    <linearGradient id="loading2" x1="0" y1="0" x2="100%" y2="100%">
      {range(0, 1, 0.04).map((r)=>(<><stop offset={r} stop-color="#546e7a"/><stop offset={r} stop-color="#455a64"/></>))}
    </linearGradient>
    <rect x="0" y="0" width="100%" height="100%">
      <animate attributeName="fill" dur="500ms" values="url(#loading1);url(#loading2)" repeatCount="indefinite"/>
    </rect>
  </>)
}