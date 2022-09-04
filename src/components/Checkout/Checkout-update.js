import React, { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import classes from './Checkout.module.css'
import Button from '../../shared/components/FormElements/Button'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'

const Checkout = props => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  const isCompletedRef = useRef()
  const commentRef = useRef()

  const confirmHandler = async event => {
    event.preventDefault()
    const id = props.id
    const name = props.name
    const phone = props.phone
    const email = props.email
    const typeOffer = props.typeOffer
    const date = props.date
    const numberOfPerson = props.numberOfPerson
    const enteredIsCompleted = isCompletedRef.current.checked ? true : false
    const enteredComment = commentRef.current.value

    try {
      setIsLoading(true)
      await fetch(process.env.REACT_APP_BACKEND_URL + '/orders/' + props.id, {
        method: 'PATCH',
        body: JSON.stringify({
          id: id,
          name: name,
          phone: phone,
          email: email,
          typeOffer: typeOffer,
          numberOfPerson: numberOfPerson,
          date: date,
          comment: enteredComment,
          isCompleted: !!enteredIsCompleted,
        }),
        headers: { 'Content-Type': 'application/json' },
      })

      setIsLoading(false)
      props.onClose()
      props.onUpdate(true)
      navigate('/admin')
    } catch (error) {
      console.log(error.message)
      setIsLoading(false)
      setError(error.message || 'Something went wrong, please try again.')
    }
  }

  return (
    <React.Fragment>
      {isLoading && <LoadingSpinner asOverlay />}
      <form className={classes.form} onSubmit={confirmHandler}>
        <h1>Обработка заказа:</h1>
        <div className={classes.control}>
          <label htmlFor='name'>Имя:</label>
          <input readOnly value={props.name} type='text' id='name' />
        </div>
        <div className={classes.control}>
          <label htmlFor='phone'>Телефон</label>
          <input readOnly value={props.phone} type='phone' id='phone' />
        </div>

        <div className={classes.control}>
          <label>Комментарий к заказу</label>
          <textarea
            ref={commentRef}
            rows='5'
            placeholder='Введите комментарий к заказу'
          ></textarea>
        </div>
        <div className={classes.control}>
          <label
            style={{ color: 'green', fontWeight: 'bold' }}
            htmlFor='isCompleted'
          >
            Выполнен:{' '}
          </label>
          <input ref={isCompletedRef} id='isCompleted' type='checkbox'></input>
        </div>
        <div className={classes.actions}>
          <Button
            inverse
            onClick={() => {
              props.onClose()
            }}
          >
            ОТМЕНА
          </Button>
          <Button type='submit' danger className={classes.submit}>
            ГОТОВО
          </Button>
        </div>
      </form>
    </React.Fragment>
  )
}

export default Checkout
