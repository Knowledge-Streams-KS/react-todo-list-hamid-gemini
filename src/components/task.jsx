import { useState } from "react";
import "./task.css";

const Task = (props) => {
  const [val, setVal] = useState(0);
  const [inputNum, setInputNum] = useState(0);

  const handleIncrement = (param) => {
    setVal(val + param);
  };

  const handleDecrement = (param) => {
    if (val > 0) {
      setVal(val - param);
    }
  };

  const handleInputChange = (event) => {
    const num = Number(event.target.value);
    setInputNum(num);
  };

  return (
    <div className="container">
      <h1>Item Name: {props.item.name}</h1>
      <h1>Rating: {props.item.rating}</h1>
      <h1 className={val > 0 ? "nonZeroHeading" : "zeroHeading"}>
        Count: {val > 0 ? val : "No items in cart"}
      </h1>

      <input 
      type="checkbox" name="" value=""/>
         <label for=""> Task is completed</label>    
         <input
        onChange={handleInputChange}
        type="number"
        placeholder="To be increment/decremented"
      />

      <button onClick={() => handleIncrement(inputNum)}>Increment</button>

      {val > 0 ? (
        <button onClick={() => handleDecrement(inputNum)}>Decrement</button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Task;
