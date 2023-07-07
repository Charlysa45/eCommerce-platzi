import { useContext } from 'react'
import './ProductDetail.css'
import { ShoppingCartContext } from '../../context'

export const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, productToShow } =
    useContext(ShoppingCartContext)
  return (
    <aside
      className={`${isProductDetailOpen} ${
        isProductDetailOpen ? 'flex' : 'hidden'
      } flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className=" font-medium text-xl">Detail</h2>
        <svg
          onClick={closeProductDetail}
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
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={productToShow.images[0]}
          alt={productToShow.title}
        />
      </figure>
      <div className="p-6">
        <p className="font-medium text-2xl">${productToShow.price}</p>
        <p className="font-medium text-md">{productToShow.title}</p>
        <p className="font-light text-sm">{productToShow.description}</p>
      </div>
    </aside>
  )
}
