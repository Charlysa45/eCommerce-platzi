import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCardProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  const data = { count, setCount }

  return (
    <ShoppingCartContext.Provider value={data}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
