import classes from './CorporateStudio.module.css'
import Gallery from 'react-grid-gallery'
import image1 from '../../../../assets/offers/1.jpg'
import image2 from '../../../../assets/offers/2.jpg'
import image3 from '../../../../assets/offers/9.jpg'
import image4 from '../../../../assets/offers/13.jpg'
import image5 from '../../../../assets/offers/14.jpg'
import image6 from '../../../../assets/offers/17.jpg'
import image7 from '../../../../assets/offers/31.jpg'
import image8 from '../../../../assets/offers/34.jpg'
import Button from '../../../../shared/components/FormElements/Button'

const IMAGES = [
  {
    src: image1,
    thumbnail: image1,
    thumbnailWidth: 320,
    thumbnailHeight: 220,
  },
  {
    src: image2,
    thumbnail: image2,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: 'hands', title: 'Hands' },
      { value: 'People', title: 'People' },
    ],
  },

  {
    src: image3,
    thumbnail: image3,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: image4,
    thumbnail: image4,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: image5,
    thumbnail: image5,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: image6,
    thumbnail: image6,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: image7,
    thumbnail: image7,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: image8,
    thumbnail: image8,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
]

const CorporateStudio = props => {
  return (
    <>
      <h1>Групповые фото в студии</h1>

      <br />
      <div className='container'>
        <div className='centered'>
          <a href='#order'>
            <Button onClick={props.onShowModal} size='big' danger>
              Заказать Фотосессию
            </Button>
          </a>
          <br />
        </div>
        <Gallery margin={5} rowHeight={400} images={IMAGES} />
        <br />
      </div>
    </>
  )
}

export default CorporateStudio
