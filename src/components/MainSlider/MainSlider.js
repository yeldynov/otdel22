import React from 'react'
import Slider from 'react-slick'

import slide2 from '../../assets/main-banner/b3.jpg'
import slide4 from '../../assets/main-banner/b8.jpg'
import slide5 from '../../assets/main-banner/b9.jpg'
import slide7 from '../../assets/main-banner/b11.jpg'

import './MainSlider.css'

const MainSlider = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Slider className='images' {...settings}>
      <div>
        <img src={slide4} alt='banner1' />
      </div>
      <div>
        <img src={slide5} alt='banner2' />
      </div>
      <div>
        <img src={slide2} alt='banner3' />
      </div>
      <div>
        <img src={slide7} alt='banner4' />
      </div>
    </Slider>
  )
}

export default MainSlider
