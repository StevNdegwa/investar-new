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
  
  console.log(csv().write(fileData, "utf8", (e, d)=>console.log(d)))
}
loadData();

export default function CryptoCurrencies(){
  const [page, setPage] = React.useState("A");
  const [currList, setCurrList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [activeStock, setActiveStock] = React.useState("");

  
  return (<TradeItem loading={loading} currList={currList} selectPage={setPage} activeItem={activeStock}  setActiveItem={setActiveStock}/>);
}