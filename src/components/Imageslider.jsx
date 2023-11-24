import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './image.css'

function Imageslider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
      };
  return (
    <div className="slider-container">

    <h1 style={{textAlign:'center'}}>Image Slider</h1>
  <Slider {...settings}>
    <div className="slide">
      <img style={{ width: '900px', height: '400px' }} src="https://wallpaperaccess.com/full/3014596.jpg" alt="Slide 1" />
    </div>
    <div className="slide">
      <img style={{ width: '900px', height: '400px' }} src="https://wallpapercave.com/wp/wp1874156.jpg" alt="Slide 2" />
    </div>

    <div className="slide">
      <img style={{ width: '900px', height: '400px' }} src="https://c.wallhere.com/photos/a7/a6/dinner_dof_matlagning_fotosondag_malm_restaurant_cooking_sweden-415554.jpg!d" alt="Slide 2" />
    </div>

    <div className="slide">
      <img style={{ width: '900px', height: '400px' }} src="https://c1.wallpaperflare.com/preview/368/267/753/restaurant-kitchen-chefs-cooks.jpg" alt="Slide 2" />
    </div>
   
  </Slider>
</div>
  )
}

export default Imageslider