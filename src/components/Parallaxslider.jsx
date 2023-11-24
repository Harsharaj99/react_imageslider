import React, { useEffect, useState } from 'react'
import './parallax.css'


function Parallaxslider({ images }) {

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setCurrentImage(Math.floor(scrollPosition / window.innerHeight));
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <div className='parallax-slider'>
         {images.map((image, index) => (
        <div
          key={index}
          className={`slider-item ${index === currentImage ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  )
}

export default Parallaxslider