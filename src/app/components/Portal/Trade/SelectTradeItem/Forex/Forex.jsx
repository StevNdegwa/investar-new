import React from "react";
import PropTypes from "prop-types";
import csv from "csv-parser";
import TradeItem from "../TradeItem";

import currencies from "../../../../../data/trade-data/physical_currency_list.csv";

let currenciesList = []

async function loadData(){
  let fileData = await fetch(currencies).then((response)=>{
    return response.text();
  });
}
loadData();

export default function Forex(){
  const [page, setPage] = React.useState("A");
  const [currList, setCurrList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [activeStock, setActiveStock] = React.useState("");

  
  return (<TradeItem loading={loading} currList={currList} selectPage={setPage} activeItem={activeStock}  setActiveItem={setActiveStock}/>);
}