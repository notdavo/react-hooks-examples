import React, { useState, useMemo } from "react";

const MemoExample = ({ number }) => {
  const calculate = (n) => {
    console.log("Calculando...");
    return n * 2;
  };

  const result = useMemo(() => calculate(number), [number]);

  return <p>Resultado: {result}</p>;
};

const App = () => {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>Incrementar</button>
      <MemoExample number={number} />
    </div>
  );
};

export default App;
