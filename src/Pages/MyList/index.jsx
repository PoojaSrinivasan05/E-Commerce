import React from "react";
import { Button } from "@mui/material";
import { IoBagCheckSharp } from "react-icons/io5";
import MyListItems from "./myListItems";

export const MyList = () => {
  return (
    <section className="section py-10 pb-10">
      <div className="container w-[80%] max-w-[80%] flex gap-5">
        <div className="leftPart w-[70%] m-auto">
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
