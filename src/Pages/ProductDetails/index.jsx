import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductZoom from "../../components/ProductZoom";
import Rating from "@mui/material/Rating";

export const ProductDetails =()=>{
    return(
     <>
     <div className="py-5">
        <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition !text-[14px]"
          >
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition !text-[14px]"
          >
            Fashion
          </Link>
           <Link
            underline="hover"
            color="inherit"
            className="link transition !text-[14px]"
          >
           Apple Watch
          </Link>
        </Breadcrumbs>
      </div>
     </div>
     <section className="bg-white py-5">
      <div className="container flex gap-5" >
           <div className="productZoomContainer w-[40%]">
            <ProductZoom />
           </div>

           <div className="productContent w-[60%]">
            <h1 className="text-[28px] font-[600] mb-2">Apple Smart Watch</h1>
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-[20px] ">Brands : <span className="font-[500] text-black opacity-75"></span>Initech space</span>

               <Rating name="size-small" defaultValue={5} size="small" readOnly />
               <span className="text-[13px] cursor-pointer">Review (5)</span>
            </div>
            <div className="flex items-center gap-4 mt-4">
          <span className="oldPrice line-through text-gray-500 text-[12px]">
            ₹19,000
          </span>
          <span className="price text-primary font-bold text-[18px] ">₹15,000</span>
        </div>
        <br />

        <p className="text-[18px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
           </div>
       </div>
     </section>
     
        
       
   
     </>
    )
}

export default ProductDetails;
