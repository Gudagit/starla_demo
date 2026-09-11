import React from 'react'
// import { Route, Routes } from "react-router-dom";
import Navbar from '../component/Navbar';
import "./Home.css";
import SlikezaHome from '../component/SlikezaHome';
import Footor from '../component/Footor';
import About from './About';
import Galeri from './Galeri';
import Project from './Project';
import Contac from './Contac';


function Home() {
  return (
    <div>
    <Navbar />
    <SlikezaHome />
    <About />
    <Galeri />
    <Project />
    <Contac />
    <Footor />
    </div>
  )
}

export default Home