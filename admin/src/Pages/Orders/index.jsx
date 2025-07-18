import React,{useState} from "react";
import { Button } from "@mui/material";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import Badge from "../../Components/Badge";
import SearchBox from "../../Components/SearchBox";

export const Orders =()=>{

     const [isOpenOrderedProduct, setIsOpenOrderedProduct] = useState(null);
    
      const isShowOrderedProduct = (index) => {
        if (isOpenOrderedProduct === index) {
          setIsOpenOrderedProduct(null);
        } else {
          setIsOpenOrderedProduct(index);
        }
      };



     return(
        <div className="card my-4 shadow-md sm:rounded-lg bg-white">
                <div className="flex items-center justify-between px-5 py-5">
                  <h2 className="text-[18px] font-[600]">Recent Orders</h2>
                  <div className="w-[40%]"><SearchBox /></div>
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
     )
}


export default Orders;