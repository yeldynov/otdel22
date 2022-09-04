import { Link } from 'react-router-dom'
import classes from './OfferItem.module.css'

const OfferItem = (props) => {
  return (
    <div className={classes.item}>
      <Link to={props.url} style={{ textDecoration: 'none' }}>
        <div className={classes.polaroid}>
          <img src={props.image} />
          <div className={classes.caption}>{props.title}</div>
        </div>
      </Link>
    </div>
  )
}

export default OfferItem
