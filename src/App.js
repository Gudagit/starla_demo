import React from "react";
import "./index.css";



import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Service from "./routes/Service";
import Galeri from "./routes/Galeri";
import Review from "./routes/Review";
import Blog from "./routes/Blog";
import Contac from "./routes/Contac";



function App() {



  return (
    <> 
    
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/service" element = {<Service />} />
        <Route path="/galeri" element = {<Galeri />} />
        <Route path="/review" element = {<Review />} />
        <Route path="/blog" element = {<Blog />} />
        <Route path="/contac" element = {<Contac />} />
      </Routes>
    </>
  );
}

export default App;
