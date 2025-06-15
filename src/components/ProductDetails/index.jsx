import React,{useState} from "react";
import Rating from "@mui/material/Rating";
import QtyBox from "../QtyBox";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { Button } from "@mui/material";






export const ProductDetailsComponent=()=>{


      const [productActionIndex, setProductActionIndex] = useState(null);


    return(
    <>
                <h1 className="text-[24px] font-[600] mb-2">Apple Smart Watch</h1>
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-[20px] ">
                Brands :
                <span className="font-[500] text-black opacity-75"></span>
                Initech space
              </span>

              <Rating
                name="size-small"
                defaultValue={5}
                size="small"
                readOnly
              />
              <span className="text-[13px] cursor-pointer">Review (5)</span>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <span className="oldPrice line-through text-gray-500 text-[12px]">
                ₹19,000
              </span>
              <span className="price text-primary font-bold text-[20px] ">
                ₹15,000
              </span>
              <span className="text-[14px]">
                Available In Stock:
                <span className="text-green-600 text-[14px] font-bold">
                  {" "}
                  7 Items
                </span>
              </span>
            </div>
            <br />

            <p className="text-[18px] pr-10 mb-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>

            <div className="flex items-center gap-3 ">
              <span className="text-[18px]">Size:</span>
              <div className="flex items-center gap-1 actions">
                <Button
                  className={`${
                    productActionIndex === 0 ? "!bg-primary !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(0)}
                >
                  S
                </Button>
                <Button
                  className={`${
                    productActionIndex === 1 ? "!bg-primary !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(1)}
                >
                  M
                </Button>
                <Button
                  className={`${
                    productActionIndex === 2 ? "!bg-primary !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(2)}
                >
                  L
                </Button>
                <Button
                  className={`${
                    productActionIndex === 3 ? "!bg-primary !text-white" : ""
                  }`}
                  onClick={() => setProductActionIndex(3)}
                >
                  XL
                </Button>
              </div>
            </div>

            <p className="mt-5 mb-2 text-[#000] text-[14px]">
              Free Shipping (Est. Delivery Time 2-3 Days)
            </p>

            <div className="flex items-center mt-4 gap-4 py-4">
              <div className="qtyBoxWrapper w-[70px]">
                <QtyBox />
              </div>

              <Button className="btn-org flex gap-2">
                <PiShoppingCartSimpleFill className="text-[22px]" />
                Add to Cart
              </Button>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <span className="flex items-center gap-3 text-[14px] link cursor-pointer font-[500]">
                <FaHeartCirclePlus className="text-[25px]" />
                Add to Wishlist
              </span>
            </div>

    </>
    
                )
}

export default ProductDetailsComponent;