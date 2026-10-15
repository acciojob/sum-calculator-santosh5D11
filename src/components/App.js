import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [number, setNumber] = useState("");
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const sum = numbers.reduce((total, num) => total + num, 0);
      setTotalSum(sum);
    }, 0);

    return () => clearTimeout(timer);
  }, [numbers]);

  const handleChange = (e) => {
    const value = e.target.value;
    setNumber(value);

    if (value !== "" && !isNaN(Number(value))) {
      setNumbers((prevNumbers) => [...prevNumbers, parseInt(value, 10)]);
      setNumber("");
    }
  };

  return (
    <div>
      <h1>Sum Calculator</h1>

      <input
        type="number"
        min="0"
        value={number}
        onChange={handleChange}
        placeholder=""
      />

      <p>
        Sum: <span>{totalSum}</span>
      </p>
    </div>
  );
};

export default App;
