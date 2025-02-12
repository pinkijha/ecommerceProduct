import React from 'react'
import { useContextGlobalApi } from '../context/useContextApp'

const Cart = () => {
    const {products} = useContextGlobalApi();
  return (
    <div className='flex flex-col w-auto h-full border p-4 border-gray-50 shadow-sm m-10'>
      <h1 className='font-semibold text-2xl text-blue-600'>Your cart</h1>
      <div className='flex space-x-4 md:mt-2 p-2 shadow'>
        <img src='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSnDhi8TdTlqIyUWzazafoHnXK8tW0BNnNMHLiBkoTMDsKy-kGOmp1KnZyeTDbtnFffI8w7UANCYVHzS9JdlAsmjox-R88Nj0nkbggpbs7teC9qGnQyzU1eDYAsR1SC8GAZjKEiwQ&usqp=CAc' 
        className='w-30 h-30  rounded-xl shadow-2xs' />
        <div>            
        <p className='text-lg font-medium'>Lakme</p>
        <p className='text-sm'>Lakme 9to5 Powerplay Priming Matte Lipstick  3.6g - Lasts 16hrs - Deep Wine</p>
        <p className=''>230.00 RS</p>
        </div>      
      </div>

      
     
    </div>
  )
}

export default Cart
