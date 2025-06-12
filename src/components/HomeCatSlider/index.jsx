import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import {Link} from "react-router-dom";
import 'swiper/css/navigation';


export const HomeCatSlider=()=>{
    return(
        <div className="homeCatSlider py-8 pt-4 " >
            <div className='container '>
                 <Swiper
        slidesPerView={6}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='pt-3'>
          <Link to="/">
          <div className="item px-3 py-7  bg-white rounded-sm text-center flex items-center justify-center flex-col">
          <img src="https://serviceapi.spicezgold.com/download/1748409729550_fash.png"className='w-[100px] h-[100px] transition-all'/>
          <h3 className='text-[15px] font-[500] mt-3 text-center'>Fashion</h3>
          </div>
          </Link>
         </SwiperSlide>
         <SwiperSlide className='pt-3'>
          <Link to="/">
          <div className="item px-3 py-7  bg-white rounded-sm text-center flex items-center justify-center flex-col">
          <img src="https://serviceapi.spicezgold.com/download/1741661120743_jw.png" className='w-[100px] h-[100px] transition-all'/>
          <h3 className='text-[15px] font-[500] mt-3 text-center'>Jewellery</h3>
          </div>
          </Link>
         </SwiperSlide>
         <SwiperSlide className='pt-3'>
          <Link to="/">
          <div className="item px-3 py-7  bg-white rounded-sm text-center flex items-center justify-center flex-col">
          <img src="https://serviceapi.spicezgold.com/download/1741661045887_bag.png" className='w-[100px] h-[100px] transition-all'/>
          <h3 className='text-[15px] font-[500] mt-3 text-center'>Bags</h3>
          </div>
          </Link>
         </SwiperSlide>
         <SwiperSlide className='pt-3'>
          <Link to="/">
          <div className="item px-3 py-7 bg-white rounded-sm text-center flex items-center justify-center flex-col">
          <img src="https://serviceapi.spicezgold.com/download/1741661061379_foot.png" className='w-[100px] h-[100px] transition-all'/>
          <h3 className='text-[15px] font-[500] mt-3 text-center'>Footwear</h3>
          </div>
          </Link>
         </SwiperSlide>
         <SwiperSlide className='pt-3'>
          <Link to="/">
          <div className="item px-3 py-7  bg-white rounded-sm text-center flex items-center justify-center flex-col">
          <img src="https://serviceapi.spicezgold.com/download/1741661092792_beauty.png" className='w-[100px] h-[100px]  transition-all'/>
          <h3 className='text-[15px] font-[500] mt-3 text-center'>Beauty</h3>
          </div>
          </Link>
         </SwiperSlide>
         <SwiperSlide className='pt-3'>
          <Link to="/">
          <div className="item px-3 py-7  bg-white rounded-sm text-center flex items-center justify-center flex-col">
          <img src="https://serviceapi.spicezgold.com/download/1741661105893_well.png" className='w-[100px] h-[100px]  transition-all'/>
          <h3 className='text-[15px] font-[500] mt-3 text-center'>Wellness</h3>
          </div>
          </Link>
         </SwiperSlide>   
          
      </Swiper>
            </div>
        </div>
    )
}
 export default HomeCatSlider;