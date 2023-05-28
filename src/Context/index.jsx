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

  //Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null)

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(response => response.json())
      .then( data => setitems(data))
      
  }, [])
  
  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  const filterBy = ( searchType, items, searchByTitle, searchByCategory ) => {
    if( searchType === 'BY_TITLE'){
      return filteredItemsByTitle(items, searchByTitle)
    }
    if( searchType === 'BY_CATEGORY'){
      return filteredItemsByCategory(items, searchByCategory)
    }
    if( searchType === 'BY_TITLE_AND_CATEGORY'){
      return filteredItemsByCategory(items, searchByCategory).filter( item => {
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      })
    }
    if( !searchType ){
      return items
    }
  }
  
  
  useEffect(() => {
    if( searchByTitle && searchByCategory ){
      setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY',items, searchByTitle, searchByCategory))
    }
    if( searchByTitle && !searchByCategory ){
      setFilteredItems(filterBy('BY_TITLE',items, searchByTitle, searchByCategory))
    }
    if( !searchByTitle && searchByCategory ){
      setFilteredItems(filterBy('BY_CATEGORY',items, searchByTitle, searchByCategory))
    }
    if( !searchByTitle && !searchByCategory ){
      setFilteredItems(filterBy(null,items, searchByTitle, searchByCategory))
    }

    // return () => {
    //   setSearchByTitle(null)
    // }
      
  }, [items, searchByTitle, searchByCategory])

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
      searchByCategory,
      
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
      setSearchByCategory,

      
      filteredItemsByTitle,
      filteredItemsByCategory

    }} >
      {children}
    </ShoppingCartContext.Provider>
  )
}