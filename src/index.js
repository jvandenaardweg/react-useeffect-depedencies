import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [test, setTest] = useState(false);
  const [something, setSomething] = useState("");

  useEffect(() => {
    if (!something) {
      setSomething("some thing!");
    }

    if (test) {
      setSomething("some test!");
    }
  }, [something, test]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <p>Something: {something}</p>
      <p>Test: {test.toString()}</p>

      <button onClick={() => setTest(true)}>Set test</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
