import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
function App() {
  const [message, setMessage] = useState("");
  // useEffect(() => {
  //   fetch("http://localhost:5000/")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);
  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
