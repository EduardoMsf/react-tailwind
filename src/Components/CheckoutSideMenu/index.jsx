import { XMarkIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import './styles.css'
import { OrderCard } from '../OrderCard';
import { totalPrice } from '../../utils';

export const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, setCartProducts } = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(product => product.id !== id)
    setCartProducts(filteredProducts)
  }

  console.log({cartProducts})
  return (
    <aside 
      className={`${isCheckoutSideMenuOpen ? "flex" : "hidden"} checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white h-full`} >
      <div className="flex justify-between items-center  p-6">
        <h2 className="font-medium text-xl">My order</h2>
        <XMarkIcon onClick={() => closeCheckoutSideMenu()} className="w-6 h-6 cursor-pointer text-black" />     
      </div>
      <div className="px-6 overflow-y-scroll">
        { cartProducts.map((product, index) =>(
            <OrderCard key={index} title={product.title} imgUrl={product.image} price={product.price} handleDelete={handleDelete} id={product.id} />
          ))
        
        }
      </div>
      <div className="flex justify-between items-center  p-6">
        <p className="text-lg font-medium">Total</p>
        <p className="text-lg font-medium">${totalPrice(cartProducts)}</p>
      </div>
      
    </aside>
  )
}

