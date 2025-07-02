import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { MdOutlineLogin } from "react-icons/md";
import { NavLink } from "react-router-dom";
import LoadingButton from '@mui/lab/LoadingButton';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";

const Login = () => {
    const [loadingGoogle, setLoadingGoogle] = useState(false);
    function handleClickGoogle(){
        setLoading(true);
    }
  return (
    <section className="bg-white w-full h-full fix top-0 left-0 ">
      <header className="w-full  fixed top-0 left-0 px-4 py-3 flex items-center justify-between z-50">
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
          <Button className="!rounded-full !text-[rbga(0,0,0,0.8)] flex gap-1 !px-5">
            <MdOutlineLogin className="text-[15px]" />
            Sign Up
          </Button>
        </div>
      </header>
      <img src="/Pattern.jpg" className="w-full fixed top-0 left-0 opacity-5" />

      <div className="loginBox card w-[45%] h-[300px] mx-auto mt-30 relative z-50">
        <div className="text-center">
          <img src="/icon.jpg" className="m-auto w-[100px]" />
        </div>

        <h1 className="text-center text-[30px] font-[800] mt-[-2]">
          Welcome Back! <br />
          Sign in with your credentials.
        </h1>

        <div className="flex items-center w-full mt-5 gap-4" >
         < LoadingButton
          size="small"
          onClick={handleClickGoogle}
          endIcon={<FcGoogle  className="text-[80px]"/>}
          loading={loadingGoogle}
          loadingPosition="end"
          variant="outlined"
          className="!bg-none !text-[15px] !capitalize !px-5 !text-[rgba(0,0,0,0.8)]"
        >
            Signin with Google
        </LoadingButton>
         < LoadingButton
          size="small"
          onClick={handleClickGoogle}
          endIcon={<FaFacebookF  className="text-[80px]"/>}
          loading={loadingGoogle}
          loadingPosition="end"
          variant="outlined"
          className="!bg-none !text-[15px] !capitalize !px-5 !text-[rgba(0,0,0,0.8)]"
        >
            Signin with Facebook
        </LoadingButton>
        </div>
      </div>
    </section>
  );
};

export default Login;
