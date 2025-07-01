import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {  Navigation } from 'swiper/modules';
import { FiGift } from "react-icons/fi";
import { IoStatsChartSharp } from "react-icons/io5";
import { AiOutlinePieChart } from "react-icons/ai";
import { BsBank } from "react-icons/bs";
import { RiProductHuntLine } from "react-icons/ri";
const DashboardBoxes =()=>{
    return (
        <>
        <Swiper
        slidesPerView={4}
        spaceBetween={10}
        navigation={true}
        modules={[ Navigation]}
        className="dashboardBoxesSlider"
      >
        <SwiperSlide>
          <div className="box p-5 cursor-auto  hover:bg-[#fafafa] roundeed-md border border-[rgba(0,0,0,0.1)]  flex items-center gap-4">
            <FiGift className="text-[30px] text-[#3872fa]" />
            <div className="info w-[70%]">
                <h3>New Orders</h3>
                <b>1,7874</b>
            </div>
            <IoStatsChartSharp className="text-[50px] text-[#3872fa]" />
          </div>
        </SwiperSlide>

         <SwiperSlide>
          <div className="box p-5 cursor-auto hover:bg-[#fafafa] roundeed-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
            <AiOutlinePieChart className="text-[30px] text-[#10b981]" />
            <div className="info w-[70%]">
                <h3>Sales</h3>
                <b>7,34,334</b>
            </div>
            <IoStatsChartSharp className="text-[50px] text-[#10b981]" />
          </div>
        </SwiperSlide>

         <SwiperSlide>
          <div className="box p-5 cursor-auto hover:bg-[#fafafa] roundeed-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
            <BsBank className="text-[30px] text-[#3872fa]" />
            <div className="info w-[70%]">
                <h3>Revenue</h3>
                <b>23,45,435</b>
            </div>
            <IoStatsChartSharp className="text-[50px] text-[#3872fa]" />
          </div>
        </SwiperSlide>

         <SwiperSlide>
          <div className="box p-5 cursor-auto hover:bg-[#fafafa] roundeed-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
            <RiProductHuntLine className="text-[30px] text-[#7928ca]" />
            <div className="info w-[70%]">
                <h3>Total Products</h3>
                <b>1,7874</b>
            </div>
            <IoStatsChartSharp className="text-[50px] text-[#7928ca]" />
          </div>
        </SwiperSlide>
        </Swiper>
        
        </>

    )
}

export default DashboardBoxes;
