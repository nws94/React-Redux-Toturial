import React from "react"
import DisplayNumber from "../components/DisplayNumber"


class DisplayNumberRoot extends React.Component {
  render() {
    return (
      <div>
        <h1>Display Number Root</h1>
        <DisplayNumber number={this.props.number}></DisplayNumber>
      </div>
    )
  }
}


export default DisplayNumberRoot;