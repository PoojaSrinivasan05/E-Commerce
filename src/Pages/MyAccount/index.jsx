import React from "react";
import { RiUploadCloud2Line } from "react-icons/ri";
import { Button } from "@mui/material";
import { FaUserAlt } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { NavLink } from "react-router";
import TextField from "@mui/material/TextField";

const MyAccount = () => {
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <div className="card bg-white  shadow-md rounded-md">
            <div className="w-full p-4 flex items-center justify-center flex-col">
              <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group">
                <img
                  src="https://img.freepik.com/premium-photo/nature-smile-portrait-businesswoman-park-with-pride-legal-case-career-growth-happy-confident-female-environmental-lawyer-outdoor-forest-land-conservation-brazil_590464-446038.jpg"
                  className="w-full h-full object-cover"
                />

                <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.4)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
                  <RiUploadCloud2Line className="text-[#fff] text-[25px]" />
                  <input
                    type="file"
                    className="absolute top-0 left-0 w-full h-full opacity-0"
                  />
                </div>
              </div>

              <h4>Pooja</h4>
              <h6 className="text-[13px] font-[500]">poojasri54@gmail.com</h6>
            </div>

            <ul className="list-none pb-5 bg-[#f1f1f1] myAccountTabs">
              <li className="w-full">
                <NavLink
                  to="/my-account"
                  exact={true}
                  activeclassName="isActive"
                >
                  <Button className="w-full !text-left  !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                    <FaUserAlt className="text-[18px]" />
                    My Profile
                  </Button>
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink to="/my-list" exact={true} activeclassName="isActive">
                  <Button className="w-full !text-left  !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                    <FaHeartCircleCheck className="text-[18px]" />
                    My List
                  </Button>
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  to="/my-orders"
                  exact={true}
                  activeclassName="isActive"
                >
                  <Button className="w-full !text-left  !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                    <IoBagCheck className="text-[18px]" />
                    My Orders
                  </Button>
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  to="/my-orders"
                  exact={true}
                  activeclassName="isActive"
                >
                  <Button className="w-full !text-left  !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                    <TbLogout className="text-[18px]" />
                    Log Out
                  </Button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="col2 w-[50]">
          <div className="card bg-white p-5 shadow-md rounded-md">
            <h2 className="pb-3">My Profile</h2>
            <hr />
            <form className="mt-5">
              <div className="flex items-center gap-5 ">
                <div className="w-[50%]">
                  <TextField
                    size="small"
                    label="Full Name"
                    variant="outlined"
                    className="w-full"
                  />
                </div>

                <div className="w-[50%]">
                  <TextField
                    size="small"
                    label="Email"
                    variant="outlined"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="flex items-center mt-4 gap-5 ">
                <div className="w-[50%]">
                  <TextField
                    size="small"
                    label="Phone Number"
                    variant="outlined"
                    className="w-full"
                  />
                </div>
              </div>

              <br />
              <div className="flex items-center">
                <Button className="btn-org btn-lg w-[100px]">Save</Button>
                <Button className="btn-org btn-border btn-lg  w-[100px]">Cancel</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
