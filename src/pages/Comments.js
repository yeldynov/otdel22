import React from 'react'
import Slider from 'react-slick'

import Card from '../shared/components/UIElements/Card'

import comment1 from '../assets/testimonials/2.jpg'
import comment2 from '../assets/testimonials/3.jpg'
import comment3 from '../assets/testimonials/4.jpg'
import comment4 from '../assets/testimonials/5.jpg'
import comment5 from '../assets/testimonials/6.jpg'

const Comments = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 500,
    slidesToScroll: 1,
    className: 'center',
    centerPadding: '60px',
    centerMode: true,
    slidesToShow: 3,
  }

  return (
    <React.Fragment>
      <h1 className='centered'>Отзывы</h1>
      <Slider className='images' {...settings}>
        <Card className='centered'>
          <img src={comment1} alt='banner1' />
        </Card>
        <Card className='centered'>
          <img src={comment2} alt='banner2' />
        </Card>
        <Card className='centered'>
          <img style={{ width: '80%' }} src={comment3} alt='banner3' />
        </Card>
        <Card className='centered'>
          <img style={{ width: '80%' }} src={comment4} alt='banner4' />
        </Card>
        <Card className='centered'>
          <img src={comment5} alt='banner5' />
        </Card>
      </Slider>
      <br />
      <br />
      <br />
    </React.Fragment>
  )
}

export default Comments
