import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Search from './Search';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex shadow-md items-center justify-between'>
      <div>
        <NavLink to='/'>          
        <img  className='md:h-[80px] rounded-full object-cover cursor-pointer' alt='logo'
        src='https://static.vecteezy.com/system/resources/previews/027/865/056/non_2x/shopping-logo-e-commerce-logotype-shooping-website-purple-gradient-women-s-shopping-website-fast-shopping-e-store-website-application-template-business-company-online-shop-vector.jpg' />
        </NavLink>
      </div>
      <Search/>
      <div className='md:p-1 md:mr-4 text-3xl cursor-pointer text-blue-700'>
      <NavLink to={'/cart'}><FaShoppingCart /></NavLink>
      </div>
    </div>
  )
}

export default Header
