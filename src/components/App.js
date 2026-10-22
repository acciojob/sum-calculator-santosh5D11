import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    setSum(numbers.reduce((a, b) => a + b, 0));
  }, [numbers]);

  return (
    <div>
      <h2>Sum Calculator</h2>

      <button onClick={() => setNumbers([...numbers, 10])}>Add 10</button>

      <button onClick={() => setNumbers([...numbers, 20])}>Add 20</button>

      <h3>Sum: {sum}</h3>
    </div>
  );
};

export default App;
