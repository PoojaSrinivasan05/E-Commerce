import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MyContext } from "../../App";



const Login = () => {

  const history=useNavigate();
  const forgotPassword =()=>{
      history("/verify");
      context.openAlertBox("success","OTP Sent")
  }
  const context=useContext(MyContext);
  const [isShowPassword, setIsShowPassword] = useState(false);
  
 
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-12">
          <h3 className="text-center text-[18px] text-black">
            {" "}
            Login to your Account
          </h3>
          <form className="w-full mt-5">
            <div className="form-group w-full mb-5">
              <TextField
                type="email"
                id="email"
                label="Email Id*"
                variant="outlined"
                className="w-full"
                name="name"
              />
            </div>
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isShowPassword === true ? 'password' : 'text'}
                id="Password"
                label="Password*"
                variant="outlined"
                className="w-full"
                name="password"
              />
              <Button
                className="!absolute  !top-[10px] !right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black"
                onClick={() => {
                  setIsShowPassword(!isShowPassword);
                }}
              >
                {
                    isShowPassword === false ?  <FaEye className="text-[20px] opacity-75" /> :  <FaEyeSlash className="text-[20px] opacity-75" />
                }
               
              </Button>
            </div>
            <a className="link cursor-pointer text-[14px] font-[600] underline" onClick={forgotPassword}>Forgot Password?</a>
            <div className="flex items center w-full mt-3 mb-3">
                <Button className="btn-org btn-lg w-full">Login</Button>
            </div>
            <p className="text-center">Not Registered? <Link className="link text-[14px] font-[400] underline text-primary" to="/register">Sign Up</Link></p>
            <p className="text-center font-[500]">Or continue with Social account</p>
            <Button className="!flex !gap-3 !w-full  !bg-[#f1f1f1] !btn-lg !text-black"><FcGoogle className="text-[20px]"/>Login with Google</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
