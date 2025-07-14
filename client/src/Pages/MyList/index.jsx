import React from "react";
import { IoBagCheckSharp } from "react-icons/io5";
import MyListItems from "./myListItems";
import AccountSideBar from "../../components/AccountSidebar";

export const MyList = () => {
  return (

     <section className="py-10 w-full">
          <div className="container flex gap-5">
            <div className="col1 w-[20%]">
            <AccountSideBar/>
            </div>
    
            <div className="col2 w-[70]">
              <div className="shadow-md rounded-m  bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>My List</h2>
              <p className="mt-0">
                There are<span className="font-bold text-primary"> 3 </span>
                Products in your My List
              </p>
            </div>

            <MyListItems/>
            <MyListItems/>
            <MyListItems/>
            <MyListItems/>
            <MyListItems/>
          </div>
            </div>
          </div>
        </section>
  );
};

export default MyList;
