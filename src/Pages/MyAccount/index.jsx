import React from "react";
import { RiUploadCloud2Line } from "react-icons/ri";

const MyAccount = () => {
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[25%]">
          <div className="card bg-white  shadow-md rounded-md p-5">
            <div className="w-full p-3 flex items-center justify-center flex-col">
              <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative">
                <img
                  src="https://img.freepik.com/premium-photo/nature-smile-portrait-businesswoman-park-with-pride-legal-case-career-growth-happy-confident-female-environmental-lawyer-outdoor-forest-land-conservation-brazil_590464-446038.jpg"
                  className="w-full h-full object-cover"
                />

                <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.4)] flex items-center justify-center cursor-pointer">
                  <RiUploadCloud2Line className="text-[#fff] text-[25px]" />
                   <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0"/>
                </div>
              </div>

              <h4>Pooja</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
