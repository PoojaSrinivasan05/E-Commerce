import React from "react";
import { Button } from "@mui/material";
import { IoBagCheckSharp } from "react-icons/io5";
import CartItems from "./cartItems";

export const CartPage = () => {
  return (
    <section className="section py-10 pb-10">
      <div className="container w-[80%] max-w-[80%] flex gap-5">
        <div className="leftPart w-[70%]">
          <div className="shadow-md rounded-m  bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>Your Cart</h2>
              <p className="mt-0">
                There are<span className="font-bold text-primary"> 3 </span>
                Products in your cart
              </p>
            </div>

            <CartItems size="S" qty={1} />
            <CartItems size="S" qty={1} />
            <CartItems size="S" qty={1} />
            <CartItems size="S" qty={1} />
            <CartItems size="S" qty={1} />
          </div>
        </div>
        <div className="rightPart w-[30%]">
          <div className="shadow-md rounded-md bg-white p-5">
            <h3 className="pb-3">Cart Totals</h3>
            <hr />
            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Subtotal</span>
              <span className="text-primary font-bold">₹9,000</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Shipping</span>
              <span className="font-bold">Free</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Estimated For</span>
              <span className="font-bold">India</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="text-[14px] font-[500]">Totals</span>
              <span className="text-primary font-bold">₹9,000</span>
            </p>
            <br />
            <Button className="btn-org btn-lg w-full flex gap-2">
              <IoBagCheckSharp className="text-[18px] pb-1" />
              CheckOut
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
