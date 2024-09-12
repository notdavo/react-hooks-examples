import React, { useState, useDebugValue } from "react";

const useCustomHook = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  useDebugValue(value > 5 ? "Mayor que 5" : "Menor o igual a 5");
  return [value, setValue];
};

const DebugValueExample = () => {
  const [value, setValue] = useCustomHook(0);

  return (
    <div>
      <p>Valor: {value}</p>
      <button onClick={() => setValue(value + 1)}>Incrementar</button>
    </div>
  );
};

export default DebugValueExample;
