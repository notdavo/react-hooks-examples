import React, { useRef } from "react";

const RefExample = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Clic en el botón para enfocar"
      />
      <button onClick={handleFocus}>Enfocar</button>
    </div>
  );
};

export default RefExample;
