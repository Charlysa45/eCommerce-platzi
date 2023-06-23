import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../context'

export const Navbar = () => {
  const { cartProducts } = useContext(ShoppingCartContext)

  const leftRoutes = [
    {
      to: '/',
      text: 'Home',
      className: 'font-semibold text-lg',
    },
    {
      to: '/',
      text: 'All',
    },
    {
      to: '/clothes',
      text: 'Clothes',
    },
    {
      to: '/electronics',
      text: 'Electronics',
    },
    {
      to: '/furnitures',
      text: 'Furnitures',
    },
    {
      to: '/toys',
      text: 'Toys',
    },
    {
      to: '/others',
      text: 'Others',
    },
  ]

  const rightRoutes = [
    {
      to: '/my-orders',
      text: 'My Orders',
    },
    {
      to: '/my-account',
      text: 'My Account',
    },
    {
      to: '/sign-in',
      text: 'Sign In',
    },
  ]

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        {leftRoutes.map((route) => (
          <li key={route.text} className={route?.className}>
            <NavLink
              to={route.to}
              className={({ isActive }) =>
                isActive ? 'underline-offset-4' : ''
              }
            >
              {route.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-3">
        <li>cars@platzi.com</li>
        {rightRoutes.map((route) => (
          <li key={route.text} className={'font-semibold'}>
            <NavLink
              to={route.to}
              className={({ isActive }) =>
                isActive ? 'underline underline-offset-4' : ''
              }
            >
              {route.text}
            </NavLink>
          </li>
        ))}
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          {cartProducts.length}
        </div>
      </ul>
    </nav>
  )
}
