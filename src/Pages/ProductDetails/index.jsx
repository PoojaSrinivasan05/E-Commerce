import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductZoom from "../../components/ProductZoom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import QtyBox from "../../components/QtyBox";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaHeartCirclePlus } from "react-icons/fa6";
import TextField from '@mui/material/TextField';
import ProductsSlider from "../../components/ProductsSlider";

export const ProductDetails = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  return (
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
        <div className="container flex gap-5 items-center">
          <div className="productZoomContainer w-[40%]">
            <ProductZoom />
          </div>

          <div className="productContent w-[60%] pr-10 pl-8">
            <h1 className="text-[24px] font-[600] mb-2">Apple Smart Watch</h1>
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-[20px] ">
                Brands :{" "}
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
          </div>
        </div>

        <div className="container pt-10 gap-8">
          <div className="flex items-center gap-4">
            <span
              className={`link text-[18px] cursor-pointer font-[500] ${
                activeTab === 0 && "text-primary"
              }`}
              onClick={() => setActiveTab(0)}
            >
              Description
            </span>
            <span
              className={`link text-[18px] cursor-pointer font-[500] ${
                activeTab === 1 && "text-primary"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Product Details
            </span>
            <span
              className={`link text-[18px] cursor-pointer font-[500] ${
                activeTab === 2 && "text-primary"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Review(5)
            </span>
          </div>
          {activeTab === 0 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md">
              <p>
                Studio Design' PolyFaune collection features classic products
                with colorful patterns, inspired by the traditional japanese
                origamis. To wear with a chino or jeans. The sublimation textile
                printing process provides an exceptional color rendering and a
                color, guaranteed overtime.
              </p>
              <h4>Packaging & Delivery</h4>
              <p>
                Less lion goodness that euphemistically robin expeditiously
                bluebird smugly scratched far while thus cackled sheepishly
                rigid after due one assenting regarding censorious while
                occasional or this more crane went more as this less much amid
                overhung anathematic because much held one exuberantly sheep
                goodness so where rat wry well concomitantly.
              </p>
              <h4>Suggested Use</h4>
              <p>
                Scallop or far crud plain remarkably far by thus far iguana lewd
                precociously and and less rattlesnake contrary caustic wow this
                near alas and next and pled the yikes articulate about as less
                cackled dalmatian in much less well jeering for the thanks
                blindly sentimental whimpered less across objectively fanciful
                grimaced wildly some wow and rose jeepers outgrew lugubrious
                luridly irrationally attractively dachshund.
              </p>
            </div>
          )}
          {activeTab === 1 && (
            <div class="relative overflow-x-auto shadow-md w-full py-5 px-8 rounded-md">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Composition
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Property
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Style
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple Watch
                    </th>
                    <td class="px-6 py-4">Matt paper</td>
                    <td class="px-6 py-4">Removable cover</td>
                    <td class="px-6 py-4">Rock</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {activeTab === 2 && (
            <div className="shadow-md w-[80%] py-5 px-8 rounded-md">
              <div className="w-full productReviewContainer">
                <h2 className="text-[18px]">Customer questions and Answers</h2>

                <div className="reviewScroll w-[80%]]  max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5">
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)]  w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-2">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://www.endometriosis-india.com/wp-content/uploads/2019/03/sravya-01.jpg"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Rishi sharma</h4>
                        <h5 className="text-[13px] mb-0">2025-03-23</h5>
                        <p className="mt-0 mb-0">
                          All the Lorem Ipsum generators on the Internet tend to
                          repeat predefined chunks as necessary, making this the
                          first true generator on the Internet. 
                        </p>
                      </div>
                    </div>
                     <Rating name="size-small" defaultValue={4}  readOnly />
                  </div>
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)]  w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-2">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://www.endometriosis-india.com/wp-content/uploads/2019/03/sravya-01.jpg"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Rishi sharma</h4>
                        <h5 className="text-[13px] mb-0">2025-03-23</h5>
                        <p className="mt-0 mb-0">
                          All the Lorem Ipsum generators on the Internet tend to
                          repeat predefined chunks as necessary, making this the
                          first true generator on the Internet. 
                        </p>
                      </div>
                    </div>
                     <Rating name="size-small" defaultValue={4}  readOnly />
                  </div>
                  <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)]  w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-2">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://www.endometriosis-india.com/wp-content/uploads/2019/03/sravya-01.jpg"
                          className="w-full"
                        />
                      </div>

                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Rishi sharma</h4>
                        <h5 className="text-[13px] mb-0">2025-03-23</h5>
                        <p className="mt-0 mb-0">
                          All the Lorem Ipsum generators on the Internet tend to
                          repeat predefined chunks as necessary, making this the
                          first true generator on the Internet. 
                        </p>
                      </div>
                    </div>
                     <Rating name="size-small" defaultValue={4}  readOnly />
                  </div>
                  
                  
                </div>
              
              <br />

              <div className="reviewForm bg-[#fafafa] rounded-md">
                <h2 className="text-[18px]">Add a Review</h2>
               <form className="w-full mt-5"> 
                <TextField
          id="outlined-multiline-flexible"
          label="Write a Review..."
          className="w-full"
          multiline
          rows={5}
        />
        <br/>  <br/>
         <Rating name="size-small" defaultValue={4}  readOnly />

         <div className="flex items-center mt-5">
          <Button className="btn-org">Submit Review</Button>
         </div>
        </form>
        </div>

              </div>
            </div>
          )}
        </div>

      <div className="container pt-8">
         <h3 className="text-[20px] font-[600] pb-0">Related Products</h3>
                  <ProductsSlider items={5} />
      </div>


      </section>
    </>
  );
};

export default ProductDetails;
