import React from 'react';
import { IoSearch } from "react-icons/io5";



const SearchBox=()=>{
    return(
        <div className=' w-full h-auto bg-[#f1f1f1] relative overflow-hidden'>
            <IoSearch className='absolute top-[8px] left-[10px] z-50 pointer-events-none opacity-80'/>
            <input type='text'placeholder='search here...' className='w-full h-[30px]  border border-[rgba(0,0,0,0.1)]  bg-[#f1f1f1] focus:outline-none pl-8 focus:border-[rgba(0,0,0,0.5)] rounded-md p-2 text-[13px]'/>
            
        </div>
    )
}

export default SearchBox;