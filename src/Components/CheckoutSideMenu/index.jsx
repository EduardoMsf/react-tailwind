import { XMarkIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import './styles.css'
import { OrderCard } from '../OrderCard';
import { totalPrice } from '../../utils';
import { Link } from 'react-router-dom';

export const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts, setCartProducts, order, setOrder, setCount, setSearchByTitle } = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(product => product.id !== id)
    setCartProducts(filteredProducts)
  }

  const handleCheckout = () =>{
    const orderToAdd = {
      date: '11/05/23',
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts)
    }
    setOrder([...order, orderToAdd])
    setCartProducts([])
    setCount(0)
    setSearchByTitle(null)
  }

  
  return (
    <aside
      className={`${isCheckoutSideMenuOpen ? "flex" : "hidden"} checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white h-full`} >
      <div className="flex justify-between items-center  p-6">
        <h2 className="font-medium text-xl">My order</h2>
        <XMarkIcon onClick={() => closeCheckoutSideMenu()} className="w-6 h-6 cursor-pointer text-black" />    
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        { cartProducts.map((product, index) =>(
            <OrderCard key={index} title={product.title} imgUrl={product.image} price={product.price} handleDelete={handleDelete} id={product.id} />
          ))
        
        }
      </div>
      <div className="flex justify-between items-center p-6 mb-4">
        <p className="text-lg font-medium">Total</p>
        <p className="text-lg font-medium">${totalPrice(cartProducts)}</p>
      </div>
      <div className='flex items-center p-6 mb-6'>
        <Link to='/my-orders/last' className='w-full pr-8' >
          <button disabled={cartProducts.length == 0}  onClick={() => handleCheckout()} className={`${cartProducts.length == 0 ? 'bg-gray-500': 'bg-black' } w-full py-3 mx-6 text-white rounded-lg`}>Checkout</button>
        </Link>
      </div>
      
    </aside>
  )
}

