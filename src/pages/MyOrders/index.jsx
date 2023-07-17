import { useContext } from 'react'
import { OrdersCard } from '../../components/OrdersCard'
import { ShoppingCartContext } from '../../context'
import { Link } from 'react-router-dom'

export const MyOrders = () => {
  const { order } = useContext(ShoppingCartContext)
  return (
    <>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <Link to="/my-orders" className="absolute left-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-black cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </Link>
        <h1 className='font-medium text-xl'>MyOrders</h1>
      </div>
      {order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </>
  )
}
