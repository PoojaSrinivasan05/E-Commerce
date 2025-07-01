import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import { MdOutlineLogin } from "react-icons/md";

const Login =()=>{
    return(
        <section className='bg-[#fff]'>
        <header className="w-full  fixed top-0 left-0 px-4 py-3 flex items-center justify-between z-50">
            <Link to = "/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-dSW7A8nZ_ooSljbkGh_A07fWwuJlWV3FQ&s" className="w-[100px]" /></Link>
            <div className='flex items-center gap-4'>
                <Button className="!rounded-full !text-[rbga(0,0,0,0.8)] !px-5"><MdOutlineLogin />Login</Button>
            </div>
        </header>
        <img src="/Pattern.jpg" className='w-full fixed top-0 left-0 opacity-5' />
        </section>
    )
}

export default Login;