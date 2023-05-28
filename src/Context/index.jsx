import { createContext, useEffect, useState } from "react"

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

  //Shopping cart order
  const [order, setOrder] = useState([])

  //GetProducts
  const [items, setitems] = useState(null)

  //Filtered items
  const [filteredItems, setFilteredItems] = useState(null)

  //Get product by title
  const [searchByTitle, setSearchByTitle] = useState(null)
  
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(response => response.json())
      .then( data => setitems(data))
      
  }, [])
  
  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }
  
  
  useEffect(() => {
    if( searchByTitle ){
      setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }
      
  }, [items, searchByTitle])

  return (
    <ShoppingCartContext.Provider value={{
      count,
      isProductDetailOpen,
      productToShow,
      cartProducts,
      isCheckoutSideMenuOpen,
      order,
      items,
      searchByTitle,
      filteredItems,
      
      openProductDetail,
      closeProductDetail,
      setIsProductDetailOpen,
      setCount,
      setProductToShow,
      setCartProducts,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      setOrder,
      setitems,
      setSearchByTitle,
      setFilteredItems,

      filteredItemsByTitle

    }} >
      {children}
    </ShoppingCartContext.Provider>
  )
}