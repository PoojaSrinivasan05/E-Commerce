import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { MdOutlineLogin } from "react-icons/md";
import { NavLink } from "react-router-dom";
import OtpBox from "../../../../client/src/components/OtpBox";



const VerifyAccount = () => {

  const [otp,setOtp]=useState("");
      const handleOtpChange =(value)=>{
          setOtp(value);
      };
  

  return (
    <section className="bg-white  w-full h-[100vh]">
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
          <img src="/verify1.png" className="w-[100px] m-auto" />
        </div>

        <h1 className="text-center text-[35px] font-[800] mt-4 ">
          Welcome Back! <br />
          Please verify your acoount.
        </h1>
   <br/>
       <p className="text-center text-[15px]">OTP send to <span className="text-primary font-bold">pooja123@gmail.com</span></p>
 <br/>

 <div className="text-center flex items-center justify-center flex-col">
 <OtpBox length={6} onChange={handleOtpChange}/>
 </div>
     <br/>

     <div className="w-[300px] m-auto">
      <Button className="btn-blue w-full">Verify OTP</Button>
     </div>
      </div>
    </section>
  );
};

export default VerifyAccount;
