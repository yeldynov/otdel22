import React from 'react'

import Card from '../shared/components/UIElements/Card'

const Contacts = () => {
  return (
    <Card>
      <h1 className='centered'>Контакты</h1>
      <h4 className='centered'>
        У Вас остались вопросы? Звоните или пишите!
        <br /> Постараемся максимально подробно ответить на них.
        <br />
        Связаться Вы можете в любое удобное для Вас время по телефону <br />
        или написав сообщение в <a href='http://t.me/f22otdel'>
          Telegram
        </a>, <a href='http://viber/f22otdel'>Viber</a>,
        <a href='http://instagram.com/f22otdel'>Instagram</a>.
      </h4>
      <br />
      <div className='centered'>
        <h4>г. Харьков</h4>
        <h4>Площадь Свободы 7, корпус 2, 8 этаж</h4>
        <h4>Дни работы: пн-вс</h4>
      </div>
      <br />
      <h4 className='centered'>
        <a href='tel:+38(068) 108-05-08' className='binct-phone-number-1'>
          +38(068) 108-05-08
        </a>
      </h4>
      <h4 className='centered'>
        <a href='tel:+38(068) 108-05-08' className='binct-phone-number-1'>
          +38(068) 108-05-08
        </a>
      </h4>
      <br />
      <div style={{ fontSize: '3.5rem' }} className='centered'>
        <a
          style={{ textDecoration: 'none', color: 'darkblue' }}
          href='http://t.me/f22otdel'
        >
          <i className='telegram icon' />
        </a>

        <a
          style={{ textDecoration: 'none', color: 'red' }}
          href='http://instagram/f22otdel'
        >
          <i className='instagram icon' />
        </a>
        <a
          style={{ textDecoration: 'none', color: 'purple' }}
          href='http://viber/f22otdel'
        >
          <i className='viber icon' />
        </a>
      </div>
    </Card>
  )
}

export default Contacts
