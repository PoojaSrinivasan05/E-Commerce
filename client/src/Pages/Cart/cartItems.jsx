import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GoTriangleDown } from "react-icons/go";
import Rating from "@mui/material/Rating";

const CartItems = (props) => {
  const [sizeAnchorEl, setSizeAnchorEl] = useState(null);
  const [selectedSize, setSelectedSize] = useState(props.size);
  const openSize = Boolean(sizeAnchorEl);

  const [qtyAnchorEl, setQtyAnchorEl] = useState(null);
  const [selectedQty, setSelectedQty] = useState(props.qty);
  const openQty = Boolean(qtyAnchorEl);

  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };

  const handleCloseSize = (value) => {
    setSizeAnchorEl(null);
    if (value !== null) {
      setSelectedSize(value);
    }
  };

  const handleClickQty = (event) => {
    setQtyAnchorEl(event.currentTarget);
  };

  const handleCloseQty = (value) => {
    setQtyAnchorEl(null);
    if (value !== null) {
      setSelectedQty(value);
    }
  };

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

        <div className="flex items-center gap-4 mt-2">
          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] py-1 px-2 rounded-md cursor-pointer"
              onClick={handleClickSize}
            >
              Size: {selectedSize} <GoTriangleDown />
            </span>
            <Menu
              id="size-menu"
              anchorEl={sizeAnchorEl}
              open={openSize}
              onClose={() => handleCloseSize(null)}
            >
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <MenuItem key={size} onClick={() => handleCloseSize(size)}>
                  {size}
                </MenuItem>
              ))}
            </Menu>
          </div>

          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] py-1 px-2 rounded-md cursor-pointer"
              onClick={handleClickQty}
            >
              Qty: {selectedQty} <GoTriangleDown />
            </span>
            <Menu
              id="qty-menu"
              anchorEl={qtyAnchorEl}
              open={openQty}
              onClose={() => handleCloseQty(null)}
            >
              {[1, 2, 3, 4, 5].map((qty) => (
                <MenuItem key={qty} onClick={() => handleCloseQty(qty)}>
                  {qty}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>

        <div className="flex items-center gap-4 m-2">
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
      </div>
    </div>
  );
};

export default CartItems;
