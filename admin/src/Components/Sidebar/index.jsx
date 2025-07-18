import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { FaRegImages } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";
import { RiProductHuntLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { GoTriangleDown } from "react-icons/go";
import { Collapse } from "react-collapse";
import {MyContext} from "../../App";

const Sidebar = () => {
  const [submenuIndex, setSubmenuIndex] = useState(null);

  const isOpenSubMenu = (index) => {
    setSubmenuIndex(submenuIndex === index ? null : index);
  };

 const context = useContext(MyContext);

  return (
    <div className={`sidebar fixed top-0 left-0 bg-[#fff]  h-full border-r border-[rgba(90,0,0,0.10)] py-2 px-4 w-[${context.isSidebarOpen=== true ? '18%' : '0px'}]`}>
      <div className="py-2 w-full">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmosGiyoJTAk23s6_jNwNro6jiFiVigUTJNw&s"
            className="w-[150px] p-4"
            alt="Logo"
          />
        </Link>
      </div>

      <ul className="mt-4">
    
        <li>
          <Link to="/">
          <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 !hover:bg-[#fafafa]">
            <RxDashboard className="text-[20px]" />
            <span>Dashboard</span>
          </Button>
          </Link>
        </li>

     
        <li>
          <Button
            className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 !hover:bg-[#fafafa]"
            onClick={() => isOpenSubMenu(1)}
          >
            <RiProductHuntLine className="text-[20px]" />
            <span>Home Slides</span>
            <span className="ml-auto block w-[30px] h-[30px] flex items-center justify-center">
              <GoTriangleDown className={`transition-all ${submenuIndex === 1 ? 'rotate-180' : ''}`} />
            </span>
          </Button>
          <Collapse isOpened={submenuIndex === 1}>
            <ul className="w-full ">
              <li className="w-full">
                 <Link to="/homeSlider/list">
                <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex  gap-3">
                <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "> </span>Home Banners List
                </Button>
               </Link>
              </li>
               <li className="w-full">
                <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3" onClick={()=>context.setIsOpenFullScreenPanel({
                    open:true,
                    model:'Add Home Slide'
                   })}>
                   <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "> </span>Add Home Banner Slide
                </Button>
              </li>
            </ul>
          </Collapse>
        </li>

     
        <li>
           <Link to="/users">
          <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 !hover:bg-[#fafafa]">
            <FiUsers className="text-[20px]" />
            <span>Users</span>
          </Button>
          </Link>
        </li>

      
        <li>
            
          <Button
            className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 !hover:bg-[#fafafa]"
            onClick={() => isOpenSubMenu(3)}
          >
            <FaRegImages className="text-[20px]" />
            <span>Product</span>
            <span className="ml-auto block w-[30px] h-[30px] flex items-center justify-center">
              <GoTriangleDown className={`transition-all ${submenuIndex === 3 ? 'rotate-180' : ''}`} />
            </span>
          </Button>
          <Collapse isOpened={submenuIndex === 3}>
            <ul className="w-full ">
              <li className="w-full">
                <Link to="/products">
                <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex  gap-3">
                <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "> </span>Product List
                </Button>
                </Link>
              </li>
               <li className="w-full">
                <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3" onClick={()=>context.setIsOpenFullScreenPanel({
                    open:true,
                    model:"Add Product"
                   })}>
                   <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]" > </span>Product Upload
                </Button>
                
              </li>
            </ul>
          </Collapse>
          
        </li>

       
       
        <li>
          <Button
            className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 !hover:bg-[#fafafa]"
            onClick={() => isOpenSubMenu(4)}
          >
            <BiCategory className="text-[20px]" />
            <span>Category</span>
            <span className="ml-auto block w-[30px] h-[30px] flex items-center justify-center">
              <GoTriangleDown className={`transition-all ${submenuIndex === 4 ? 'rotate-180' : ''}`} />
            </span>
          </Button>
          <Collapse isOpened={submenuIndex === 4}>
            <ul className="w-full ">
              <li className="w-full">
                <Link to="/Category/list">
                <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex  gap-3">
                <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "> </span>Category List
                </Button>
                </Link>
              </li>
               <li className="w-full">
            
                <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3"  onClick ={()=>context.setIsOpenFullScreenPanel({
                                        open:true,
                                        model:'Add  New Category'
                                       })}>
                   <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "> </span>Add  Category
                </Button>
         
              </li>
               <li className="w-full">
                <Link to="/subCategory/list">
                <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3" >
                   <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "> </span>Sub Category List
                </Button>
                </Link>
              </li>
               <li className="w-full">
             
                <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3" onClick ={()=>context.setIsOpenFullScreenPanel({
                        open:true,
                        model:'Add  New Sub Category'
                       })}>
                   <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "> </span>Add Sub Category
                </Button>
           
              </li>
            </ul>
          </Collapse>
        </li>

        
        <li>
          <Link to="/orders">
          <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 !hover:bg-[#fafafa]">
            <IoBagCheckOutline className="text-[20px]" />
            <span>Orders</span>
          </Button>
          </Link>
        </li>

     
        <li>
          <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2">
            <IoMdLogOut className="text-[20px]" />
            <span>Log out</span>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
