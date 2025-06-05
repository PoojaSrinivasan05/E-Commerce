import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import BannerBox from '../BannerBox';



const AdsBanneSlider=(props)=>{
    return (
        <div className='w-full py-5'>
        <Swiper
                slidesPerView={props.items}
                spaceBetween={10}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Navigation]}
                className="smlBtn"
              >
                <SwiperSlide>
                    <BannerBox img={'/ads1.jpg'}link={"/"} />
                </SwiperSlide>
                 <SwiperSlide>
                    <BannerBox img={'/ads2.jpg'}link={"/"} />
                </SwiperSlide>
                 <SwiperSlide>
                    <BannerBox img={'/ads3.jpg'}link={"/"} />
                </SwiperSlide>
                 <SwiperSlide>
                    <BannerBox img={'/ads4.jpg'}link={"/"} />
                </SwiperSlide>
                 <SwiperSlide>
                    <BannerBox img={'/ads5.jpg'}link={"/"} />
                </SwiperSlide>
                
                </Swiper>
        </ div>
    )
}

export default AdsBanneSlider;