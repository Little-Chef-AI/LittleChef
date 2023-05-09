import logo from "./logo.svg";
import React, { useState, useRef, useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Welcome from "./pages/Welcome";
import { HashRouter, Routes, Route, useNavigate } from "react-router-dom"; //install using the command npm i react-router-dom
import SavedRecipes from "./pages/SavedRecipes";
import { Heading } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/welcome" element={<Welcome />} />
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/savedrecipes" element={<SavedRecipes />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

/*
<HashRouter>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/savedrecipes" element={<SavedRecipes />} />
        </Routes>
      </HashRouter>
*/
