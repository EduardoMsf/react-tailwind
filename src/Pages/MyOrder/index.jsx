import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { OrderCard } from "../../Components/OrderCard"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"

function MyOrder() {
  const { order } = useContext(ShoppingCartContext)
  console.log('my-order',order.slice(-1)[0])
    return (
      <Layout>
         <div className="flex items-center justify-center relative w-80 mb-5">
          <Link to='/my-orders' className="absolute left-0">
            <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
          </Link>
          <h1>My orders</h1>
        </div>
        <div className="flex flex-col w-80">
        { order?.slice(-1)[0].products.map((product, index) =>(
            <OrderCard key={index} title={product.title} imgUrl={product.image} price={product.price} id={product.id} />
          ))
        
        }
      </div>
      </Layout>
    )
  }
  
  export default MyOrder
  