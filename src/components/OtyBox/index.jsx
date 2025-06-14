import React from "react";
import { Button } from "@mui/material";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";


export const QtyBox =()=>{
    return(
        <div className='qtyBox flex items-center relative'>
            <input type="number" className="w-full h-[40px] text-[15px] p-2 pl-5 focus:outline-none border-2 border-[rgba(0,0,0,0.3)] rounded-md" defaultValue={1} />

            <div className="flex items-center flex-col justify-between h-[40px] absolute top-0 right-0 z-50">
            <Button className="!min-w-[30px] !w-[30px] !h-[20px] !text-[#000] rounded-none"><FaAngleUp /></Button>
            <Button className="!min-w-[30px] !w-[30px] !h-[20px] !text-[#000] rounded-none"><FaAngleDown /></Button>
            </div>
        </div> 
        

        

    )
}

export default QtyBox;