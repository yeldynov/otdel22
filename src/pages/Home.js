import React from 'react'

import MainSlider from '../components/MainSlider/MainSlider'
import MainSummary from '../components/MainSummary/MainSummary'
import Offers from '../components/Offers/Offers'

const Home = (props) => {
  return (
    <React.Fragment>
      <MainSlider />
      <MainSummary onShowModal={props.onShowModal} />
      <Offers />
    </React.Fragment>
  )
}

export default Home
