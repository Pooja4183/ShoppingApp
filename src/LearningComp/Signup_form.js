import React from "react";

const Signup = () => {
  const [formData, setformData] = React.useState({
    name: "",
    number: "",
    gender: "",
    state: "Delhi",
  });

  const printData = (e) => {
    const { name, value } = e.target;

    setformData((data) => ({
      ...data,
      [name]: value,
    }));

    // setformData({[e.target.name]:e.target.value});
  };

  const submitButton = (e) => {
    e.preventDefault();
    console.log(`
      Name: ${formData.name}
      gender: ${formData.gender}
      State: ${formData.state} `);
  };
  return (
    <>
      <div style={{ padding: "10%" }}>
        <h1>Signup form</h1>
        <form onSubmit={submitButton}>
          <label>Enter your name :</label>
          <input
            style={{ margin: "2%" }}
            type="text"
            name="name"
            onChange={printData}
            placeholder="your name"
          />
          <br />
          <label>Enter your number :</label>
          <input
            style={{ margin: "2%" }}
            type="number"
            name="number"
            onChange={printData}
            placeholder="your number"
          />
          <br />
          <div> Gender:</div>
          <label>Male</label>
          <input
            style={{ margin: "2%" }}
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={printData}
            placeholder="city"
          />
          <br />
          <label>Female:</label>
          <input
            style={{ margin: "2%" }}
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={printData}
            placeholder="city"
          />
          <br />
          <label>Enter your address details :</label>
          State :
          <select name="state" value={formData.state} onChange={printData}>
            <option value="">Select</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Delhi">Delhi</option>
            <option value="Maharashtra">Maharashtra</option>
          </select>
          <br />
          <input type="submit" value="Submit" />
        </form>
        <hr />
        <p>State of Component</p>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </>
  );
};

export default Signup;
