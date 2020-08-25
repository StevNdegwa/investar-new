import React from "react";
import PropTypes from "prop-types";
import {MdExpandMore, MdMultilineChart, MdShowChart} from "react-icons/md";
import {AiOutlineLayout} from "react-icons/ai";

import DialogContainer from "../DialogContainer";
import SelectTradeItem from "./SelectTradeItem";
import SetLayout from "./SetLayout";
import Chart from "./Chart";
import ChartType from "./ChartType";
import SetTechnicalIndicators from "./SetTechnicalIndicators";
import {Wrapper, ToolBar, Tool} from "./styles";

import TradeContext from "./TradeContext";

export default function Trade(props){
  const [activeItemDialog, setActiveItemDialog] = React.useState(false);
  const [layoutDialog, setLayoutDialog] = React.useState(false);
  const [chartTypeDialog, setChartTypeDialog] = React.useState(false);
  const [duration, setDuration]  = React.useState("DAILY");
  const [technicalIndicators, setTechnicalIndicators] = React.useState(false);
  
  let activeIndictors = React.useMemo(()=>{
    return props.technicalIndicatorsList.filter((i)=>i.options.active);
  }, [props.technicalIndicatorsList]);
  
  return (
    <TradeContext.Provider 
      value = {
        {
          activeItem: {item: props.activeItem, setActiveItem: props.setActiveItem, closeDialog: ()=>setActiveItemDialog(false)},
          duration,
          layout: {active: props.viewLayout, setLayout: props.setViewLayout},
          timeseriesChartType:{active: props.timeseriesChartType, setChartType: props.setTimeseriesChartType},
          activeIndictors
        }
      }
    >
    <Wrapper>
      <DialogContainer show={activeItemDialog} close={()=>setActiveItemDialog(false)}>
        <SelectTradeItem
          activeItemDialog={activeItemDialog}
          stocksList={props.stocksList} 
          getStocksList={props.getStocksList}
          clearStocksTimeseries={props.clearStocksTimeseries}
          />
      </DialogContainer>
      <DialogContainer show={layoutDialog} close={()=>setLayoutDialog(false)}>
        <SetLayout layoutDialog={layoutDialog} closeDialog={()=>setLayoutDialog(false)}/>
      </DialogContainer>
      <DialogContainer show={technicalIndicators} close={()=>setTechnicalIndicators(false)}>
        <SetTechnicalIndicators
          show={technicalIndicators}
          indicatorsList={props.technicalIndicatorsList} 
          updateOptions={props.updateTechnicalIndicatorOptions}
          setActive={props.setActiveTechnicalIndicators}
          closeDialog={()=>setTechnicalIndicators(false)}
        />
      </DialogContainer>
      <DialogContainer show={chartTypeDialog} close={()=>setChartTypeDialog(false)}>
        <ChartType 
          open={chartTypeDialog} 
          closeDialog={()=>setChartTypeDialog(false)}/>
      </DialogContainer>
      <ToolBar className="level-300">
        <Tool onClick={()=>setActiveItemDialog(true)}>
          <div>{props.activeItem.symbol}</div>
          <div className="icon"><MdExpandMore/></div>
        </Tool>
        <Tool>
          <button 
            className={`${(duration === "DAILY") && "active"}`} 
            onClick={()=>setDuration("DAILY")}
            title="Daily"
          >D</button>
          <button 
            className={`${(duration === "WEEKLY") && "active"}`} 
            onClick={()=>setDuration("WEEKLY")}
            title="Weekly"
          >W</button>
          <button 
            className={`${(duration === "MONTHLY") && "active"}`}
            onClick={()=>setDuration("MONTHLY")}
            title="Monthly"
          >M</button>
        </Tool>
        <Tool onClick={()=>setLayoutDialog(true)} title="Select Layout">
          <div className="icon"><AiOutlineLayout/></div>
        </Tool>
        <Tool onClick={()=>setTechnicalIndicators(true)} title="Set Technical Indicators">
          <div className="icon"><MdMultilineChart/></div>
        </Tool>
        <Tool onClick={()=>setChartTypeDialog(true)} title="Select chart type">
          <div className="icon"><MdShowChart/></div>
        </Tool>
      </ToolBar>
      <Chart stocksTimeseries={props.stocksTimeseries} getStocksTimeseries={props.getStocksTimeseries}/>
    </Wrapper>
  </TradeContext.Provider>);
}

Trade.propTypes = {
  stocksList: PropTypes.object.isRequired,
  getStocksList: PropTypes.func.isRequired,
  stocksTimeseries: PropTypes.object.isRequired,
  getStocksTimeseries: PropTypes.func.isRequired,
  clearStocksTimeseries: PropTypes.func.isRequired,
  technicalIndicatorsList: PropTypes.array.isRequired,
  updateTechnicalIndicatorOptions: PropTypes.func.isRequired,
  setActiveTechnicalIndicators: PropTypes.func.isRequired,
  activeItem:PropTypes.object.isRequired,
  setActiveItem:PropTypes.func.isRequired,
  viewLayout:PropTypes.string.isRequired,
  setViewLayout:PropTypes.func.isRequired,
  timeseriesChartType:PropTypes.string.isRequired,
  setTimeseriesChartType:PropTypes.func.isRequired
}