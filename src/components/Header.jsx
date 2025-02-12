import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Search from './Search';
import { NavLink } from 'react-router-dom';
import { useContextGlobalApi } from '../context/useContextApp';

const Header = () => {
  const {addCart, setAddCart} = useContextGlobalApi()
  return (
    <div className='flex shadow-md items-center justify-between'>
      <div>
        <NavLink to='/'>          
        <img  className='border-none md:h-[80px] rounded-full object-cover cursor-pointer' alt='logo'
        src='https://static.vecteezy.com/system/resources/previews/027/865/056/non_2x/shopping-logo-e-commerce-logotype-shooping-website-purple-gradient-women-s-shopping-website-fast-shopping-e-store-website-application-template-business-company-online-shop-vector.jpg' />
        </NavLink>
      </div>
      <Search/>
      <div className='md:p-2 md:mr-8 text-3xl cursor-pointer text-blue-700'>  
      <NavLink to={'/cart'} className='relative'>
            
      {addCart >0 && (
        <span className='absolute -top-2 md:px-1 -right-2 z-10 text-[15px] bg-red-600 rounded-full
        text-white'>{addCart}</span>
      )}
      <FaShoppingCart />
      </NavLink>
      </div>
    </div>
  )
}

export default Header
