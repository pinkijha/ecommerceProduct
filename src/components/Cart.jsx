import React from "react";
import { useContextGlobalApi } from "../context/useContextApp";

const Cart = () => {
  const { cart } = useContextGlobalApi();

  return (
    <div className='flex flex-col w-auto h-full border p-4 border-gray-50 shadow-sm m-10'>
      <h1 className='font-semibold text-2xl text-blue-600'>Your cart</h1>

      {cart.length === 0 ? (
        <p className='text-red-600 text-xl md:ml-[600px]'>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className='flex space-x-4 md:mt-2 p-2 shadow'>
            <img src={item.thumbnail} className='w-30 h-30 rounded-xl shadow-2xs' alt={item.title} />
            <div>
              <p className='text-lg font-medium'>{item.title}</p>
              <p className='text-sm'>{item.description}</p>
              <p className=''>${item.price}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
