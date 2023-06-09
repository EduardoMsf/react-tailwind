import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { PlusIcon, CheckIcon } from "@heroicons/react/24/outline"

export const Card = ({ category , title, price, image, description, id }) => {

  const { count, setCount, openProductDetail, setProductToShow, cartProducts, closeProductDetail, setCartProducts, openCheckoutSideMenu } = useContext(ShoppingCartContext)

  const showProduct = ({ image, title, price, description}) => {
    openProductDetail()
    setProductToShow({ image, title, price, description })

  }

  const addProductsToCart = (event, {image, title, price}) =>{
    event.stopPropagation()
    setCount(count + 1)
    setCartProducts([...cartProducts, {image, title, price, id} ])
    openCheckoutSideMenu()
    closeProductDetail()
  }

  const renderIcon = (id) => {

    const isInCart = cartProducts.filter( product => product.id === id).length > 0

    if(isInCart){
      return (
      <div
        className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2">
        <CheckIcon className="w-4 h4 text-white" />
      </div>)
    } else{
      return (
      <div
        onClick={(event) => addProductsToCart(event, {image, title, price, id})}
        className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2">
        <PlusIcon className="w-4 h4 text-black" />
      </div>)
    }
  }

  return (
    <div
      onClick={() => showProduct({ image, title, price, description})}
      className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 p7-0.5">{category}</span>
        <img className="w-full h-full object-cover rounded-lg" src={image} alt={title}/>
        {renderIcon(id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-sm font-medium">${price}</span>
      </p>
    </div>
  )
}
