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
  const [filteredProducts, setFilteredProducts] = useState(null)

  const [searchByTitle, setSearchByTitle] = useState(null)
  const [searchByCategory, setSearchByCategory] = useState(null)

  useEffect(() => {
    const getResults = async () => {
      const productsList = await getProducts()
      setProducts(productsList)
    }

    getResults()
  }, [])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    )
  }

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    )
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle)
    }
    if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory)
    }
    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      )
    }
    if (!searchType) {
      return items
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory)
      setFilteredProducts(
        filterBy(
          'BY_TITLE_AND_CATEGORY',
          products,
          searchByTitle,
          searchByCategory
        )
      )
    if (searchByTitle && !searchByCategory)
      setFilteredProducts(
        filterBy('BY_TITLE', products, searchByTitle, searchByCategory)
      )
    if (!searchByTitle && searchByCategory)
      setFilteredProducts(
        filterBy('BY_CATEGORY', products, searchByTitle, searchByCategory)
      )
    if (!searchByTitle && !searchByCategory)
      setFilteredProducts(
        filterBy(null, products, searchByTitle, searchByCategory)
      )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products, searchByTitle, searchByCategory])

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
    setSearchByTitle,
    filteredProducts,
    searchByCategory,
    setSearchByCategory,
  }

  return (
    <ShoppingCartContext.Provider value={data}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
