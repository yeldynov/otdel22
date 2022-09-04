import { Link } from 'react-router-dom'
import './Footer'

const Footer = () => {
  return (
    <div className='ui inverted grey centered vertical footer segment form-page'>
      <div className='ui container'>
        <Link style={{ color: 'black' }} to='/auth'>
          © Nikita Yeldynov, 2022
        </Link>
      </div>
    </div>
  )
}

export default Footer
