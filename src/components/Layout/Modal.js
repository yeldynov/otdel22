import React from 'react'
import ReactDOM from 'react-dom'
import Checkout from '../Checkout/Checkout'
import Card from '../../shared/components/UIElements/Card'

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onClose} className='ui dimmer modals visible active'>
      <Card>
        <div
          onClick={e => e.stopPropagation()}
          className='ui standard visible active'
        >
          <div className='content'>{props.children}</div>
        </div>
      </Card>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal
