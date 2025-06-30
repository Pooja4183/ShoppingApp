import React, { useState } from "react";

function TodoApp() {
  const [userInput, setUserInput] = useState("");
  const [arrayData, setArrayData] = useState([]);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);
  const [serchItem, setSearchitem] = useState("");
  const [matchedValue, setMatchedvalue] = useState('');

  const addList = () => {
    if (userInput !== "") {
      setArrayData([...arrayData, userInput]);
      setUserInput("");
    }
  };

  const deleteItems = (index) => {
    let newArryList = arrayData.filter((_, i) => i !== index);
    setArrayData(newArryList);
  };

  const editItems = (clickedIndex) => {
    setCurrentEditIndex(clickedIndex);
    setUserInput(arrayData[clickedIndex]);
  };

  const updateItem = () => {
    let newupdatedArray = [...arrayData];
    newupdatedArray[currentEditIndex] = userInput;
    setArrayData(newupdatedArray);
    setUserInput("");
    setCurrentEditIndex(null);
  };

  const handlingSearch = () => {
    let SearchData = [...arrayData]
    if(!serchItem.trim()){
      setMatchedvalue("enter serach item");
      return;
    }
    const matchedvalue = SearchData.find((item) => item.toLowerCase() === serchItem.toLowerCase());
setMatchedvalue(matchedvalue ? matchedvalue : "Not found" );
    console.log("search input value: ", serchItem);
    console.log("output value: ", matchedvalue);
    
  };

  return (
    <div style={styles.container}>
        {/* <div className="p-10" data-theme="cupcake">
      <h1 className="text-3xl font-bold text-blue-500 mb-4">Tailwind Test</h1>
      <button className="btn btn-primary">DaisyUI Button</button>
    </div> */}
    
   
      <h2 style={styles.heading}>Todo App</h2>
<p>Your searched itme : {matchedValue}</p>
      <div style={styles.searchBox}>
        <input
          type="text"
          value={serchItem}
          onChange={(e) => setSearchitem(e.target.value)}
          placeholder="Search item"
          style={styles.searchInput}
        />
        <button onClick={handlingSearch} style={styles.searchButton}>
          Search
        </button>
      </div>

      <div style={styles.inputBox}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter item"
          style={styles.input}
        />
        <button
          onClick={currentEditIndex === null ? addList : updateItem}
          style={styles.button}
        >
          {currentEditIndex === null ? "Add" : "Update"}
        </button>
      </div>

      <ul style={styles.list}>
        {arrayData.map((items, index) => (
          <li key={index} style={styles.listItem}>
            <span>{items}</span>
            <div>
              <button onClick={() => editItems(index)} style={styles.smallBtn}>
                Edit
              </button>
              <button
                onClick={() => deleteItems(index)}
                style={styles.smallBtn}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#f7f7f7",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  searchBox: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    alignItems: "center",
  },
  inputBox: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    marginRight: "10px",
  },
  searchInput: {
    flex: 1,
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #999",
    fontSize: "14px",
    marginRight: "10px",
    outlineColor: "#4caf50",
  },
  button: {
    padding: "10px 15px",
    borderRadius: "5px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
  searchButton: {
    padding: "8px 15px",
    borderRadius: "5px",
    backgroundColor: "#607d8b", // bluish-gray
    color: "white",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  smallBtn: {
    marginLeft: "10px",
    padding: "5px 10px",
    backgroundColor: "#2196f3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default TodoApp;