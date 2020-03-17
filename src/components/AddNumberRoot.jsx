import React from "react";
import AddNumber from "../components/AddNumber"

class AddNumberRoot extends React.Component {
  handleOnClick = (size) => {
    this.props.handleOnClick(size);
  }
  render() {
    return (
      <div>
        <h1>Add Number Root</h1>
        <AddNumber handleOnClick={this.handleOnClick}></AddNumber>
      </div>
    )
  }
}

export default AddNumberRoot;