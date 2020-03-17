import React from "react"

class AddNumber extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      size:1
    }
  }
  handleValueChange = (e) => {
    this.setState({size: Number(e.target.value)});
  }
  handleOnClick = () => {
    this.props.handleOnClick(this.state.size);
  }
  render() {
    return (
      <div>
        <h1>Add Number</h1>
        <input type="button" value="+" onClick={this.handleOnClick}></input>
        <input type="text" value={this.state.size} onChange={this.handleValueChange}></input>
      </div>
    )
  }
}

export default AddNumber;