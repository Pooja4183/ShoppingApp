import React from "react";

class Map_class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mytext: "",
      myarray: [],
    };
  }

  changeUserInput(input) {
    this.setState({
      mytext: input,
    });
  }

  addtoList(input) {
    let listArray = this.state.myarray;
    listArray.push(input);
    this.setState({
      myarray: listArray,
      mytext: "",
    });
  }

  addtoList(){
  let a = this.state.mytext;
  let b = this.state.myarray;
  b.push(a);
  this.setState({
      myarray:b,
      mytext:""
  })
  }

  render() {
    return (
      <>
        Name:{" "}
        <input
          type="text"
          placeholder="Enter data"
          name="textname"
          value={this.state.mytext}
          onChange={(e) => this.changeUserInput(e.target.value)}
        />
        <button onClick={this.addtoList.bind(this)}>Click here</button>
        {/* <button onClick={() => this.addtoList(this.state.mytext)}>
          Click here
        </button> */}
        <h4>
          {this.state.myarray.map((val) => (
            <li>{val}</li>
          ))}
        </h4>
      </>
    );
  }
}
export default Map_class;
