import React from 'react'
import { Link } from 'react-router-dom'

const OrderSuccess = () => {
  return (
    <div className='centered'>
      <h1>Ваш заказ успешно оформлен</h1>
      <h1>Мы с вами свяжемся в течении часа.</h1>
      <br />
      <div className='centered'>
        <Link to='/' className='ui button light big'>
          На главную
        </Link>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default OrderSuccess
