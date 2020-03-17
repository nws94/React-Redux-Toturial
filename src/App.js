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
 
  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot></AddNumberRoot>
        <DisplayNumberRoot></DisplayNumberRoot>
      </div>
    );
  }
 
}



export default App;
