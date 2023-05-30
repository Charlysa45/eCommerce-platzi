import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../context'

export const Navbar = () => {
  const { count } = useContext(ShoppingCartContext)

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
        <li>🛒 {count}</li>
      </ul>
    </nav>
  )
}
