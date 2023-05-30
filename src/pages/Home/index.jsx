import { useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import { getProducts } from '../../services/products'
import { ProductDetail } from '../../components/ProductDetail'

export const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getResults = async () => {
      const productsList = await getProducts()
      setProducts(productsList)
    }

    getResults()
  }, [])

  return (
    <>
      <div className="grid gap-3 grid-cols-4 w-full max-w-screen-lg">
        {products?.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
      <ProductDetail />
    </>
  )
}
