import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

  const [count, setCount] = useState(0)

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)
  
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
  
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
      isCheckoutSideMenuOpen,
      
      openProductDetail,
      closeProductDetail,
      setIsProductDetailOpen,
      setCount,
      setProductToShow,
      setCartProducts,
      openCheckoutSideMenu,
      closeCheckoutSideMenu

    }} >
      {children}
    </ShoppingCartContext.Provider>
  )
}