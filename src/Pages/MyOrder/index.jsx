import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { OrderCard } from "../../Components/OrderCard"
import { ShoppingCartContext } from "../../Context"

function MyOrder() {
  const { order } = useContext(ShoppingCartContext)
  console.log('my-order',order.slice(-1)[0])
    return (
      <Layout>
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
  