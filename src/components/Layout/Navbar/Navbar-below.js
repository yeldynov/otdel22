import React from 'react'
import Navlinks from './Navlinks'

import './Navbar-below.css'

const NavbarBelow = props => {
  return (
    <React.Fragment>
      <header className='header'>
        <nav className='nav'>
          <Navlinks {...props} />
        </nav>
      </header>
    </React.Fragment>
  )
}
export default NavbarBelow
