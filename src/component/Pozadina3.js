import { Swiper, SwiperSlide } from 'swiper/react';
import './pozadina3.css'
import React from 'react'
import 'swiper/css';
import { Navigation, Pagination,} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {Komentari} from '../data/komentari'
import { Link } from "react-router-dom"

import './pozadina3.css'



function Pozadina3() {
  return (
    <div className='s-container'>
      <img className='pozadina3'  src='./slike/pozadina3.png' alt="slika" />
      <div className='textrew'>
        <h1>REVIEW</h1>
        <p>best comments from client</p>
      </div>
      
      <Swiper 
      modules={[Pagination, Navigation]}
      className='mySwiper'
      navigation={true}
      loopFillGroupWithBlank={true}
      slidesPerView={1}
      spaceBetween={40}
      slidesPerGroup={1}
      loop={true}
      >
      {Komentari.map((slide, i) =>(
        <SwiperSlide>
          <div className='left-s'>
          
            <div className='name'>
            
              <span>{slide.name}</span>
              <span>{slide.com}</span>
            </div>
            <span>{slide.star}</span>
          <div>
            <Link to="/galeri" className="btn">GALERI</Link>
          </div>
            <img src={slide.img} alt='pic' className='img-logo'/>
          </div>
        </SwiperSlide>
      ))}
        
        
      </Swiper>
        {/* <img src='./slike/pozadina3.png' /> */}
    </div>
  )
}

export default Pozadina3;