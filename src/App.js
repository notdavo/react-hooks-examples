import React, { useState, useEffect } from "react";
import "./App.css";

// Importa el proveedor del tema
import { ThemeProvider } from "./components/ThemeContext";

// Importa los componentes
import Eyes from "./components/Eyes";
import Timer from "./components/Timer";
// import DisplayTheme from "./components/DisplayTheme";
// import ReducerExample from "./components/ReducerExample";
// import CallbackExample from "./components/CallbackExample";
// import MemoExample from "./components/MemoExample";
// import RefExample from "./components/RefExample";
// import ImperativeHandleExample from "./components/ImperativeHandleExample";
// import LayoutEffectExample from "./components/LayoutEffectExample";
// import DebugValueExample from "./components/DebugValueExample";

const App = () => {
  const [timer, setTimer] = useState(false);
  const [timerDeleted, setTimerDeleter] = useState(false);

  return (
    <ThemeProvider>
      <div className="app">
        <section id="useState">
          <h2>useState</h2>
          <h2>Example game:</h2>
          <span>
            Press the arrows below to modify the state of the component.
          </span>
          <Eyes />
        </section>
        <section id="useEffect">
          <h2>useEffect</h2>
          <h2>Example code:</h2>
          <pre>
            <code>
              {`useEffect(() => {
  const interval = setInterval(() => {
    setSeconds((prev) => prev + 1);
  }, 1000);

  return () => clearInterval(interval);
}, []);`}
            </code>
          </pre>
          {timer && (
            <p>
              The component Timer have been mounted and the time start counting.
            </p>
          )}
          {timerDeleted && !timer && (
            <p>
              The component Timer have been unmounted, so clearInterval is
              excecuted.
            </p>
          )}
          {timer && <Timer />}
          <div className="buttonContainer">
            <button
              onClick={() => {
                setTimer(true);
                setTimerDeleter(false);
              }}
            >
              Create timer
            </button>
            <button
              onClick={() => {
                setTimer(false);
                setTimerDeleter(true);
              }}
            >
              Delete timer
            </button>
          </div>
        </section>
        {/* <section id="useContext">
          <h2>useContext</h2>
          <DisplayTheme />
        </section>
        <section id="useReducer">
          <h2>useReducer</h2>
          <ReducerExample />
        </section>
        <section id="useCallback">
          <h2>useCallback</h2>
          <CallbackExample />
        </section>
        <section id="useMemo">
          <h2>useMemo</h2>
          <MemoExample />
        </section>
        <section id="useRef">
          <h2>useRef</h2>
          <RefExample />
        </section>
        <section id="useImperativeHandle">
          <h2>useImperativeHandle</h2>
          <ImperativeHandleExample />
        </section>
        <section id="useLayoutEffect">
          <h2>useLayoutEffect</h2>
          <LayoutEffectExample />
        </section>
        <section id="useDebugValue">
          <h2>useDebugValue</h2>
          <DebugValueExample />
        </section> */}
      </div>
    </ThemeProvider>
  );
};

export default App;
