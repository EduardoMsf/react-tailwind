
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { useContext } from "react"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"

export const NavBar = () => {
  const activeStyle = 'underline underline-offset-4'
  const { count, setSearchByCategory } = useContext(ShoppingCartContext)
  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-white">
      <ul className="flex items-center gap-3">
        <li  className="font-semibold text-lg">
          <NavLink to="/" >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? activeStyle : undefined}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            onClick={() => setSearchByCategory('clothes')}
            className={({ isActive }) => isActive ? activeStyle : undefined}>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => setSearchByCategory('electronics')}
            className={({ isActive }) => isActive ? activeStyle : undefined}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            onClick={() => setSearchByCategory('furnitures')}
            className={({ isActive }) => isActive ? activeStyle : undefined}>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            onClick={() => setSearchByCategory('toys')}
            className={({ isActive }) => isActive ? activeStyle : undefined}>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            onClick={() => setSearchByCategory('others')}
            className={({ isActive }) => isActive ? activeStyle : undefined}>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          samaniegomsf@gmail.com
        </li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => isActive ? activeStyle : undefined}>
            My orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => isActive ? activeStyle : undefined}>
            My account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sing-in"
            className={({ isActive }) => isActive ? activeStyle : undefined}>
            Sign In
          </NavLink>
        </li>
        <li className="flex gap-2">
          <ShoppingBagIcon className="w-4 h-4"/> {count}
        </li>
      </ul>
    </nav>
  )
}
