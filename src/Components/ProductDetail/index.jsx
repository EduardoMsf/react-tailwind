import { XMarkIcon } from '@heroicons/react/24/outline';
import './styles.css'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

export const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, productToShow } = useContext(ShoppingCartContext)
  return (
    <aside 
      className={`${isProductDetailOpen ? "flex" : "hidden"} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white h-full`} >
      <div className="flex justify-between items-center  p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <XMarkIcon onClick={() => closeProductDetail()} className="w-6 h-6 cursor-pointer text-black" />     
      </div>
      <figure className='px-6'>
        <img className='w-full h-full rounded-lg' src={productToShow.image} alt={productToShow.title} />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl'>{productToShow.title}</span>
        <span className='font-medium text-md'>${productToShow.price}</span>
        <span className='font-light text-sm'>{productToShow.description}</span>
      </p>
    </aside>
  )
}

