import React from "react"

class AddNumber extends React.Component {
  render() {
    return (
      <div>
        <h1>Add Number</h1>
        <input type="button" value="+"></input>
        <input type="text" value="0"></input>
      </div>
    )
  }
}

export default AddNumber;