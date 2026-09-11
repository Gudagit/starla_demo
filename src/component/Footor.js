import React from 'react'
import "./Footor.css";

// import { Link } from "react-router-dom";
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import {RiInstagramFill} from 'react-icons/ri'
import {TiLocation} from 'react-icons/ti'
import NinetyNineBadge from './NinetyNineBadge'


function Footor() {
  return (
    <div className='footer'>
        <img className="footer-bg" src="./slike/margina.png" alt="" />
        <div className='footur-contener'>
        
            <div className='icon-futer'>
            <img className="logofoot" src="./slike/logo2.png"  alt="logo" />
                <a href='https://github.com/Gudagit' ><BsGithub size={25} style={{color: "#1F1C1C"}} /></a>
                <a href='https://99designs.com/profiles/2993835'><NinetyNineBadge size={25} /></a>
                <a href='https://www.instagram.com/designstarla/?hl=en'  ><RiInstagramFill size={25} style={{color: "#1F1C1C"}} /></a>
                <a href='https://www.linkedin.com/in/ivana-gudovic-bb6171107'><BsLinkedin size={25} style={{color: "#1F1C1C"}} /></a>

            </div>
            <div className='adress'>
            <SiGmail size={25} style={{color: "#1F1C1C"}}/>
            <a href="mailto:designstarla@gmail.com"><h4>designstarla@gmail.com</h4></a>
            <TiLocation size={30} style={{color: "#1F1C1C"}} />
            <h4>Miami, Florida  USA</h4>
            
            </div>
            
        </div>
    </div>
  )
}

export default Footor