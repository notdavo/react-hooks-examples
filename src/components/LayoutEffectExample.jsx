import React, { useLayoutEffect, useRef } from "react";

const LayoutEffectExample = () => {
  const boxRef = useRef();

  useLayoutEffect(() => {
    console.log("Ancho del cuadro:", boxRef.current.offsetWidth);
  }, []);

  return (
    <div
      ref={boxRef}
      style={{ width: "200px", height: "200px", backgroundColor: "salmon" }}
    />
  );
};

export default LayoutEffectExample;
