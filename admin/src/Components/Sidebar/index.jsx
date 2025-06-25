import React, { useState } from "react";
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

const Sidebar = () => {
  const [submenuIndex, setSubmenuIndex] = useState(null);

  const isOpenSubMenu = (index) => {
    setSubmenuIndex(submenuIndex === index ? null : index);
  };

  return (
    <div className="sidebar fixed top-0 left-0 bg-[#fff] w-[18%] h-full border-r border-[rgba(90,0,0,0.10)] py-2 px-4">
      <div className="py-2 w-full">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-dSW7A8nZ_ooSljbkGh_A07fWwuJlWV3FQ&s"
            className="w-[120px] p-4"
            alt="Logo"
          />
        </Link>
      </div>

      <ul className="mt-4">
    
        <li>
          <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 !hover:bg-[#fafafa]">
            <RxDashboard className="text-[20px]" />
            <span>Dashboard</span>
          </Button>
        </li>

     
        <li>
          <Button
            className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 !hover:bg-[#fafafa]"
            onClick={() => isOpenSubMenu(1)}
          >
            <FaRegImages className="text-[20px]" />
            <span>Home Slides</span>
            <span className="ml-auto block w-[30px] h-[30px] flex items-center justify-center">
              <GoTriangleDown className={`transition-all ${submenuIndex === 1 ? 'rotate-180' : ''}`} />
            </span>
          </Button>
          <Collapse isOpened={submenuIndex === 1}>
            <ul className="w-full ">
              <li className="w-full">
                <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex  gap-3">
                <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "> </span>Home Banners List
                </Button>
              </li>
               <li className="w-full">
                <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                   <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)] "> </span>Add Home Banner Slide
                </Button>
              </li>
            </ul>
          </Collapse>
        </li>

     
        <li>
          <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 !hover:bg-[#fafafa]">
            <FiUsers className="text-[20px]" />
            <span>Users</span>
          </Button>
        </li>

      
        <li>
          <Button
            className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 !hover:bg-[#fafafa]"
            onClick={() => isOpenSubMenu(2)}
          >
            <RiProductHuntLine className="text-[20px]" />
            <span>Products</span>
            <span className="ml-auto block w-[30px] h-[30px] flex items-center justify-center">
              <GoTriangleDown />
            </span>
          </Button>
          <Collapse isOpened={submenuIndex === 2}>
            <ul className="w-full pl-4">
              <li>
                <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full">
                  Add Product
                </Button>
              </li>
            </ul>
          </Collapse>
        </li>

       
        <li>
          <Button
            className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 !hover:bg-[#fafafa]"
            onClick={() => isOpenSubMenu(3)}
          >
            <BiCategory className="text-[20px]" />
            <span>Category</span>
            <span className="ml-auto block w-[30px] h-[30px] flex items-center justify-center">
              <GoTriangleDown />
            </span>
          </Button>
          <Collapse isOpened={submenuIndex === 3}>
            <ul className="w-full pl-4">
              <li>
                <Button className="!text-[rgba(0,0,0,0.8)] !capitalize !justify-start !w-full">
                  Add Category
                </Button>
              </li>
            </ul>
          </Collapse>
        </li>

        
        <li>
          <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 !hover:bg-[#fafafa]">
            <IoBagCheckOutline className="text-[20px]" />
            <span>Orders</span>
          </Button>
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
