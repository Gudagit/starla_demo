import { useState } from 'react'

import React from 'react'
// import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleXmark
} from '@fortawesome/free-solid-svg-icons'


import './wspgallery.css'

const WSPGallery = ({galleryImages}) => {
    const [slideNumber, setSlideNumber] = useState(0)
    const [openModul, setOpenModul] = useState(false)

    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModul(true)
    }

    const handleCloseModal = () =>{
        setOpenModul(false)
    }
    const prevSlide = () =>{
        slideNumber === 0 ? setSlideNumber(galleryImages.length - 1 ) : setSlideNumber(slideNumber - 1 )
        
    }
    const nextSlide = () =>{
        slideNumber + 1 === galleryImages.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1 )
    }

  return (
    <div className='zapozadinu'>
    <div className="text">
        <h1>GALLERY</h1>
        <p>see some of my work</p>
    </div>
    
    {openModul && 
    <div className='sliderWrap'>
        <FontAwesomeIcon icon={faCircleXmark} className='btnClose fa-2x' onClick={handleCloseModal} />
        <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev fa-2x' onClick={prevSlide}/>
        <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext fa-2x' onClick={nextSlide} />
        <div className='fullScreanImage'>
            <img src ={galleryImages[slideNumber].img} alt='' />
        </div>
    </div>
    }
        <div className='galleryWrap'>
        {
            galleryImages && galleryImages.map((slide, index) => {
                return(
                    <div 
                    className='single' 
                    key={index}
                    onClick={ () => handleOpenModal(index) }
                    >
                        <img src={slide.img} alt ='' />
                    </div>
                )
            })
        }

        </div>
    </div>
  )
}

export default WSPGallery
