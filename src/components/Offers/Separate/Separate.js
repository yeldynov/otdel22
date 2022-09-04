import classes from '../Corporate/Corporate.module.css'
import OfferItem from '../OfferItem/OfferItem'
import offer1 from '../../../assets/offers/27.jpg'
import offer2 from '../../../assets/offers/24.jpg'
import offer3 from '../../../assets/offers/26.jpg'

const OFFER_ITEMS = [
  {
    id: 1,
    title: 'Имиджевая съемка в Студии',
    image: offer1,
    url: '/offers/corporate/studio',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id aliquid  magni necessitatibus recusandae repudiandae a modi rerum placeat soluta  corrupti.',
  },
  {
    id: 2,
    title: 'Имиджевая съемка на Улице',
    image: offer2,
    url: '/offers/outdoor',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id aliquid  magni necessitatibus recusandae repudiandae a modi rerum placeat soluta  corrupti.',
  },
  // {
  //   id: 3,
  //   title: 'Имиджевая съемка на Рабочем Месте',
  //   image: offer3,
  //   url: '/offers/office',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id aliquid  magni necessitatibus recusandae repudiandae a modi rerum placeat soluta  corrupti.',
  // },
]

const Separate = () => {
  let content = <p>Found no items...</p>

  content = OFFER_ITEMS.map((offer) => (
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
      <h1 className='centered'>ИНДИВИДУАЛЬНЫЕ ФОТО:</h1>
      <div className={classes.wrapper}>
        <div>{content}</div>
      </div>
    </div>
  )
}

export default Separate
