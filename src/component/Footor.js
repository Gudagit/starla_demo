import React from 'react'
import "./Footor.css";

// import { Link } from "react-router-dom";
import {BsGithub} from 'react-icons/bs'
import {SiAdobeillustrator, SiGmail} from 'react-icons/si'
import {RiInstagramFill} from 'react-icons/ri'
import {TiLocation} from 'react-icons/ti'


function Footor() {
  return (
    <div className='footer'>
        <div className='footur-contener'>
        
            <div className='icon-futer'>
            <img className="logofoot" src="./slike/logo2.png"  alt="logo" />
                <a href='https://github.com/Gudagit' ><BsGithub size={25} style={{color: "#1F1C1C"}} /></a>
                <a href='https://99designs.com/profiles/2993835'><SiAdobeillustrator size={25} style={{color: "#1F1C1C"}} /></a>
                <a href='https://www.instagram.com/designstarla/?hl=en'  ><RiInstagramFill size={25} style={{color: "#1F1C1C"}} /></a>
                
            </div>
            <div>
            <SiGmail size={25} style={{color: "#1F1C1C"}}/>
            <h4 href="">designerstarla.com</h4>
            <TiLocation size={30} style={{color: "#1F1C1C"}} />
            <h4>Miami, Florida  USA</h4>
            
            </div>
            
        </div>
    </div>
  )
}

export default Footor