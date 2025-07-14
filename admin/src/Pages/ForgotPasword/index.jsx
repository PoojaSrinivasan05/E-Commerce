import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { MdOutlineLogin } from "react-icons/md";
import { NavLink } from "react-router-dom";


const ForgotPassword = () => {
 
  return (
    <section className="bg-white  w-full  h-[100vh] ">
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
          Having trouble to sign in? <br />
          Reset your Password.
        </h1>

        <br />

        <form>
          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">Email</h4>
            <input
              type="email"
               placeholder="Enter your Registered Email"
              className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
            />
          </div>


          <Button className="btn-blue btn-lg w-full">Reset Password</Button>
 <br/> <br/>
          <div className="text-center flex items-center justify-center gap-4">
            <span>Don't want to reset?</span>
            <Link
                          to="/forgot-password"
                          className="text-primary font-[700] hover:text-gray-700 hover:underline text-[15px]"
                        >
                          Sign In
                        </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
