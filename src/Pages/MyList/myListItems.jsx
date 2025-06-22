import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Rating from "@mui/material/Rating";


const MyListItems = () => {

  return (
    <div className="cartItems w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
      <div className="img w-[15%] rounded-md overflow-hidden">
        <Link to="/products/7685" className="group">
          <img
            src="https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/o/c/a/-original-imah76jszpjhp2yr.jpeg?q=70&crop=false"
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>

      <div className="info w-[85%] relative">
        <MdDelete className="cursor-pointer absolute top-[0px] right-[0px] text-[17px] link transition-all" />
        <span className="text-[13px]">Noise</span>
        <h3 className="text-[15px]">
          <Link className="link">
            Noise Colorfit Icon 2 1.8'' Display with Bluetooth Calling, AI Voice
            Assistant Smartwatch
          </Link>
        </h3>

        <Rating name="size-small" defaultValue={5} size="small" readOnly />

        <div className="flex items-center gap-4 m-2 mb-2">
          <span className="oldPrice line-through text-gray-500 text-[12px]">
            ₹5,000
          </span>
          <span className="price text-primary font-bold text-[13px]">
            ₹3,000
          </span>
          <span className="price text-primary font-bold text-[13px]">
            40% off
          </span>
        </div>

        <Button className="btn-org btn-sm">Add to Cart</Button>


      </div>
    </div>
  );
};

export default MyListItems;
