import React from "react"
import store from '../store'

class DisplayNumber extends React.Component {
 
  constructor(props){
    super(props);
    store.subscribe(function(){
      this.setState({number: store.getState().number});
    }.bind(this));
    this.state = {
      number: store.getState().number
    }
  }
  render() {
    return (
      <div>
        <h1>Display Number</h1>
        <input type="text" value={this.state.number} readOnly></input>
      </div>
    )
  }
}

export default DisplayNumber;