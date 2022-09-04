import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../../assets/logo-new.png'
import './Navbar-top.css'

import Backdrop from '../../../shared/components/UIElements/Backdrop'
import SideDrawer from './SideDrawer'
import Navlinks from './Navlinks'

const NavbarTop = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)

  const openDrawerHandler = () => {
    setDrawerIsOpen(true)
  }

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false)
  }

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer
        show={drawerIsOpen}
        onClick={closeDrawerHandler}
        onShowModal={props.onShowModal}
      >
        <nav className='main-navigation__drawer-nav'>
          <Navlinks />
        </nav>
      </SideDrawer>

      <div className='header'>
        <button
          className='main-navigation__menu-btn'
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <div className='logo'>
          <Link to={'/'}>
            <img src={logo} width={'110px'} alt='logo' />
          </Link>
          <div className='slogan'>
            <h2>Фотографическая компания.</h2>
            <h3>Делаем красиво.</h3>
          </div>
        </div>
        <div className='main-navigation__header-nav'>
          <div className='main-contacts'>
            <ul className='bordered'>
              <li>Харьков, пл. Свободы, 7 корпус 2, 8 этаж</li>
              <li className='second-phone'>Дни работы: пн - вс </li>
            </ul>
            <ul>
              <li>
                <i className='uk-icon-phone'></i>
                <a href='tel:+380681080508' className='binct-phone-number-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='bi bi-telephone-fill'
                    viewBox='1 1 16 16'
                  >
                    <path
                      fillRule='evenodd'
                      d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'
                    />
                  </svg>{' '}
                  +38(068) 108-05-08
                </a>
              </li>
              <li className='second-phone'>
                <i className='uk-icon-phone'></i>
                <a
                  href='tel:+380501080508'
                  className='tel-header-mts binct-phone-number-2'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className='bi bi-telephone-fill'
                    viewBox='1 1 16 16'
                  >
                    <path
                      fillRule='evenodd'
                      d='M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'
                    />
                  </svg>{' '}
                  +38(050) 108-05-08
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default NavbarTop
