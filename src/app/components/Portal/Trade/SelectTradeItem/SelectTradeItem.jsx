import React from "react";
import PropTypes from "prop-types";
import {MdClear} from "react-icons/md";
import {FaBtc, FaEuroSign, FaStripeS} from "react-icons/fa"
import {CSSTransition} from "react-transition-group";

import Stocks from "./Stocks";
import Forex from "./Forex";
import CryptoCurrencies from "./CryptoCurrencies";
import TradeContext from "../TradeContext"

import {Wrapper, Title, Main, Tabs, Tab, Pages, Page} from "./styles";

export default function SelectTradeItem(props){
  let tradeContext = React.useContext(TradeContext);
  const [tabs, setTabs] = React.useReducer(tabsReducer, {stocks:true, forex:false, currencies:false});
  const [selectedItem, setSelectedItem] = React.useState(tradeContext.activeItem.item);
  
  
  return (
    <CSSTransition in={props.activeItemDialog} timeout={200} classNames="pop">
      <Wrapper> 
        <Title>
          <div className="trade-item">{selectedItem.symbol}</div>
          <div className="clear-icon" 
            onClick={()=>tradeContext.activeItem.closeDialog()}
          ><MdClear/></div>
        </Title>
        <Main>
          <Tabs>
            <Tab onClick={()=>setTabs({type:"STOCKS"})} active={tabs.stocks}>
              <div className="icon"><FaStripeS/></div>
              <div>Stocks</div>
            </Tab>
            <Tab onClick={()=>setTabs({type:"FOREX"})} active={tabs.forex}>
              <div className="icon"><FaEuroSign/></div>
              <div>Forex</div>
            </Tab>
            <Tab onClick={()=>setTabs({type:"CURRENCIES"})} active={tabs.currencies}>
              <div className="icon"><FaBtc/></div>
              <div>Crypto Currencies</div>
            </Tab>
          </Tabs>
          <Pages>
            <CSSTransition in={tabs.stocks} timeout={100} classNames="slide-up">
              <Page show={tabs.stocks}>
                <Stocks setSelectedItem={setSelectedItem} stocksList={props.stocksList} getStocksList={props.getStocksList} selectedItem={selectedItem}/>
              </Page>
            </CSSTransition>
            <CSSTransition in={tabs.forex} timeout={100} classNames="slide-up">
              <Page show={tabs.forex}>
                <Forex setSelectedItem={setSelectedItem}/>
              </Page>
            </CSSTransition>
            <CSSTransition in={tabs.currencies} timeout={100} classNames="slide-up">
              <Page show={tabs.currencies}>
                <CryptoCurrencies setSelectedItem={setSelectedItem}/>
              </Page>
            </CSSTransition>
          </Pages>
        </Main>
      </Wrapper>
    </CSSTransition>
  );
}

SelectTradeItem.propTypes = {
  getStocksList: PropTypes.func.isRequired,
  stocksList: PropTypes.object.isRequired,
  activeItemDialog:PropTypes.bool.isRequired
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