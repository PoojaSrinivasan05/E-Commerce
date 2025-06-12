import React from "react";
import "../ProductItem/style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { MdZoomOutMap } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";

const ProductItem = () => {
  return (
    <div className="productItem h-[320px] shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)]">
      <div className=" group imgWrapper w-[100%]   rounded-md relative">
        <Link to="/">
          <div className="img   overflow-hidden">
            <img
              src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg"
              className="w-full !h-[200px]"
            />
            <img
              src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg"
              className="w-full !h-[200px] transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-100"
            />
          </div>
        </Link>
        <span
          className="discount flex items-center absolute top-[10px] left-[10px] 
                z-50 bg-primary text-black rounded-lg p-1 text-[10px] font-[500]"
        >
          10%
        </span>

        <div
          className="action absolute top-[-200px] right-[-5px] z-50 flex items-center gap-1 flex-col transition-all 
            duration-450 group-hover:top-[15px]"
        >
          <Tooltip title="Cart" placement="left">
            <button className="!w-[30px] !h-[30px] !min-w-[30px]  text-black">
              <PiShoppingCartSimpleFill className="text-[18px] text-black group-hover:text-black " />
            </button>
          </Tooltip>
          <Tooltip title="Like" placement="left">
            <button className="!w-[30px] !h-[30px] !min-w-[30px]text-black">
              <FaHeartCirclePlus className="text-[18px] text-black group-hover:text-black " />
            </button>
          </Tooltip>
          <Tooltip title="View Detaiils" placement="left">
            <button className="!w-[30px] !h-[30px] !min-w-[30px]text-black">
              <MdZoomOutMap className="text-[18px] text-black group-hover:text-black " />
            </button>
          </Tooltip>
        </div>
      </div>
      <div className="info p-3 py-4 ">
        <h6 className="text-[14px]">
          <Link to="/" className="link">
            CLAFOUTIS
          </Link>
        </h6>
        <h3 className="text-[13px] font-[400]  mt-1 title text-rgba(0,0,0,0.9)">
          Men Opaque Casual Shirt
        </h3>
        <Rating name="size-small" defaultValue={5} size="small" readOnly />
        <div className="flex items-center gap-2">
          <span className="oldPrice line-through text-gray-500 text-[12px]">
            ₹900
          </span>
          <span className="price text-primary font-bold text-[13px]">₹600</span>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;
