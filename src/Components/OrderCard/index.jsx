import { XMarkIcon } from '@heroicons/react/24/solid';

export const OrderCard = props => {

  const { id, imgUrl, title, price, handleDelete } = props
  return (
    <div className="flex justify-between items-center my-2">
      <div className="flex items-center gap-2">
        <figure className='w-20 h-20'>
          <img className="w-full h-full rounded-lg object-cover"  src={imgUrl} alt={title}/>
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">{price}</p>
        { handleDelete && <XMarkIcon onClick={() => handleDelete(id)} className="w-6 h-6 cursor-pointer text-black" />}
        
      </div>

    </div>
  )
}
