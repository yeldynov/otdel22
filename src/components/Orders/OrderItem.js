import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Modal from '../Layout/Modal'
import Checkout from '../Checkout/Checkout-update'

const OrderItem = props => {
  const [showModal, setShowModal] = useState(false)
  const [showConfirmDelete, setShowConfirmDelete] = useState(false)

  const onShowModal = () => {
    setShowModal(true)
    document.body.style.overflow = 'hidden'
  }

  const onCloseModal = () => {
    setShowModal(false)
    document.body.style.overflow = 'auto'
  }

  const onShowConfirmDelete = () => {
    setShowConfirmDelete(true)
  }

  const onHideConfirmDelete = () => {
    setShowConfirmDelete(false)
  }

  const onDeleteOrder = async () => {
    try {
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/orders/${props.id}`, {
        method: 'DELETE',
      })
      props.onDelete(props.id)
    } catch (error) {}
  }

  return (
    <React.Fragment>
      {showModal && (
        <Modal onClose={onCloseModal}>
          <Checkout
            {...props}
            onClose={onCloseModal}
            onUpdate={props.onUpdate}
          />
        </Modal>
      )}
      {showConfirmDelete && (
        <Modal onClose={onHideConfirmDelete}>
          <div className='header'>
            Вы уверены что хотите удалить этот заказ?
          </div>
          <button className='ui button outline'>Отмена</button>
          <button className='ui button red' onClick={onDeleteOrder}>
            Удалить
          </button>
        </Modal>
      )}
      <tr className={props.isCompleted ? 'positive' : null}>
        <td cursor='pointer' onClick={onShowModal} data-label='Name'>
          {props.name}
        </td>
        <td data-label='Phone'>{props.phone}</td>
        <td data-label='Email'>{props.email}</td>
        <td data-label='TypeOffer'>{props.typeOffer}</td>
        <td data-label='NumberOfPerson'>{props.numberOfPerson}</td>
        <td data-label='Date'>{props.date}</td>
        <td data-label='Comment'>{props.comment}</td>
        <td className='center aligned'>
          {props.isCompleted && <i className='large green checkmark icon'></i>}
        </td>
        <td data-label='Delete'>
          <button
            onClick={() => setShowConfirmDelete(true)}
            className='ui button red'
          >
            Удалить
          </button>
        </td>
      </tr>
    </React.Fragment>
  )
}

export default OrderItem
