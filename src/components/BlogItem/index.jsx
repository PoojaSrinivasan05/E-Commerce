import React from "react";
import { MdAccessTime } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';


const  BlogItem=()=>{
    return(
        <div className="blogItem group">
          <div  className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
            <img src="https://financewp.wpengine.com/wp-content/uploads/2016/09/blog1-768x551.jpg" 
            className="w-full transition-all group-hover:scale-105 group-hover:rotate-1" alt="blog image"/>
            <span className="flex items-center justify-center text-white absolute bottom-[15px] right-[15px] 
            z-50 !bg-primary rounded-md p-1 text-[12px] font-[500] gap-1">
            <MdAccessTime className="text-[16px]" /> 5 APRIL 2025
            </span>
          </div>


          <div className="info py-4">
            <h2 className="text-[15px] font-[600] text-black">
                <Link to="/" className="link " >ejfeuhf diwefu jfjuenf </Link></h2>
            <p className="text-[13px] font-[400] text-[rgba(0,0,0,0.8)] mb-4">Lorem Ipsum is simply dummy text of the... </p>
            <Link className="link font-[500] text-[14px] flex items-center gap-1 underline">Read More <IoIosArrowForward />
</Link>
          </div>
        </div>
    )
}


export default BlogItem;