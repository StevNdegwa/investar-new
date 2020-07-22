import React from "react";
import PropTypes from "prop-types";
import {MdClear} from "react-icons/md";
import {CSSTransition} from "react-transition-group";

import Stocks from "./Stocks";
import Forex from "./Forex";
import CryptoCurrencies from "./CryptoCurrencies";
import TradeContext from "../TradeContext"

import {Wrapper, Title, Main, Tabs, Tab, Pages, Page} from "./styles";

export default function SelectTradeItem(props){
  const [tabs, setTabs] = React.useReducer(tabsReducer, {stocks:true, forex:false, currencies:false});
  
  let tradeContext = React.useContext(TradeContext);
  
  return (<CSSTransition in={tradeContext.activeItem.dialog} timeout={200} classNames="pop">
    <Wrapper> 
      <Title>
        <div className="trade-item">{tradeContext.activeItem.item}</div>
        <div className="clear-icon" onClick={tradeContext.close}><MdClear/></div>
      </Title>
      <Main>
        <Tabs>
          <Tab onClick={()=>setTabs({type:"STOCKS"})}>Stocks</Tab>
          <Tab onClick={()=>setTabs({type:"FOREX"})}>Forex</Tab>
          <Tab onClick={()=>setTabs({type:"CURRENCIES"})}>Currencies</Tab>
        </Tabs>
        <Pages>
          <CSSTransition in={tabs.stocks} timeout={100} classNames="slide-up">
            <Page show={tabs.stocks}>
              <Stocks stocksList={props.stocksList} getStocksList={props.getStocksList}/>
            </Page>
          </CSSTransition>
          <CSSTransition in={tabs.forex} timeout={100} classNames="slide-up">
            <Page show={tabs.forex}>
              <Forex/>
            </Page>
          </CSSTransition>
          <CSSTransition in={tabs.currencies} timeout={100} classNames="slide-up">
            <Page show={tabs.currencies}>
              <CryptoCurrencies/>
            </Page>
          </CSSTransition>
        </Pages>
      </Main>
    </Wrapper>
  </CSSTransition>);
}

SelectTradeItem.propTypes = {
  getStocksList: PropTypes.func.isRequired,
  stocksList: PropTypes.object.isRequired
}

function tabsReducer(state, action){
  switch(action.type){
    case "STOCKS":
      return {stocks:true, forex:false, currencies:false};
    case "FOREX":
      return {stocks:false, forex:true, currencies:false};
    case "CURRENCIES":
      return {stocks:false, forex:false, currencies:true};
    default:
      return state;
  }
}