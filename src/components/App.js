import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nums = input
        .split(",")
        .map(Number)
        .filter((n) => !isNaN(n));

      setNumbers(nums);
      setSum(nums.reduce((a, b) => a + b, 0));
    }, 0);

    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div>
      <h2>Sum Calculator</h2>

      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder=""
      />

      <h3>Sum: {sum}</h3>
    </div>
  );
};

export default App;
2;
