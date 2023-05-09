import { XMarkIcon } from '@heroicons/react/24/outline';
import './styles.css'

export const ProductDetail = () => {
  return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white h-full">
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl p-6">Detail</h2>
        <XMarkIcon className="w-6 h-6 text-black" />
      </div>
    </aside>
  )
}

