import React from "react";
import TradeItem from "../TradeItem";

export default function CryptoCurrencies(){
  const [page, setPage] = React.useState("A");
  const [currList, setCurrList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [activeStock, setActiveStock] = React.useState("");

  
  return (<TradeItem loading={loading} currList={currList} selectPage={setPage} activeItem={activeStock}  setActiveItem={setActiveStock}/>);
}