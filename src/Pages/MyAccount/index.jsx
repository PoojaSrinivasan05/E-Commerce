import React from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import AccountSideBar from "../../components/AccountSidebar";

const MyAccount = () => {
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
        <AccountSideBar />  
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
