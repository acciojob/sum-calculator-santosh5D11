import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [input, setInput] = useState("");
  const [sum, setSum] = useState(0);

  useEffect(() => {
    setSum(numbers.reduce((a, b) => a + b, 0));
  }, [numbers]);

  const addNumber = () => {
    if (input.trim() === "") return;

    setNumbers([...numbers, Number(input)]);
    setInput("");
  };

  return (
    <div>
      <h2>Sum Calculator</h2>

      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a number"
      />

      <button onClick={addNumber}>Add Number</button>

      <h3>Sum: {sum}</h3>
    </div>
  );
};

export default App;
