import { Home } from './pages/Home'

import { BrowserRouter, useRoutes } from 'react-router-dom'
import { MyAccount } from './pages/MyAccount'
import { MyOrder } from './pages/MyOrder'
import { MyOrders } from './pages/MyOrders'
import { NotFound } from './pages/NotFound'
import { SignIn } from './pages/SignIn'
import { Navbar } from './components/Navbar'

import './App.css'
import { ShoppingCardProvider } from './context'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {
  return (
    <ShoppingCardProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </ShoppingCardProvider>
  )
}

export default App
