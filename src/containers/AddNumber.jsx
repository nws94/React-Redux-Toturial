import AddNumber from "../components/AddNumber"
import {connect} from "react-redux"

function mapReduxDispatchToReactProps(dispatch) {
  return {
    onClick:function(size){
            dispatch({type: "INCREMENT", size: size});
          }
  }
}

export default connect(null,mapReduxDispatchToReactProps)(AddNumber);
// import React from "react"
// import store from '../store'

// export default class extends React.Component {
  

//   render() {
//     return (
//     <AddNumber onClick={function(size){
//       store.dispatch({type: "INCREMENT", size: size});
//     }}></AddNumber>
//     )
//   }
// }
