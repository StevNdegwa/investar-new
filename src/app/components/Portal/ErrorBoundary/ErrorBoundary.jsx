import React from "react";

import {Wrapper, Info} from "./styles";

class ErrorBoundary extends React.Component{
  constructor(props){
    super(props);
    this.state = {error:false}
  }
  
  componentDidCatch(){
    this.setState({error:true})
  }
  
  render(){
    if(this.state.error){
      
      return (<Wrapper>
        <Info>
          <div className="message">
            Application error
          </div>
        </Info>
      </Wrapper>)
      
    }else{
      
      return this.props.children;
    
    }
  }
}

export default ErrorBoundary;