import { Card } from '../../components/Card'
import { ProductDetail } from '../../components/ProductDetail'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'

export const Home = () => {
  const { products, searchByTitle, setSearchByTitle, filteredProducts } =
    useContext(ShoppingCartContext)

  const renderView = () => {
    const productsToRender =
      searchByTitle?.length > 0 ? filteredProducts : products

    if (productsToRender?.length > 0) {
      return productsToRender?.map((product) => (
        <Card key={product.id} data={product} />
      ))
    } else {
      return <p>No, we dont have this</p>
    }
  }

  return (
    <>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product..."
        className="rounded-lg border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-3 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </>
  )
}
