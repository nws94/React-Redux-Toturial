import DislayNumber from "../components/DisplayNumber"
import {connect} from "react-redux"

function mapReduxStateToReactProps(state) {
  return {
    number: state.number
  }
}

export default connect(mapReduxStateToReactProps)(DislayNumber);
// import React from "react"
// import store from '../store'

// export default class extends React.Component {
//   constructor(props){
//     super(props);
//     store.subscribe(function(){
//       this.setState({number: store.getState().number});
//     }.bind(this));
//     this.state = {
//       number: store.getState().number
//     }
//   }

//   render() {
//     return (
//       <DislayNumber number={this.state.number} unit={this.props.unit}></DislayNumber>
//     )
//   }
// }