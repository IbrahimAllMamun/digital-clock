import React, { useState } from "react";
import "./App.css";

const App = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const setTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(setTime, 1000);
  return (
    <div className="App">
      <h1>{ctime}</h1>
    </div>
  );
};

export default App;
