import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./views/Home";
import CardProject from "./Components/ProjectCard";

const Contact = () => <span style={{fontSize:'23px', color:"white"}}>Contact</span>
const Project = () => <span style={{fontSize:'23px', color:"white"}}>Project</span>
const Skills = () => <span style={{fontSize:'23px', color:"white"}}>Skills</span>
const Blogs = () => <span style={{fontSize:'23px', color:"white"}}>Blogs</span>



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Home />}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/Blog" element={<Blogs/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Route>
    </Routes>
  );
};

export default App;
