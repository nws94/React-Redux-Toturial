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
  
  render() {
    return (
      <div>
        <h1>Add Number</h1>
        <input type="button" value="+" onClick={function(){
            this.props.onClick(this.state.size);
        }.bind(this)}></input>
        <input type="text" value={this.state.size} onChange={this.handleValueChange}></input>
      </div>
    )
  }
}

export default AddNumber;