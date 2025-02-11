import React from 'react'
import { useContextGlobalApi } from '../context/useContextApp'
import { CiSearch } from "react-icons/ci";
import { ReactTyped } from 'react-typed';

const Search = () => {
    const {searchTerm, setSearchTerm} = useContextGlobalApi();

  return (
    <div>
      <div className='relative space-x-1 items-center'>
              <input type='text' value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='focus:ring-2 focus:ring-blue-100 outline-none border
               border-slate-300 rounded-xl md:py-1 md:px-8'
              placeholder='' />
              <span className='absolute z-10 left-2 text-lg top-2'><CiSearch /></span>
               {/* Typing Animation inside Input Field (Only if Input is Empty) */}
               <div className='absolute z-10 left-2 text-xs top-2'>
               {searchTerm === "" && (
          <div className="md:ml-10 text-gray-500">
            <ReactTyped className=''
              strings={[
                "Search by Product...",
                "Search by Brand...",
                "Search by Name...",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </div>
        )}
          
               </div>
          </div>
    </div>
  )
}

export default Search
