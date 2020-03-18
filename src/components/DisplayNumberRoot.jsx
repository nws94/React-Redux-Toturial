import React from "react"
import DisplayNumber from "../containers/DisplayNumber"


class DisplayNumberRoot extends React.Component {
  render() {
    return (
      <div>
        <h1>Display Number Root</h1>
        <DisplayNumber unit="kg"></DisplayNumber>
      </div>
    )
  }
}


export default DisplayNumberRoot;