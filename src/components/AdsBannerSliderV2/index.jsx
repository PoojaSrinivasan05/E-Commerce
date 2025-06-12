import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import BannerBoxV2 from '../bannerBoxV2';



const AdsBannerSlider=(props)=>{
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
                    <BannerBoxV2 info="left"
              image={
                "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"
              } link={"/"} />
                </SwiperSlide>

                 <SwiperSlide>
                    <BannerBoxV2 info="right"
              image={
                "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg"
              } link={"/"} />
                </SwiperSlide>

                 <SwiperSlide>
                    <BannerBoxV2 info="left"
              image={
                "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"
              } link={"/"} />
                </SwiperSlide>

                 <SwiperSlide>
                    <BannerBoxV2 info="right"
              image={
                "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg"
              }  link={"/"} />
                </SwiperSlide>

                 <SwiperSlide>
                    <BannerBoxV2 info="left"
              image={
                "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"
              } link={"/"} />
                </SwiperSlide>
                
                </Swiper>
        </ div>
    )
}

export default AdsBannerSlider;

