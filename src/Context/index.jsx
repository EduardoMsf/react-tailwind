import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

  const [count, setCount] = useState(0)
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  
  const openProductDetail = () => setIsProductDetailOpen(true)

  const closeProductDetail = () => setIsProductDetailOpen(false)
  
  //Detail component
  const [productToShow, setProductToShow] = useState({})

  //Shopping cart
  const [cartProducts, setCartProducts] = useState([])

  return (
    <ShoppingCartContext.Provider value={{
      count,
      isProductDetailOpen,
      productToShow,
      cartProducts,
      
      openProductDetail,
      closeProductDetail,
      setIsProductDetailOpen,
      setCount,
      setProductToShow,
      setCartProducts
    }} >
      {children}
    </ShoppingCartContext.Provider>
  )
}