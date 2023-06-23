import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCardProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  const [productToShow, setProductToShow] = useState({
    id: '',
    description: '',
    images: [],
    price: 0,
    title: '',
  })

  const [cartProducts, setCartProducts] = useState([])

  const data = {
    count,
    setCount,
    isProductDetailOpen,
    openProductDetail,
    closeProductDetail,
    isCheckoutSideMenuOpen,
    openCheckoutSideMenu,
    closeCheckoutSideMenu,
    productToShow,
    setProductToShow,
    cartProducts,
    setCartProducts,
  }

  return (
    <ShoppingCartContext.Provider value={data}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
