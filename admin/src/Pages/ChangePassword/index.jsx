import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { MdOutlineLogin } from "react-icons/md";
import { NavLink } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const ChangePassword = () => {


  const [isPasswordShow, setisPasswordShow] = useState(false);
    const [isPasswordShow2, setisPasswordShow2] = useState(false);
 
 
  return (
    <section className="bg-white  w-full">
      <header className="w-full fixed top-0 left-0  px-4 py-3 flex items-center justify-between z-50">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmosGiyoJTAk23s6_jNwNro6jiFiVigUTJNw&s"
            className="w-[100px]"
          />
        </Link>
        <div className="flex items-center gap-0">
          <NavLink to="/login" exact={true} activeclassName="isActive">
            <Button className="!rounded-full !text-[rbga(0,0,0,0.8)] flex gap-1 !px-5">
              <MdOutlineLogin className="text-[15px]" />
              Login
            </Button>
          </NavLink>
           <NavLink to="/sign-up" exact={true} activeclassName="isActive">
                    <Button className="!rounded-full !text-[rbga(0,0,0,0.8)] flex gap-1 !px-5">
                      <MdOutlineLogin className="text-[15px]" />
                      Sign Up
                    </Button>
                    </NavLink>
        </div>
      </header>
      <img src="/Pattern.jpg" className="w-full fixed top-0 left-0 opacity-5" />

      <div className="loginBox card w-[600px] h-[auto] pb-20 mx-auto pt-20 relative z-50">
        <div className="text-center">
          <img src="/icon.jpg" className="m-auto w-[100px]" />
        </div>

        <h1 className="text-center text-[35px] font-[800] mt-4">
          Welcome Back! <br />
          You can change your passsword here.
        </h1>

        <br />

        <form className="w-full px-8 mt-3">
        
          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">New Password</h4>
            <div className="relative w-full">
              <input
                type={isPasswordShow=== false ? 'password':'text'}
                className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
              />
              <Button className="!absolute top-[7px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-gray-600" onClick={()=>setisPasswordShow(!isPasswordShow)}>
                {
                  isPasswordShow === false ?  (<FaEyeSlash className="text-[16px]" />) : (
                     <FaEye className="text-[16px]" />
                  )
                }
                
              </Button>
            </div>
          </div>

           <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">Confirm Password</h4>
            <div className="relative w-full">
              <input
                type={isPasswordShow2=== false ? 'password':'text'}
                className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
              />
              <Button className="!absolute top-[7px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-gray-600" onClick={()=>setisPasswordShow2(!isPasswordShow2)}>
                {
                  isPasswordShow2=== false ?  (<FaEyeSlash className="text-[16px]" />) : (
                     <FaEye className="text-[16px]" />
                  )
                }
                
              </Button>
            </div>
          </div>

          <Button className="btn-blue btn-lg w-full">Change Password</Button>
        </form>
      </div>
    </section>
  );
};

export default ChangePassword;
