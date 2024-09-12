import React, { useRef, useImperativeHandle, forwardRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusInput() {
      inputRef.current.focus();
    },
  }));

  return <input ref={inputRef} type="text" />;
});

const ImperativeHandleExample = () => {
  const customInputRef = useRef();

  return (
    <div>
      <CustomInput ref={customInputRef} />
      <button onClick={() => customInputRef.current.focusInput()}>
        Enfocar Custom Input
      </button>
    </div>
  );
};

export default ImperativeHandleExample;
