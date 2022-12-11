import React, { useState, useEffect } from 'react'
import BarsIcon from '../assets/img/bars.png'
import CloseIcon from '../assets/img/close.png'
import { navigation, Navigation } from '../data'
import { Link } from 'react-scroll'

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='lg:hidden relative z-20'>
      <button onClick={() => setIsOpen(true)}>
        <img src={BarsIcon} alt='' />
      </button>
      <ul
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } bg-primary fixed top-0 w-full h-screen text-white transition-all flex  flex-col justify-center items-center space-y-8 text-lg`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className='absolute top-6 left-6'
        >
          <img src={CloseIcon} alt='' />
        </button>
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.href}
                activeClass='active'
                spy={true}
                offset={-200}
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

export default NavMobile
