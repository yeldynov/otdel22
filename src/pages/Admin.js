import React, { useEffect, useState } from 'react'
import OrdersList from '../components/Orders/OrdersList'
import LoadingSpinner from '../shared/components/UIElements/LoadingSpinner'

const Admin = props => {
  const [loadedOrders, setLoadedOrders] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [onUpdate, setOnUpdate] = useState(false)

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(
          process.env.REACT_APP_BACKEND_URL + '/orders'
        )
        const responseData = await response.json()
        setLoadedOrders(responseData.orders)
        console.log(responseData.orders)
        setIsLoading(false)
        setOnUpdate(false)
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }
    }
    fetchOrders()
  }, [onUpdate])

  const orderDeletedHandler = deletedOrderId => {
    setLoadedOrders(prevOrders =>
      prevOrders.filter(order => order.id !== deletedOrderId)
    )
  }

  return (
    <React.Fragment>
      <div>
        <button
          className='ui button black right floated'
          onClick={props.logout}
        >
          <i class='home icon'></i> Выйти
        </button>
      </div>
      {isLoading && (
        <div className='center'>
          <LoadingSpinner asOverlay />
        </div>
      )}

      {!isLoading && loadedOrders && (
        <OrdersList
          items={loadedOrders}
          onDeleteOrder={orderDeletedHandler}
          onUpdate={setOnUpdate}
        />
      )}
      <br />
    </React.Fragment>
  )
}

export default Admin
