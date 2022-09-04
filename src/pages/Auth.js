import React, { useState, useContext } from 'react'

import Input from '../shared/components/FormElements/Input'
import Button from '../shared/components/FormElements/Button'
import { useForm } from '../shared/hooks/form-hook'
import { AuthContext } from '../shared/context/auth-context'
import Card from '../shared/components/UIElements/Card'
import { useNavigate } from 'react-router-dom'
import './Auth.css'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../shared/util/validators'
import LoadingSpinner from '../shared/components/UIElements/LoadingSpinner'

const Auth = () => {
  let navigate = useNavigate()
  const auth = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  const [formState, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  )

  const authSubmitHandler = async event => {
    event.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + '/users/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
        }
      )

      const responseData = await response.json()
      if (!response.ok) {
        throw new Error(responseData.message)
      }
      setIsLoading(false)
      auth.login(responseData.userId, responseData.token)
      navigate('/admin')
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      setError(error.message || 'Something went wrong, please try again.')
    }
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <React.Fragment>
      {/* <ErrorModal error={error} onClear={errorHandler} /> */}
      <Card className='authentication'>
        {isLoading && <LoadingSpinner asOverlay />}
        <h2>Авторизация</h2>
        <hr />
        <form onSubmit={authSubmitHandler}>
          <Input
            element='input'
            id='email'
            type='text'
            label='Email'
            validators={[VALIDATOR_EMAIL()]}
            errorText='Введите корректный email.'
            onInput={inputHandler}
          />
          <Input
            element='input'
            id='password'
            type='password'
            label='Пароль'
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText='Введите корректный пароль (минимум 5 символов).'
            onInput={inputHandler}
          />
        </form>
        <Button
          type='submit'
          onClick={authSubmitHandler}
          disabled={!formState.isValid}
        >
          ВОЙТИ
        </Button>
      </Card>
    </React.Fragment>
  )
}

export default Auth
