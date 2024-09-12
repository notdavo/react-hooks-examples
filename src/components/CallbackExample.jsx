import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child renderizado");
  return <button onClick={onClick}>Clic aquí</button>;
});

const CallbackExample = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Botón clicado");
  }, []);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <Child onClick={handleClick} />
    </div>
  );
};

export default CallbackExample;
