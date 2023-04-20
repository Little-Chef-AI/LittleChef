import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "./Home";
import Welcome from "./Welcome";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //install using the command npm i react-router-dom

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/welcome" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
