import { BrowserRouter, useRoutes } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import '../../App.css'
import { NavBar } from '../../Components/Navbar'
import { ShoppingCartProvider } from '../../Context'

const AppRouter = () =>{
  let routes = useRoutes([
    { path: '/', element: <Home />},
    { path: '/my-account', element: <MyAccount />},
    { path: '/my-order', element: <MyOrder />},
    { path: '/my-orders', element: <MyOrders />},
    { path: '/sing-in', element: <SignIn />},
    { path: '/*', element: <NotFound />},
  ])

  return routes;
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
