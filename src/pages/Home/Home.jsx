import React, { useState, useEffect } from 'react'
import './Home.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import About from '../About/About'
import Instructors from '../../components/Instructors/Instructors'

// import { IoIosArrowDropright } from "react-icons/io";
// import { IoIosArrowDroprightCircle } from "react-icons/io";


const Home = () => {

  const images = [image1, image2, image3]

  const [currentIndex, setCurrentIndex] = useState(0)


  const nextImg = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };


  useEffect(() => {
    const interval = setInterval(() => {
      nextImg()
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className='slider-container'>
      <div className="slider">
        <img src={images[currentIndex]} alt="" className="slide-image" />
      </div>

      <button onClick={nextImg} className='next-button'>&#10094;</button>
      <button onClick={prevImage} className='prev-button'> &#10095;</button>

      <About />
      <Instructors/>
    </div>
  )
}

export default Home
