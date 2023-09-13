import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./views/Home";

const App = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};

export default App;
