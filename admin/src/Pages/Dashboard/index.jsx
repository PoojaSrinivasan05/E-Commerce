import React, { useState } from "react";
import DashboardBoxes from "../../Components/DasboardBoxes";
import { FaPlus } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { Button } from "@mui/material";
import Badge from "../../Components/Badge";
import { FaAngleUp } from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [isOpenOrderedProduct, setIsOpenOrderedProduct] = useState(null);

  const isShowOrderedProduct = (index) => {
    if (isOpenOrderedProduct === index) {
      setIsOpenOrderedProduct(null);
    } else {
      setIsOpenOrderedProduct(index);
    }
  };

  return (
    <>
      <div className="w-full py-2 bg-[#1faff] px-5 border border-[rgba(0,0,0,0.1)] flex items-center gap-8 mb-5 justify-between rounded-md">
        <div className="info">
          <h1 className="text-[35px] font-bold leading-10 mb-3">
            Good Morning,
            <br />
            Pooja
          </h1>
          <p>
            Here's Whats happening on your store today. See the statistics at
            once.
          </p>
          <br />
          <Button className="btn-blue !capitalize">
            <FaPlus /> Add Product
          </Button>
        </div>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5vHj-vSbynrZTu_jmsQC2Tuyb3E-UYOTNRA&s"
          className="w-[250px]"
        />
      </div>
      <DashboardBoxes />

      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-[600]">Products</h2>
        </div>

        <div class="relative overflow-x-auto mt-5">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Product
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Category
                </th>

                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Sub Category
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Price
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Sales
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <td className="px-6 py-2">
                  <div className="w-[60px]">
                    <Checkbox {...label} size="small" />
                  </div>
                </td>
                <td className="px-6 py-2">
                  <div className="flex items-center gap-4">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/45745">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzg5eipZ2fMYRlTkAh5vH6H4UP7Uq_4DzSjA&s"
                        className="w-full group-hover:scale-105 transition-all"
                      />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-primary">
                        <Link to="/product/45745">
                          Photo booth anim 8-bit hella, PBR 3 wolf moon beard
                          Helvetica. Salvia esse nihil, flexitarian Truffaut
                          synth art party deep v chillwave.
                        </Link>
                      </h3>
                      <span className="text-[12px]">Wooden Chair</span>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-2">
                  Furniture
                </td>

                <td className="px-6 py-2">
                  seater
                </td>
                <td className="px-6 py-2">
                 <div className="flex items-center gap-1 flex-col">
          <span className="oldPrice line-through leading-3 text-gray-500 text-[14px] font-[500]">
            ₹900
          </span>
          <span className="price text-primary font-bold text-[13px]">₹600</span>
        </div>
                </td>

                <td className="px-6 py-2">
                  <p className="text-[14px] w-[150]"><span className="font-[600]">554</span>sale</p>
                </td>

                <td className="px-6 py-2"></td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-[600]">Recent Orders</h2>
        </div>

        <div class="relative overflow-x-auto mt-5">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3"></th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Order Id
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Payment Id
                </th>

                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Phone Number
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Address
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Pin Code
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Total Amount
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Email
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  User Id
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Order Status
                </th>
                <th scope="col" class="px-6 py-3 whitespace-nowrap">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <td className="px-py-4 font-[500]">
                  <Button
                    className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full  !bg-[f1f1f1]"
                    onClick={() => isShowOrderedProduct(0)}
                  >
                    {isOpenOrderedProduct === 0 ? (
                      <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    ) : (
                      <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    )}
                  </Button>
                </td>
                <td class="px-6 py-4 font-[500]">
                  <span className="text-primary font-[500]">
                    345237d5235d36456
                  </span>
                </td>

                <td class="px-6 py-4 font-[500]">
                  <span className="text-primary font-[500]">
                    pay_PTP6avhghsga98797
                  </span>
                </td>

                <td class="px-6 py-4 font-[500] whitespace-nowrap">Pooja</td>
                <td class="px-6 py-4 font-[500]">865786989</td>
                <td class="px-6 py-4 font-[500]">
                  <span className="block w-[400px]">
                    Y 56 NSJDG SFTY ,njgyd ng,khdjjdg{" "}
                  </span>
                </td>
                <td class="px-6 py-4 font-[500]">463648</td>

                <td class="px-6 py-4 font-[500]">7800</td>
                <td class="px-6 py-4 font-[500]">hdgfyudsbchdb@gamil.com</td>
                <td class="px-6 py-4 font-[500]">
                  <span className="text-primary">345237d5235d36456</span>
                </td>
                <td class="px-6 py-4 font-[500]">
                  <Badge status="confirm" />
                </td>
                <td class="px-6 py-4 font-[500] whitespace-nowrap">2025-4-5</td>
              </tr>
              {isOpenOrderedProduct === 0 && (
                <tr>
                  <td className=" pl-20" colSpan="6">
                    <div class="relative overflow-x-auto ">
                      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Product Id
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Product Title
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Image
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Quantity
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Price
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Sub Total
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td class="px-6 py-4 font-[500]">
                              <span className="text-gray-600">
                                345237d5235d36456
                              </span>
                            </td>

                            <td class="px-6 py-4 font-[500]">
                              Apple Smart Watch
                            </td>
                            <td class="px-6 py-4 font-[500]">
                              <img
                                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/32-medium_default/brown-bear-printed-sweater.jpg"
                                className="w-[40px] h-[40px] object-cover rounded-md"
                              />
                            </td>
                            <td class="px-6 py-4 font-[500] whitespace-nowrap">
                              1
                            </td>
                            <td class="px-6 py-4 font-[500]">15,000</td>
                            <td class="px-6 py-4 font-[500]">15,000</td>
                          </tr>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td class="px-6 py-4 font-[500]">
                              <span className="text-gray-600">
                                345237d5235d36456
                              </span>
                            </td>

                            <td class="px-6 py-4 font-[500]">
                              Apple Smart Watch
                            </td>
                            <td class="px-6 py-4 font-[500]">
                              <img
                                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/32-medium_default/brown-bear-printed-sweater.jpg"
                                className="w-[40px] h-[40px] object-cover rounded-md"
                              />
                            </td>
                            <td class="px-6 py-4 font-[500] whitespace-nowrap">
                              1
                            </td>
                            <td class="px-6 py-4 font-[500]">15,000</td>
                            <td class="px-6 py-4 font-[500]">15,000</td>
                          </tr>

                          <tr>
                            <td className="bg-[#ccc]" colSpan="12"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}

              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <td className="px-py-4 font-[500]">
                  <Button
                    className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full  !bg-[f1f1f1]"
                    onClick={() => isShowOrderedProduct(1)}
                  >
                    {isOpenOrderedProduct === 1 ? (
                      <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    ) : (
                      <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    )}
                  </Button>
                </td>
                <td class="px-6 py-4 font-[500]">
                  <span className="text-primary font-[500]">
                    345237d5235d36456
                  </span>
                </td>

                <td class="px-6 py-4 font-[500]">
                  <span className="text-primary font-[500]">
                    pay_PTP6avhghsga98797
                  </span>
                </td>

                <td class="px-6 py-4 font-[500] whitespace-nowrap">Pooja</td>
                <td class="px-6 py-4 font-[500]">865786989</td>
                <td class="px-6 py-4 font-[500]">
                  <span className="block w-[400px]">
                    Y 56 NSJDG SFTY ,njgyd ng,khdjjdg{" "}
                  </span>
                </td>
                <td class="px-6 py-4 font-[500]">463648</td>

                <td class="px-6 py-4 font-[500]">7800</td>
                <td class="px-6 py-4 font-[500]">hdgfyudsbchdb@gamil.com</td>
                <td class="px-6 py-4 font-[500]">
                  <span className="text-primary ">345237d5235d36456</span>
                </td>
                <td class="px-6 py-4 font-[500]">
                  <Badge status="confirm" />
                </td>
                <td class="px-6 py-4 font-[500] whitespace-nowrap">2025-4-5</td>
              </tr>
              {isOpenOrderedProduct === 1 && (
                <tr>
                  <td className=" pl-20" colSpan="6">
                    <div class="relative overflow-x-auto ">
                      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Product Id
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Product Title
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Image
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Quantity
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Price
                            </th>
                            <th scope="col" class="px-6 py-3 whitespace-nowrap">
                              Sub Total
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td class="px-6 py-4 font-[500]">
                              <span className="text-gray-600">
                                345237d5235d36456
                              </span>
                            </td>

                            <td class="px-6 py-4 font-[500]">
                              Apple Smart Watch
                            </td>
                            <td class="px-6 py-4 font-[500]">
                              <img
                                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/32-medium_default/brown-bear-printed-sweater.jpg"
                                className="w-[40px] h-[40px] object-cover rounded-md"
                              />
                            </td>
                            <td class="px-6 py-4 font-[500] whitespace-nowrap">
                              1
                            </td>
                            <td class="px-6 py-4 font-[500]">15,000</td>
                            <td class="px-6 py-4 font-[500]">15,000</td>
                          </tr>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <td class="px-6 py-4 font-[500]">
                              <span className="text-gray-600">
                                345237d5235d36456
                              </span>
                            </td>

                            <td class="px-6 py-4 font-[500]">
                              Apple Smart Watch
                            </td>
                            <td class="px-6 py-4 font-[500]">
                              <img
                                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/32-medium_default/brown-bear-printed-sweater.jpg"
                                className="w-[40px] h-[40px] object-cover rounded-md"
                              />
                            </td>
                            <td class="px-6 py-4 font-[500] whitespace-nowrap">
                              1
                            </td>
                            <td class="px-6 py-4 font-[500]">15,000</td>
                            <td class="px-6 py-4 font-[500]">15,000</td>
                          </tr>

                          <tr>
                            <td className="bg-[#ccc]" colSpan="12"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
