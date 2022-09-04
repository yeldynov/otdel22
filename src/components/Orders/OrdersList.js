import React, { useState } from 'react'
import OrderItem from './OrderItem'

const OrdersList = props => {
  const [query, setQuery] = useState('')

  if (props.items.length === 0) {
    return <h2>Заказы не найдены.</h2>
  }

  return (
    <React.Fragment>
      <h1>Список заказов</h1>
      <div className='ui fluid search centered'>
        <div className='ui icon input'>
          <input
            className='prompt'
            type='text'
            placeholder='Введите запрос...'
            onChange={event => setQuery(event.target.value)}
          />
          <i className='search icon'></i>
        </div>
        <div className='results'></div>
      </div>
      <table className='ui celled table '>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Телефон</th>
            <th>Email</th>
            <th>Тип Фотосессии</th>
            <th>Количество Человек</th>
            <th>Желаемая дата</th>
            <th>Комментарий к заказу</th>
            <th>Выполнен</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.items
            .filter(post => {
              if (query === '') {
                return post
              } else if (
                post.name.toLowerCase().includes(query.toLowerCase()) ||
                post.phone.includes(query) ||
                post.email.toLowerCase().includes(query.toLowerCase()) ||
                post.typeOffer.toLowerCase().includes(query) ||
                post.date.includes(query) ||
                post.comment.toLowerCase().includes(query.toLowerCase())
              ) {
                return post
              }
            })
            .map(order => (
              <OrderItem
                key={order.id}
                id={order.id}
                name={order.name}
                phone={order.phone}
                email={order.email}
                typeOffer={order.typeOffer}
                numberOfPerson={order.numberOfPerson}
                date={order.date}
                isCompleted={order.isCompleted}
                comment={order.comment}
                onDelete={props.onDeleteOrder}
                onUpdate={props.onUpdate}
              />
            ))}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default OrdersList
