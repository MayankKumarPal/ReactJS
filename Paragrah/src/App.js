import React from "react";
import "./styles.css";

class App extends React.Component {
  state={
    count:0 //diffing a variable count and initialize  with zero  
  };
check=()=>{  // method to check how many times the paragraph has been clicked
  const t=this.state.count;  //diffining a const t 
  this.setState({count:t+1})  // updating the count value 
}

  render() {
    return (
      <div>
      
        <p onClick={this.check}>This Is The Main Paragraph</p>  // Paragraph where on clicking it the method check will be called
        <h2>You have Clicked the Paragraph :{this.state.count} times </h2>  // printing the value on browser how many times the paragraph has been clicked

      </div>
    );
  }
}
export default App;
