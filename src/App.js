import './App.css'
import React, { useState, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import 'antd/dist/antd.min.css'
import 'bootstrap/dist/css/bootstrap.css'

import { AuthContext } from './shared/context/auth-context'
import { useAuth } from './shared/hooks/auth-hook'

import Modal from './components/Layout/Modal'
import Navbar from './components/Layout/Navbar/Navbar'
import Footer from './components/Layout/Footer/Footer'
import Home from './pages/Home'
import LoadingSpinner from './shared/components/UIElements/LoadingSpinner'
import UpdateOrder from './pages/UpdateOrder'
import Checkout from './components/Checkout/Checkout'

const Auth = React.lazy(() => import('./pages/Auth'))
const Admin = React.lazy(() => import('./pages/Admin'))
const Prices = React.lazy(() => import('./pages/Prices'))
const Comments = React.lazy(() => import('./pages/Comments'))
const Contacts = React.lazy(() => import('./pages/Contacts'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const OrderSuccess = React.lazy(() => import('./pages/OrderSuccess'))
const Offers = React.lazy(() => import('./components/Offers/Offers'))
const Corporate = React.lazy(() =>
  import('./components/Offers/Corporate/Corporate')
)
const Separate = React.lazy(() =>
  import('./components/Offers/Separate/Separate')
)
const CorporateStudio = React.lazy(() =>
  import('./components/Offers/Corporate/CorporateStudio/CorporateStudio')
)

const App = () => {
  const { token, login, logout, userId } = useAuth()
  const [showModal, setShowModal] = useState(false)

  const onShowModal = () => {
    setShowModal(true)
    document.body.style.overflow = 'hidden'
  }

  const onCloseModal = () => {
    setShowModal(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <React.Fragment>
        <div className='container'>
          <Navbar onShowModal={onShowModal} onCloseModal={onCloseModal} />
          {showModal && (
            <Modal onClose={onCloseModal}>
              <Checkout onClose={onCloseModal} />
            </Modal>
          )}

          <Suspense
            fallback={
              <div className='centered'>
                <LoadingSpinner />
              </div>
            }
          >
            <Routes>
              <Route path='/' element={<Home onShowModal={onShowModal} />} />
              <Route
                path='/prices'
                element={<Prices onShowModal={onShowModal} />}
              />
              <Route path='/comments' element={<Comments />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/offers/*' element={<Offers />} />
              <Route path='/offers/corporate/*' element={<Corporate />} />
              <Route
                path='/offers/corporate/studio'
                element={<CorporateStudio onShowModal={onShowModal} />}
              />
              <Route path='/offers/separate' element={<Separate />} />
              <Route path={'/orders/success'} element={<OrderSuccess />} />
              <Route path='/orders/:orderId' element={<UpdateOrder />} />
              {token && (
                <Route path='/admin' element={<Admin logout={logout} />} />
              )}
              <Route path='/auth' element={<Auth />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </React.Fragment>
    </AuthContext.Provider>
  )
}

export default App

// import Prices from './pages/Prices'
// import Comments from './pages/Comments'
// import Contacts from './pages/Contacts'
// import NotFound from './pages/NotFound'
// import Offers from './components/Offers/Offers'
// import Corporate from './components/Offers/Corporate/Corporate'
// import Separate from './components/Offers/Separate/Separate'
// import CorporateStudio from './components/Offers/Corporate/CorporateStudio/CorporateStudio'
// import OrderSuccess from './pages/OrderSuccess'
// import Admin from './pages/Admin'
// import Auth from './pages/Auth'
