import React, { useState } from 'react';
import Button  from '@mui/material/Button';
import { GiClick } from "react-icons/gi";
import {Link} from "react-router-dom";
import CategoryPanel from './CategoryPanel';

import "../Navigation/style.css"

export const Navigation=()=>{
    const [isOpenCatPanel,setIsOpenCatPanel]=useState(false);
    const openCategoryPanel=()=>{
       setIsOpenCatPanel(true);
    }
  

    return (<>
    <nav className='py-2'>
        <div className='container flex items-center justify-end'>
        <div className="col-1 w-[20%]">
            <Button className="!text-black gap-1 w-full"onClick={openCategoryPanel}>Categories<GiClick className="text-[18px]  font-bold cursor-pointer "/></Button>
        </div>
        <div className="col-2 w-[55%]">
            <ul className="flex items-center gap-3 nav">
                <li className="list-none relative">
                    <Link to="/" className="link transition text-[14px]font-[500]"><Button className="link transition
                    !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ac5555]">Home</Button>
                    </Link>
                </li>
                <li className="list-none relative">
                    <Link to="/" className="link transition text-[14px] font-[500]"><Button className="link transition
                    !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ac5555]">Fashion</Button>
                    </Link>
                    <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                        <ul>
                            <li className="list-none w-full">
                                <Link to="/" className="w-full">
                                <Button className='!text-[rgba(0,0,0,0.8)] hover:!text-[#ac5555] w-full !text-left !justify-start rounded-none'>Men</Button>
                                </Link>
                            </li>
                            <li className="list-none w-full">
                                <Link to="/" className="w-full">
                                <Button className='!text-[rgba(0,0,0,0.8)] hover:!text-[#ac5555] w-full !text-left !justify-start rounded-none'>Women</Button>
                                </Link>
                            </li>
                            <li className="list-none w-full">
                                <Link to="/" className="w-full">
                                <Button className='!text-[rgba(0,0,0,0.8)] hover:!text-[#ac5555] w-full !text-left !justify-start rounded-none'>Kids</Button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="list-none relative">
                    <Link to="/" className="link transition text-[14px] font-[500]"><Button className="link transition
                    !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ac5555]">Jewellery</Button>
                    </Link>
                </li>
                <li className="list-none relative">
                    <Link to="/" className="link transition text-[14px] font-[500]"><Button className="link transition
                    !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ac5555]">Bags</Button>
                    </Link>
                    <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                        <ul>
                            <li className="list-none w-full">
                                <Link to="/" className="w-full">
                                <Button className='!text-[rgba(0,0,0,0.8)] hover:!text-[#ac5555] w-full !text-left !justify-start rounded-none'>Men Bags </Button>
                                </Link>
                            </li>
                            <li className="list-none w-full">
                                <Link to="/" className="w-full">
                                <Button className='!text-[rgba(0,0,0,0.8)] hover:!text-[#ac5555] w-full !text-left !justify-start rounded-none'>Women Bags</Button>
                                </Link>
                            </li>
                            <li className="list-none w-full">
                                <Link to="/" className="w-full">
                                <Button className='!text-[rgba(0,0,0,0.8)] hover:!text-[#ac5555] w-full !text-left !justify-start rounded-none'>Kids Bags</Button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="list-none relative">
                    <Link to="/" className="link transition text-[14px] font-[500]"><Button className="link transition
                    !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ac5555]">Footwear</Button>
                    </Link>
                    <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                        <ul>
                            <li className="list-none w-full">
                                <Link to="/" className="w-full">
                                <Button className='!text-[rgba(0,0,0,0.8)] hover:!text-[#ac5555] w-full !text-left !justify-start rounded-none'>Men Footwear</Button>
                                </Link>
                            </li>
                            <li className="list-none w-full">
                                <Link to="/" className="w-full">
                                <Button className='!text-[rgba(0,0,0,0.8)] hover:!text-[#ac5555] w-full !text-left !justify-start rounded-none'>Women Footwear</Button>
                                </Link>
                            </li>
                            <li className="list-none w-full">
                                <Link to="/" className="w-full">
                                <Button className='!text-[rgba(0,0,0,0.8)] hover:!text-[#ac5555] w-full !text-left !justify-start rounded-none'>Kids Footwear</Button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                 <li className="list-none relative">
                    <Link to="/" className="link transition text-[14px] font-[500]"><Button className="link transition
                    !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ac5555]">Beauty</Button>
                    </Link>
                    <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                        <ul>
                            <li className="list-none w-full">
                                <Link to="/" className="w-full">
                                <Button className='!text-[rgba(0,0,0,0.8)] hover:!text-[#ac5555] w-full !text-left !justify-start rounded-none'>Face</Button>
                                </Link>
                            </li>
                            <li className="list-none w-full">
                                <Link to="/" className="w-full">
                                <Button className='!text-[rgba(0,0,0,0.8)] hover:!text-[#ac5555] w-full !text-left !justify-start rounded-none'>Body</Button>
                                </Link>
                            </li>
                            <li className="list-none w-full">
                                <Link to="/" className="w-full">
                                <Button className='!text-[rgba(0,0,0,0.8)] hover:!text-[#ac5555] w-full !text-left !justify-start rounded-none'>Hair</Button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                        <li className="list-none relative">
                    <Link to="/" className="link transition text-[14px] font-[500]"><Button className="link transition
                    !font-[500] !text-[rgba(0,0,0,0.9)] hover:!text-[#ac5555]">Wellness</Button>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="col-3 w-[25%]">
          <p className="text-[14px] font-bold">(Exclusive Offers on Weekends!!)</p>
        </div>
        </div>
    </nav>

    <CategoryPanel isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel}/>
</>);
};

export default Navigation;