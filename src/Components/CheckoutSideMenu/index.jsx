import { XMarkIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import './styles.css'
import { OrderCard } from '../OrderCard';

export const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts } = useContext(ShoppingCartContext)
  return (
    <aside 
      className={`${isCheckoutSideMenuOpen ? "flex" : "hidden"} checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white h-full`} >
      <div className="flex justify-between items-center  p-6">
        <h2 className="font-medium text-xl">My order</h2>
        <XMarkIcon onClick={() => closeCheckoutSideMenu()} className="w-6 h-6 cursor-pointer text-black" />     
      </div>
      <div className="px-6 overflow-y-scroll">
        { cartProducts.map((product, index) =>(
            <OrderCard key={index} title={product.title} imgUrl={product.image} price={product.price} />
          ))
        
        }
      </div>
      
    </aside>
  )
}

