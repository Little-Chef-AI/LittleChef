import logo from "./logo.svg";
import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Welcome from "./pages/Welcome";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //install using the command npm i react-router-dom
import SavedRecipes from "./pages/SavedRecipes";

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
          <Route exact path="/savedrecipes" element={<SavedRecipes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
