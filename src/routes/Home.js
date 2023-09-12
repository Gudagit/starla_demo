import React from 'react'
import { Route, Routes } from "react-router-dom";
import Navbar from '../component/Navbar';
import "./Home.css";
import SlikezaHome from '../component/SlikezaHome';
import Footor from '../component/Footor';
import Service from '../routes/Service';
import Blog from '../routes/Blog'
import Review from './Review';
import Galeri from './Galeri';
import Contac from './Contac';


function Home() {
  return (
    <div>    
    <Navbar />    
    <SlikezaHome />
    <Service />
    <Review />
    <Galeri />
    <Contac /> 
    <Blog />
    <Footor />  
    </div>
  )
}

export default Home