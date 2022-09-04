import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import classes from './Checkout.module.css'
import Button from '../../shared/components/FormElements/Button'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'

const isEmpty = value => value.trim() === ''

const Checkout = props => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()
  const [isCorporate, setIsCorporate] = useState(false)

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    isCorporate: true,
    typeOffer: true,
    email: true,
    phone: true,
    date: true,
    numberOfPerson: true,
  })

  const nameInputRef = useRef()
  const typeOfferInputRef = useRef()
  const emailInputRef = useRef()
  const phoneInputRef = useRef()
  const dateInputRef = useRef()
  const numberOfPersonInputRef = useRef()

  const confirmHandler = async event => {
    event.preventDefault()

    const enteredName = nameInputRef.current.value
    const enteredTypeOffer = typeOfferInputRef.current.value
    const enteredEmail = emailInputRef.current.value
    const enteredPhone = phoneInputRef.current.value
    const enteredDate = dateInputRef.current.value
    const enteredNumberOfPerson = numberOfPersonInputRef.current.value

    const enteredNameIsValid = !isEmpty(enteredName)
    const enteredTypeOfferIsValid = !isEmpty(enteredTypeOffer)
    const enteredEmailIsValid = !isEmpty(enteredEmail)
    const enteredPhoneIsValid = !isEmpty(enteredPhone)
    const enteredDateIsValid = !isEmpty(enteredDate)
    const enteredNumberOfPersonIsValid = !isEmpty(enteredNumberOfPerson)

    setFormInputsValidity({
      name: enteredNameIsValid,
      typeOffer: enteredTypeOfferIsValid,
      email: enteredEmailIsValid,
      phone: enteredPhoneIsValid,
      date: enteredDateIsValid,
      numberOfPerson: enteredNumberOfPersonIsValid,
    })

    const formIsValid =
      enteredNameIsValid &&
      enteredTypeOfferIsValid &&
      enteredEmailIsValid &&
      enteredPhoneIsValid &&
      enteredDateIsValid &&
      enteredNumberOfPersonIsValid

    if (!formIsValid) {
      return
    }

    try {
      setIsLoading(true)
      await fetch(process.env.REACT_APP_BACKEND_URL + '/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: enteredName,
          typeOffer: enteredTypeOffer,
          email: enteredEmail,
          phone: enteredPhone,
          date: enteredDate,
          numberOfPerson: enteredNumberOfPerson,
        }),
      })
      setIsLoading(false)
      props.onClose()
      navigate('/orders/success')
    } catch (error) {
      console.log(error.message)
      setIsLoading(false)
      setError(error.message || 'Something went wrong, please try again.')
    }
  }

  const typeSelectHandler = () => {
    if (
      typeOfferInputRef.current.value === 'Корпоративная в студии' ||
      typeOfferInputRef.current.value === 'Корпоративная на работе' ||
      typeOfferInputRef.current.value == 'Корпоративная на улице' ||
      typeOfferInputRef.current.value === 'Праздники, корпоративы'
    ) {
      setIsCorporate(true)
    } else {
      setIsCorporate(false)
    }
  }

  // Classes names
  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
  }`
  const emailControlClasses = `${classes.control} ${
    formInputsValidity.email ? '' : classes.invalid
  }`
  const phoneControlClasses = `${classes.control} ${
    formInputsValidity.phone ? '' : classes.invalid
  }`
  const numberOfPersonControlClasses = `${classes.control} ${
    formInputsValidity.numberOfPerson ? '' : classes.invalid
  }`
  const typeOfferControlClasses = `${classes.control} ${
    formInputsValidity.typeOffer ? '' : classes.invalid
  }`
  const dateControlClasses = `${classes.control} ${
    formInputsValidity.date ? '' : classes.invalid
  }`

  return (
    <React.Fragment>
      {isLoading && <LoadingSpinner asOverlay />}
      <form className={classes.form} onSubmit={confirmHandler}>
        <h1>Заполните, пожалуйста, следующие поля:</h1>
        <div className={nameControlClasses}>
          <label htmlFor='name'>Имя:</label>
          <input
            placeholder='Иван Петров'
            ref={nameInputRef}
            type='text'
            id='name'
          />
          {!formInputsValidity.name && (
            <p>Пожалуйста введите корректное имя.</p>
          )}
        </div>
        <div className={phoneControlClasses}>
          <label htmlFor='phone'>Телефон</label>
          <input
            placeholder='099-77-77-777'
            ref={phoneInputRef}
            type='phone'
            id='phone'
          />
          {!formInputsValidity.phone && (
            <p>Пожалуйста введите корректный телефон.</p>
          )}
        </div>
        <div className={emailControlClasses}>
          <label htmlFor='email'>Email</label>
          <input
            placeholder='example@gmail.com'
            ref={emailInputRef}
            type='email'
            id='email'
          />
          {!formInputsValidity.email && (
            <p>Пожалуйста введите корректный email.</p>
          )}
        </div>

        <div className={typeOfferControlClasses}>
          <label htmlFor='typeOffer'>Тип Фотосессии</label>
          <select
            onChange={typeSelectHandler}
            ref={typeOfferInputRef}
            name='typeOffer'
            id='typeOffer'
          >
            <option value='' selected disabled>
              Выберите тип фотосессии
            </option>
            <option value='Корпоративная в студии'>ГРУППОВАЯ в студии</option>
            <option value='Корпоративная на работе'>
              ГРУППОВАЯ на рабочем месте
            </option>
            <option value='Корпоративная на улице'>ГРУППОВАЯ на улице</option>
            <option value='Корпоративная другое'>ГРУППОВАЯ другое</option>
            <option value='Праздники, корпоративы'>
              ПРАЗДНИКИ, КОРПОРАТИВЫ
            </option>
            <option value='Индивидуальная в студии'>
              ПЕРСОНАЛЬНАЯ в студии
            </option>
            <option value='Индивидуальная на работе'>
              ПЕРСОНАЛЬНАЯ на рабочем месте
            </option>
            <option value='Индивидуальная на улице'>
              ПЕРСОНАЛЬНАЯ на улице
            </option>
            <option value='Индивидуальная другое'>ПЕРСОНАЛЬНАЯ другое</option>
          </select>
          {!formInputsValidity.typeOffer && (
            <p>Пожалуйста, выберите тип фотосессии.</p>
          )}
        </div>
        <div className={numberOfPersonControlClasses}>
          <label htmlFor='numberOfPerson'>Количество человек</label>
          <input
            defaultValue={1}
            ref={numberOfPersonInputRef}
            type='number'
            id='numberOfPerson'
          />
          {!formInputsValidity.numberOfPerson && (
            <p>Групповая фотосессия - это когда больше одного человека.</p>
          )}
        </div>

        <div className={dateControlClasses}>
          <label htmlFor='date'>Желаемая дата проведения фотосессии</label>
          <input ref={dateInputRef} type='date' id='date' />
          {!formInputsValidity.date && (
            <p>Пожалуйста введите корректный дату.</p>
          )}
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
          <Button danger className={classes.submit}>
            ЗАКАЗАТЬ
          </Button>
        </div>
      </form>
    </React.Fragment>
  )
}

export default Checkout
