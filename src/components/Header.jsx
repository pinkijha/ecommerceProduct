import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className='flex shadow-md items-center justify-between'>
      <div>
        <img  className='md:h-[80px] rounded-full object-cover '
        src='https://static.vecteezy.com/system/resources/previews/027/865/056/non_2x/shopping-logo-e-commerce-logotype-shooping-website-purple-gradient-women-s-shopping-website-fast-shopping-e-store-website-application-template-business-company-online-shop-vector.jpg' />
      </div>
      <div className='relative space-x-1 items-center'>
        <input type='text' className='focus:ring-2 focus:ring-blue-100 outline-none border
         border-slate-300 rounded-xl md:py-1 md:px-8'
        placeholder='Search..' />
        <span className='absolute z-10 left-2 text-lg top-2'><CiSearch /></span>
      </div>
      <div className='md:p-1 md:mr-4 text-3xl text-blue-700'>
      <FaShoppingCart />
      </div>
    </div>
  )
}

export default Header
