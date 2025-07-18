import React from "react";
import { IoMdImages } from "react-icons/io";

export const UploadBox =(props)=>{
    return(
        <div className="uploadBox p-3 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[170px] bg-gray-100 cursor-ponter hover:bg-gray-200 flex items-center justify-center flex-col relative">
            <IoMdImages className="text-[40px] opacity-35 pointer-events-none"/>
            <h4 className="text-[14px] pointer-events-none">Image Upload</h4>

            <input type="file" multiple={props.multiple !== undefined ? props.multiple:false} className="absolute top-0 left-0 w-full h-full z-50 opacity-0" />
        </div>
    )
}

export default UploadBox;