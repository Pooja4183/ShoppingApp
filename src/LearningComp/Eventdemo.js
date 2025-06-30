import React from "react";

class Eventdemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { myvalue: "Default" };
    this.state = { textone: " " };
  }

  btnClick() {
    this.setState({ myvalue: "Pooja" });
  }

  printData(e) {
    this.setState({ textone: e.target.value });
    console.log(e.target.value);
  }

  render() {
    return (
      <div style={{ marginTop: "5%", marginLeft: "15%" }}>
        
        <input
          type="button"
          value="click here"
          onClick={this.btnClick.bind(this)}
        />{" "}
        State value is :
         {this.state.myvalue}
        <br />
        <input type="text" name="text1" onChange={this.printData.bind(this)} />
        <p>Value is : {this.state.textone}</p>
      </div>
    );
  }
}

export default Eventdemo;
