import React from 'react';
import { useContextGlobalApi } from '../context/useContextApp';

const Cart = () => {
    const { cart, removeFromCart } = useContextGlobalApi();

    return (
        <div className='flex flex-col w-auto h-full border p-4 border-gray-50 shadow-sm m-10'>
            <h1 className='font-semibold text-2xl text-blue-600'>Your Cart</h1>

            {cart.length === 0 ? (
                <p className='text-red-600 md:ml-[600px] text-xl'>Your cart is empty.</p>
            ) : (
                <>
                    {cart.map((item, index) => (
                        <div key={index} className='flex space-x-4 md:mt-2 p-2 border border-gray-200 rounded-2xl'>
                            <img src={item.thumbnail} className='w-30 h-30 ' alt={item.title} />
                            <div>
                                <p className='text-lg font-medium'>{item.title}</p>
                                <p className='text-sm'>{item.description}</p>
                                <p className=''>${item.price}</p>
                                {/* ✅ Remove from cart button */}
                                <button
                                    className="bg-red-500 text-white px-4 cursor-pointer py-1 rounded mt-2"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default Cart;
