import React from 'react'
import classes from './Offers.module.css'
import OfferItem from './OfferItem/OfferItem'
import offer1 from '../../assets/offers/17.jpg'
import offer2 from '../../assets/offers/16.jpg'

const OFFER_ITEMS = [
  {
    id: 1,
    title: 'Групповые Фото',
    image: offer1,
    url: '/offers/corporate',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id aliquid  magni necessitatibus recusandae repudiandae a modi rerum placeat soluta  corrupti.',
  },
  {
    id: 2,
    title: 'Личные Фото',
    image: offer2,
    url: '/offers/separate',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id aliquid  magni necessitatibus recusandae repudiandae a modi rerum placeat soluta  corrupti.',
  },
]

const Offers = () => {
  let content = <p>Found no items...</p>

  content = OFFER_ITEMS.map(offer => (
    <OfferItem
      key={offer.id}
      id={offer.id}
      title={offer.title}
      image={offer.image}
      description={offer.description}
      url={offer.url}
    />
  ))

  return (
    <div className='m-5'>
      <h1 className='centered'>ВЫБЕРИТЕ ТИП ФОТОСЕССИИ</h1>
      <div className={classes.wrapper}>
        <div>{content}</div>
      </div>
    </div>
  )
}

export default Offers
