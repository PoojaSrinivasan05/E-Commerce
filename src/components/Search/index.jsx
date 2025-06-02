import React from 'react';
import '../Search/style.css';
import Button from '@mui/material/Button';


const Search=()=>{
    return(
        <div className='SearchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative'>
            <input type='text' placeholder='Explore'className='w-full h-[30px] focus:outline-none bg-inherit p-6 text-[16px]'/>
            <Button className="!absolute top-[5px] right-[5px] z-50 w-[35px] !w-[35px] h-[35px] !rounded-full text-black">search</Button>
        </div>
    )
}

export default Search;