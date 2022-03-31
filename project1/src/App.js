import "./App.css";
import Header from "./components/Header";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter, Router,Route } from "react-router-dom";
import About from "./components/About"

function App() {
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      alert("Dark mode has been enabled", "success");
      document.title = "Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "Dark Mode";
    }
  };
  return (
     
    <div className="App">
      <Header mode={mode} toggleMode={toggleMode} />
      <h1>Enter Data to convert</h1>

      <TextForm mode={mode} />
      
    </div>
     
  );
}

export default App;
