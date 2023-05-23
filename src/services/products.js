const apiUrl = 'https://api.escuelajs.co/api/v1/products'

export const getProducts = async () => {
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
    
        return data?.map((product) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            images: product.images
        }))
    } catch (error) {
        throw new Error("Oops! Something was wrong! :'c")
    }
}