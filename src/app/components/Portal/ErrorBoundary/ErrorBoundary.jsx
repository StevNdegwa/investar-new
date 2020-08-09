import React from "react";

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
      
      return (<div>
        Application error
      </div>)
      
    }else{
      
      return this.props.children;
    
    }
  }
}

export default ErrorBoundary;