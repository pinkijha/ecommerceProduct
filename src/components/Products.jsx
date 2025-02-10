import React from 'react';
import { FaCartPlus } from "react-icons/fa";

const Products = () => {
  return (
    <div className='flex-flex-col space-y-2 md:w-[220px] rounded-lg shadow-md md:p-2 md:ml-[50px] md:mt-[20px] border border-gray-200'>
      <img className='md:h-[200px] rounded-lg'
      src='https://programmerowais.github.io/EcommerceProductPage.github.io/static/media/img1.520cc50bd13955f55cb2.jpg'/>
      <p className='line-clamp-2  w-[200px]'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,they'll withstand everything the weather can offer.</p>
      <div className='flex justify-between items-center md:m-1'>
      <p className='text-lg font-semibold'>$125.00</p>
      <span className='text-2xl text-blue-700 cursor-pointer'><FaCartPlus /></span>
      </div>
    </div>
  )
}

export default Products
