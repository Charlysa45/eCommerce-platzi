import { useContext } from 'react'
import { OrderCard } from '../../components/OrderCard'
import { ShoppingCartContext } from '../../context'
import { Link } from 'react-router-dom'

export const MyOrder = () => {
  const { order } = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  const index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  console.log(index)
  return (
    <>
      <div className="flex items-center justify-center relative w-80 mb-6">
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
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {order?.slice(-1)[0].products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
    </>
  )
}
