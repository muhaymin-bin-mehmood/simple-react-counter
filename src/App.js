import React, {useState} from "react";
import "./globe.css";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function App() {
  let [counter, setCounter] = useState(0)
  const increment = () => setCounter(counter + 1);
  let decrement = () => setCounter(counter - 1);
  if(counter <= 0){
    decrement = () => setCounter(0)
  }
  return (
    <>
      <h1>{counter}</h1>
      <h2>Counter</h2>
      <div className="numberCounter">
        <button onClick={decrement}>
          <RemoveIcon />
        </button>
        <div className="TextField-without-border-radius">
          <TextField type="number" name="url" variant="outlined" value={counter}/>
        </div>
        <button onClick={increment}>
          <AddIcon />
        </button>
      </div>
    </>
  );
}
export default App;
