import { useContext } from "react"
import { Layout } from "../../Components/Layout"
import { OrdersCard } from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"

function MyOrders() {
  const { order } = useContext(ShoppingCartContext)

  console.log('MyOrders component', order)

    return (
      <Layout>
         <div className="flex items-center justify-center relative w-80">
          <h1 className="font-medium text-xl mb-4">My orders</h1>
        </div>

        {
          order.map((item, index) => {
            return (<Link key={index} to={`/my-orders/${index}`} >
              <OrdersCard  totalPrice={item.totalPrice} totalProducts={item.totalProducts} />
            </Link>)
          })
        }

      </Layout>
    )
  }
  
  export default MyOrders
  