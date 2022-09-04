import React from 'react'
import { NavLink } from 'react-router-dom'

const Navlinks = props => {
  return (
    <ul>
      <li>
        <NavLink
          className={navData => (navData.isActive ? 'active' : 'none')}
          to='/'
        >
          ГЛАВНАЯ
        </NavLink>
      </li>
      <li>
        <NavLink
          className={navData => (navData.isActive ? 'active' : 'none')}
          to='/offers'
        >
          ФОТОСЕССИИ
        </NavLink>
      </li>
      <li>
        <NavLink
          className={navData => (navData.isActive ? 'active' : 'none')}
          to='/prices'
        >
          ЦЕНЫ
        </NavLink>
      </li>
      <li>
        <NavLink
          className={navData => (navData.isActive ? 'active' : 'none')}
          to='/comments'
        >
          ОТЗЫВЫ
        </NavLink>
      </li>
      <li>
        <NavLink
          className={navData => (navData.isActive ? 'active' : 'none')}
          to='/contacts'
        >
          КОНТАКТЫ
        </NavLink>
      </li>

      <li>
        <button
          style={{ color: 'red', fontWeight: 800 }}
          onClick={props.onShowModal}
        >
          ЗАКАЗАТЬ
        </button>
      </li>
    </ul>
  )
}

export default Navlinks
