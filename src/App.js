import React from 'react';
import './App.css';
import AddNumberRoot from "../src/components/AddNumberRoot"
import DisplayNumberRoot from "../src/components/DisplayNumberRoot"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
  }
  handleOnClick = (size) => {
    this.setState({
      number: this.state.number + size
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot handleOnClick={this.handleOnClick}></AddNumberRoot>
        <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>
      </div>
    );
  }
 
}



export default App;
