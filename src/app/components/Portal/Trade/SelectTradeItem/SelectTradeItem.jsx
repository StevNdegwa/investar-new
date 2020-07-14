import React from "react";
import {MdClear} from "react-icons/md";
import {CSSTransition} from "react-transition-group";

import Pagination from "./Pagination";

import {Wrapper, Title, Main, Tabs, Tab, Pages, Page} from "./styles";

export default function SelectTradeItem({close, show}){
  const [tabs, setTabs] = React.useReducer(tabsReducer, {stocks:true, forex:false, currencies:false});
  
  return (<CSSTransition in={show} timeout={200} classNames="pop">
    <Wrapper> 
      <Title>
        <div>Current Item</div>
        <div className="clear" onClick={close}><MdClear size="1.3em"/></div>
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
              <Pagination/>
            </Page>
          </CSSTransition>
          <CSSTransition in={tabs.forex} timeout={100} classNames="slide-up">
            <Page show={tabs.forex}>
              Forex
            </Page>
          </CSSTransition>
          <CSSTransition in={tabs.currencies} timeout={100} classNames="slide-up">
            <Page show={tabs.currencies}>
              Currencies
            </Page>
          </CSSTransition>
        </Pages>
      </Main>
    </Wrapper>
  </CSSTransition>);
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