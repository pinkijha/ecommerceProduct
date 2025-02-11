import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Search from './Search';

const Header = () => {
  return (
    <div className='flex shadow-md items-center justify-between'>
      <div>
        <img  className='md:h-[80px] rounded-full object-cover cursor-pointer'
        src='https://static.vecteezy.com/system/resources/previews/027/865/056/non_2x/shopping-logo-e-commerce-logotype-shooping-website-purple-gradient-women-s-shopping-website-fast-shopping-e-store-website-application-template-business-company-online-shop-vector.jpg' />
      </div>
      <Search/>
      <div className='md:p-1 md:mr-4 text-3xl cursor-pointer text-blue-700'>
      <FaShoppingCart />
      </div>
    </div>
  )
}

export default Header
