import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Welcome from "./Welcome";
import GeneratedRecipe from "./GeneratedRecipe";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //install using the command npm i react-router-dom

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/welcome" element={<Welcome />} />
          <Route exact path="/newrecipe" element={<GeneratedRecipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
