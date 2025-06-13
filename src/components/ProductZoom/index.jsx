import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export const ProductZoom = () => {
  return (
    <>
      <div className="flex gap-3">
        <div className="slider w-[30%]">
            <Swiper
                    direction={"vertical"}
                    slidesPerView={4}
                    spaceBetween={10}
                    navigation={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
            >
                <SwiperSlide>
                    <div  className="item">
                        <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/80-home_default/brown-bear-cushion.jpg"/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
       
        <div className="zoomContainer w-[70%]">
        <InnerImageZoom
        zoomType="hover"
        zoomScale={1}
        scr={"https://demos.codezeel.com/prestashop/PRS21/PRS210502/49-large_default/today-is-a-good-day-framed-poster.jpg"}/>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
