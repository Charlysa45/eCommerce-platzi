import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import './CheckoutSideMenu.css'
import { OrderCard } from '../OrderCard'

export const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    productToShow,
    cartProducts,
  } = useContext(ShoppingCartContext)
  console.log(productToShow)
  return (
    <aside
      className={`${isCheckoutSideMenuOpen} ${
        isCheckoutSideMenuOpen ? 'flex' : 'hidden'
      } flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className=" font-medium text-xl">My Order</h2>
        <svg
          onClick={closeCheckoutSideMenu}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="px-6">
        {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
    </aside>
  )
}
