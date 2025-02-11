import React from 'react';
import { FaCartPlus } from "react-icons/fa";
import { useContextGlobalApi } from '../context/useContextApp';

const Products = () => {
  const {products, setProducts} = useContextGlobalApi()
  return (
    
    <>
    <h1 className='md:mt-5 md:ml-[90px] font-semibold text-2xl'>Products</h1>
    <div className='flex flex-wrap md:mx-10 md:mb-8'>
     {products.map((items)=>(
      <div className='flex space-y-2 md:w-[220px] rounded-lg shadow-md md:p-2 md:ml-[50px] md:mt-[20px] border border-gray-200'>
      <div className='' key={items.id}>
         <img className='md:h-[200px]  cursor-pointer rounded-lg'
      src={items.thumbnail} />
      <h1 className='line-clamp-1 text-lg font-bold'>{items.title}</h1>
      <p className='line-clamp-2  w-[200px]'>{items.description}</p>
      <div className='flex justify-between items-center md:m-1'>
      <p className='text-lg font-semibold'>${items.price}</p>
      <span className='text-2xl text-blue-700 cursor-pointer'><FaCartPlus /></span>
      </div>
      <p className='text-green-600'>{items.brand}</p>
      </div>
      </div>
     ))}
    </div>
    </>
  )
}

export default Products
