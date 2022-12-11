import React from 'react'
import { navigation } from '../data'
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <nav className='hidden lg:flex'>
      <ul className='lg:flex space-x-6 font-body font-semibold text-sm text-primary '>
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.href}
                smooth={true}
                offset={-120}
                activeClass='active'
                spy={true}
                className='hover:text-accent-hover cursor-pointer transition-all duration-300'
              >
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav