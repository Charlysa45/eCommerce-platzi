import { createContext, useEffect, useState } from 'react'
import { getProducts } from '../services/products'

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

  const [order, setOrder] = useState([])

  const [products, setProducts] = useState(null)

  const [searchByTitle, setSearchByTitle] = useState(null)

  useEffect(() => {
    const getResults = async () => {
      const productsList = await getProducts()
      setProducts(productsList)
    }

    getResults()
  }, [])

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
    order,
    setOrder,
    products,
    setProducts,
    searchByTitle,
    setSearchByTitle
  }

  return (
    <ShoppingCartContext.Provider value={data}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
