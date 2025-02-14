import React from 'react';
import { FaCartPlus } from "react-icons/fa";
import { useContextGlobalApi } from '../context/useContextApp';
import { FaFilter } from "react-icons/fa6";
import Filter from './Filter';

const Products = () => {
  const { products, searchTerm, addCart, setAddCart, addToCart, filter, filterHandler } = useContextGlobalApi();
 

  const handleCart = (product) => {
    setAddCart(addCart + 1);
    console.log(addCart);
    addToCart(product);
  };

  // Filter products based on search input
  const filteredProducts = products?.length
    ? products.filter((product) =>
        product.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <>
      <div className='relative flex gap-5  text-2xl md:mt-5 md:ml-[90px]'>
      <h1 className=' font-semibold'>Products</h1>
      <button onClick={filterHandler} className=' cursor-pointer border border-gray-300 md:p-1.5 items-center hover:scale-105 duration-200
       hover:bg-gray-100 rounded-full text-blue-700'>
       <FaFilter  /> 
         </button>

         <div className='absolute z-10 top-9 left-30'>
         
          {filter ? <Filter/> : ''}
         </div>
      </div>
      
      
      <div className='flex flex-wrap md:mx-10 md:mb-8'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((items) => (
            <div key={items.id} className='flex space-y-2 md:w-[220px] rounded-lg shadow-md md:p-2 md:ml-[50px] md:mt-[20px] border border-gray-200'>
              <div>
                <img className='md:h-[200px] cursor-pointer rounded-lg' src={items.thumbnail} alt={items.title} />
                <h1 className='line-clamp-1 text-lg font-bold'>{items.title}</h1>
                <p className='line-clamp-2 w-[200px]'>{items.description}</p>
                <div className='flex justify-between items-center md:m-1'>
                  <p className='text-lg font-semibold'>${items.price}</p>
                  <span className='text-2xl text-blue-700 cursor-pointer' onClick={() => handleCart(items)}>
                    <FaCartPlus />
                  </span>
                </div>
                <p className='text-green-600'>{items.brand}</p>
              </div>
            </div>
          ))
        ) : (
          <p className='md:ml-[600px] text-xl md:mt-[20px] text-red-500 '>No products found.</p>
        )}
      </div>
    </>
  );
};

export default Products;
