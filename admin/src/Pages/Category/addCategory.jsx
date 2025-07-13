import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoClose } from "react-icons/io5";
import UploadBox from "../../Components/UploadBox";
import { Button } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";


const AddCategory = () => {
  return (
    <section className="p-5 bg-gray-50">
      <form className="form py-3 p-8 ">
        <div className="scroll max-h-[72vh] overflow-y-scroll pr-4 pt-4">
           <div className="grid grid-cols-1 mb-3">
          <div className="col w-[25%]">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
            Category Name
            </h3>
            <input
              type="text"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline:none focus:border-rgba[(0,0,0,0.4)] rounded-smp-3 text-sm"
            />
          </div>
        </div>
        <br/>
        <h3 className="text-[14px] font-[500] mb-1 text-black">
            Category Image
            </h3>
          <div className="grid grid-cols-7 gap-4">
            <div className="uploadBoxWrapper relative">
              <span className="absolute w-[15px] h-[15px]  rounded-full overflow-hidden bg-red-700 flex items-center justify-center -top-[5px] -right-[5px] z-50 cursor-pointer">
                <IoClose className="text-white text-[17px]" />
              </span>

              <div className="uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-ponter hover:bg-gray-200 flex items-center justify-center flex-col relative">
                <LazyLoadImage
                  className="w-full h-full object-cover"
                  alt={"image"}
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                  src={
                    "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"
                  }
                />
              </div>
            </div>

            <UploadBox multiple={true} />
          </div>
        </div>
<br/>
        <br />
        <div className="w-[250px]">
        <Button type="button" className="btn-blue btn-lg w-full flex gap-2">
          <FaCloudUploadAlt className="text-[25px] text-white" />
          Publish and View
        </Button>
      </div>
      </form>
    </section>
  );
};
export default AddCategory;
