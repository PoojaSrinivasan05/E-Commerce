import React from "react";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Button } from '@mui/material';

export const HomeBannerV2=()=>{
    return (
        <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
         autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="homeSliderV2"
      >
        <SwiperSlide>
            <div className="item w-full rounded-md overflow hidden relative">
        <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-1.jpg" />
           <div className="info absolute top-0 -right-[100%] w-[50%] z-50 p-8 opacity-0 flex items-center flex-col justfy-center transition-all duration-700">
            <h4 className="text-[18px] font-[500] w-full text-left mb-3 relative  opacity-0 -right-[100%] duration-1000">Big Saving Days Sale</h4>
            <h2 className="text-[35px] font-[700] w-fullC ">Women Solid Round Greeen T-shirt</h2>
            <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3">
                Starting At Only<span className="text-primary text-[30px] font-700">₹550</span>
            </h3>
            <div className="w-fullrelative opacity-0 -right-[100%]  btn_">
            <Button className="btn-org ">SHOP NOW</Button>
            </div>
           </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item w-full rounded-md overflow hidden">
        <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-2.jpg" />
         <div className="info absolute top-0 -right-[100%] w-[50%] z-50 p-8 opacity-0 flex items-center flex-col justfy-center transition-all duration-700">
            <h4 className="text-[18px] font-[500] w-full text-left mb-3 relative  opacity-0 -right-[100%] duration-1000">Big Saving Days Sale</h4>
            <h2 className="text-[35px] font-[700] w-fullC ">Women Solid Round Greeen T-shirt</h2>
            <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3">
                Starting At Only<span className="text-primary text-[30px] font-700">₹550</span>
            </h3>
            <div className="w-full relative opacity-0 -right-[100%] btn_ ">
            <Button className="btn-org ">SHOP NOW</Button>
            </div>
           </div>
        </div>
        </SwiperSlide>
        
      </Swiper>
    </>
    )

}

export default HomeBannerV2;