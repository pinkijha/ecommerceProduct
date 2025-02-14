import React, { useState } from 'react';

const Filter = () => {
  const [price, setPrice] =useState(50);
  return (
    <>
      <svg
        width="13"
        height="10"
        viewBox="0 0 13 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-2"
      >
        <path d="M6.5 0L12.1292 9.75H0.870835L6.5 0Z" fill="black" />
      </svg>

      <div className="absolute -left-4 md:w-[250px] bg-blue-50 rounded-lg p-4 border border-gray-300 shadow-md">
        <h1 className="text-lg font-semibold mb-3">Filter by</h1>

        <section className="space-y-3">
          <div className="grid grid-cols-2 items-center gap-x-4">
            <span className="text-sm font-semibold">Name</span>
            <select className="border border-gray-300 text-xs rounded-md px-2 py-1 w-full">
              <option>All</option>
              <option>Red Lipstick</option>
              <option>Nail Polish</option>
              <option>Mascara</option>
              <option>Calvin Klein</option>
            </select>
          </div>

          <div className="grid grid-cols-2 items-center gap-x-4">
            <span className="text-sm font-semibold">Brands</span>
            <select className="border border-gray-300 text-xs rounded-md px-2 py-1 w-full">
              <option>All</option>
              <option>Essence</option>
              <option>Gucci</option>
              <option>Annibale Colombo</option>
              <option>Calvin Klein</option>
            </select>
          </div>
          <div className='grid grid-cols-2 items-center gap-x-4'>
            <span className="text-sm font-semibold items-center">Price ${price}</span>
         <div className='flex flex-col'>
         <input value={price} onChange={(e) => setPrice(e.target.value)} type='range' min='1' max='3000'
             className='cursor-pointer'  />

             {/* Min & Max Labels */}
            <div className='flex justify-between text-xs text-blue-600'>
            <span>$1</span>
            <span>$3000</span>
            </div>
         </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Filter;
