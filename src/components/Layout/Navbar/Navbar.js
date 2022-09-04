import NavbarTop from './Navbar-top'
import NavbarBelow from './Navbar-below'

const Navbar = props => {
  return (
    <div className='ui container'>
      <NavbarTop
        onShowModal={props.onShowModal}
        onCloseModal={props.onCloseModal}
      />
      <NavbarBelow
        onShowModal={props.onShowModal}
        onCloseModal={props.onCloseModal}
      />
    </div>
  )
}

export default Navbar
