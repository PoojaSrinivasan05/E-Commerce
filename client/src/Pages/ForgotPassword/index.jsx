import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";



const ForgotPassword = () => {


 
  const [isShowPassword] = useState(false);
    const [isShowPassword2, setIsShowPassword2] = useState(false);
 
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-12">
          <h3 className="text-center text-[18px] text-black">
            {" "}
            Forgot Password
          </h3>
          <form className="w-full mt-5">
            <div className="form-group w-full mb-5">
              <TextField
                 type={isShowPassword === false ? 'password' : 'text'}
                id="password"
                label="New Password"
                variant="outlined"
                className="w-full"
                name="name"
              />
            </div>
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isShowPassword2 === true ? 'password' : 'text'}
                id="Confirm_Password"
                label="Confirm Password*"
                variant="outlined"
                className="w-full"
                name="password"
              />
              <Button
                className="!absolute  !top-[10px] !right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black"
                onClick={() => {
                  setIsShowPassword2(!isShowPassword2);
                }}
              >
                {
                    isShowPassword2 === false ?  <FaEye className="text-[20px] opacity-75" /> :  <FaEyeSlash className="text-[20px] opacity-75" />
                }
               
              </Button>
            </div>
            
            <div className="flex items center w-full mt-3 mb-3">
                <Button className="btn-org btn-lg w-full">Change Password</Button>
            </div>
           
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
