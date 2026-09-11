import React from "react";
import "./index.css";



import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footor from "./component/Footor";
import ScrollToTop from "./component/ScrollToTop";
import Home from "./routes/Home";
import About from "./routes/About";
import Galeri from "./routes/Galeri";
import Blog from "./routes/Blog";
import Contac from "./routes/Contac";
import Project from "./routes/Project";



function App() {



  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = {<><Navbar /><About /><Footor /></>} />
        <Route path="/galeri" element = {<><Navbar /><Galeri /><Footor /></>} />
        <Route path="/project" element = {<><Navbar /><Project /><Footor /></>} />
        <Route path="/blog" element = {<Blog />} />
        <Route path="/contac" element = {<><Navbar /><Contac /><Footor /></>} />
      </Routes>
    </>
  );
}

export default App;
