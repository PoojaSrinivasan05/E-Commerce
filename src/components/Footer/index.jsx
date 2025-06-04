import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { ImGift } from "react-icons/im";
import { GiWallet } from "react-icons/gi"; 
import { BiSupport } from "react-icons/bi";
import { IoChatboxOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Footer=() =>{
    return(
        <Footer className='py-6  bg-[#fafafa]'>
            <div className='container'>
               <div className='flex items-center justify-center gap-2 py-8 pb-8'>
                <div className='w-[full] col text-center justify-center flex-col group w-[15%]'>
                 <MdLocalShipping className='text-[50px] transition-all duration-300 group-hover:text-primary  group-hover:translate-y-1' />
                 <h3 className='text-[16px]  font-[600] mt-3'>Free Shipping</h3>
                 <p className='text-[12px]  font-[500]'>For all Orders over ₹2500</p>
                </div>
               
                <div className='w-[full] col text-center justify-center flex-col group w-[15%]'>
                 <GiReturnArrow  className='text-[50px] transition-all duration-300 group-hover:text-primary  group-hover:translate-y-1' />
                 <h3 className='text-[16px]  font-[600] mt-3'>30 Days Return</h3>
                 <p className='text-[12px]  font-[500]'>For an exchange product</p>
                </div>
               
                <div className='w-[full] col text-center justify-center flex-col group w-[15%]'>
                 < GiWallet className='text-[50px] transition-all duration-300 group-hover:text-primary  group-hover:translate-y-1' />
                 <h3 className='text-[16px]  font-[600] mt-3'>Secured Payment</h3>
                 <p className='text-[12px]  font-[500]'>Payment Cards Accepted</p>
                </div>
              
                <div className='w-[full] col text-center justify-center flex-col group w-[15%]'>
                 <ImGift className='text-[50px] transition-all duration-300 group-hover:text-primary  group-hover:translate-y-1' />
                 <h3 className='text-[16px]  font-[600] mt-3'>Special Gifts</h3>
                 <p className='text-[12px]  font-[500]'>Our First Product Order</p>
                </div>
              
                <div className='w-[full] col text-center justify-center flex-col group w-[15%]'>
                 <BiSupport className='text-[50px] transition-all duration-300 group-hover:text-primary  group-hover:translate-y-1' />
                 <h3 className='text-[16px]  font-[600] mt-3'>Support 244/7</h3>
                 <p className='text-[12px]  font-[500]'>Contacts us Anytime</p>
                </div>
               </div>

               <hr />


               <div className='footer flex py-8'>
                <div className='part1 w-[25%] border-r border-[rgba(0,,0,0.2)]'>
                    <h2  className='text-[20px] font-[600] mb-4'>Contact us</h2>
                    <p className='text-[13px] font-[400] pb-4'>Classyshop-MEGA SUPER STORE
                        507-Union Trade Center
                        France </p>

                        <Link className="link text-[13px]" to="mailto:someone@example.com">sales@yourcompany.com
                        </Link>
                        <span className='text-[25px] font-[600] block w-full mt-3 text-primary'>(+91) 9876-543-210</span>

                        <div className='flex items-center gap-2'>
                            <IoChatboxOutline className='text-[40px] text-primary' />
                             <span className='text-[16px] font-[600]'>Online  Chats
                                Get Expert Help
                             </span>
                        </div>
                </div>

                <div className='part2 w-[40%] flex pl-8'>
                    <div className='part2-col1'>
                    <h2  className='text-[18px] font-[600] mb-4'>Products</h2>
                    <ul className='list'>
                        <li className='list-none text-[14px] w-full mb-1'><Link to="/" className="link">
                        Prices drop</Link></li>
                        <li className='list-none text-[14px] w-full mb-1'><Link to="/" className="link">
                        New Products</Link></li>
                        <li className='list-none text-[14px] w-full mb-1'><Link to="/" className="link">
                        Best Sales</Link></li>
                        <li className='list-none text-[14px] w-full mb-1'><Link to="/" className="link">
                        Contact Us</Link></li>
                        <li className='list-none text-[14px] w-full mb-1'><Link to="/" className="link">
                        Sitemap</Link></li>
                        <li className='list-none text-[14px] w-full mb-1'><Link to="/" className="link">
                        Stores</Link></li>
                    </ul>
                    </div>
                    <div className='part2-col1'>
                    <h2  className='text-[18px] font-[600] mb-4'>Our Company</h2>
                    <ul className='list'>
                        <li className='list-none text-[14px] w-full mb-1'><Link to="/" className="link">
                        Delivery</Link></li>
                        <li className='list-none text-[14px] w-full mb-1'><Link to="/" className="link">
                        Legal Notice</Link></li>
                        <li className='list-none text-[14px] w-full mb-1'><Link to="/" className="link">
                        Terms and Conditions of use</Link></li>
                        <li className='list-none text-[14px] w-full mb-1'><Link to="/" className="link">
                        About Us</Link></li>
                        <li className='list-none text-[14px] w-full mb-1'><Link to="/" className="link">
                        Secure Payment</Link></li>
                        <li className='list-none text-[14px] w-full mb-1'><Link to="/" className="link">
                        Login</Link></li>
                    </ul>
                    </div>
                </div>

                <div className='part2 w-[35%] flex pl-8'>

                </div>
               </div>
            </div>
        </Footer>
    )
}

export default Footer;
