import React from 'react';

class Stopwatch extends React.Component{
  state={
    runningtime:0,  //diffining the variable running time so that we can perform operation in this ;
    
  }; 
  handlestartclick=()=>     // diffining a method handlestartclick to perform operation when the user click start
  { 
      this.timerId=setInterval(()=>{       // diffining timerId and also setting the interval so the value can be updated after 1 sec
        this.setState({runningtime:this.state.runningtime+1})   // here increasing the interval by one after 1 sec
      },1000);
    

  }
  handlestopclick=()=>  //method to perform stop operation
  {
    clearInterval(this.timerId);  // clearing the interval for timerId
  }
  render(){
    return(
      <div>
      <h1>{this.state.runningtime}</h1>  //printing the value of running time
      <button onClick={this.handlestartclick}>Start</button>  // diffining a button for start counter
      <br/>
      <button onClick={this.handlestopclick}>Stop</button> //diffining a button for stop counter

</div>
    )
  };

}
export default Stopwatch;