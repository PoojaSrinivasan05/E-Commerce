import React, { useState,useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "react-inner-image-zoom/lib/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";


export const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const goto=(index)=>{
    setSlideIndex(index);
    zoomSliderSml.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  }
  return (
    <>
      <div className="flex gap-3">
        <div className="slider w-[15%] ">
          <Swiper
            ref={zoomSliderSml}
            direction={"vertical"}
            slidesPerView={5}
            spaceBetween={0}
            navigation={true}
            modules={[Navigation]}
            className="zoomProductSliderThumbs h-[500px] overflow-hidden"
          >
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden  cursor-pointer group ${slideIndex===0 ? 'opacity-1' : 'opacity-30'}`}
                onClick={() => goto(0)}
              >
                <img
                  src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/80-home_default/brown-bear-cushion.jpg"
                  className="w-full
                transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
               className={`item rounded-md overflow-hidden  cursor-pointer group ${slideIndex===1 ? 'opacity-1' : 'opacity-30'}`}
                onClick={() => goto(1)}
              >
                <img
                  src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/37-home_default/the-best-is-yet-to-come-framed-poster.jpg"
                  className="w-full
                transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden  cursor-pointer group ${slideIndex===2 ? 'opacity-1' : 'opacity-30'}`}
                onClick={() => goto(2)}
              >
                <img
                  src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/66-home_default/mug-the-adventure-begins.jpg"
                  className="w-full
                transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden  cursor-pointer group ${slideIndex===3 ? 'opacity-1' : 'opacity-30'}`}
                onClick={() => goto(3)}
              >
                <img
                  src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/25-home_default/hummingbird-printed-t-shirt.jpg"
                  className="w-full
                transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
               className={`item rounded-md overflow-hidden  cursor-pointer group ${slideIndex===4 ? 'opacity-1' : 'opacity-30'}`}
                onClick={() => goto(4)}
              >
                <img
                  src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/110-home_default/hummingbird-vector-graphics.jpg"
                  className="w-full
                transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
               className={`item rounded-md overflow-hidden  cursor-pointer group ${slideIndex===5 ? 'opacity-1' : 'opacity-30'}`}
                onClick={() => goto(5)}
              >
                <img
                  src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/110-home_default/hummingbird-vector-graphics.jpg"
                  className="w-full
                transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
               className={`item rounded-md overflow-hidden  cursor-pointer group ${slideIndex===6 ? 'opacity-1' : 'opacity-30'}`}
                onClick={() => goto(6)}
              >
                <img
                  src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/110-home_default/hummingbird-vector-graphics.jpg"
                  className="w-full
                transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>

        <div className="zoomContainer w-[85%] h-[600px] overflow-hidden ">
          <Swiper ref={zoomSliderBig} slidesPerView={1} spaceBetween={0} navigation={false}>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://demos.codezeel.com/prestashop/PRS21/PRS210502/32-medium_default/brown-bear-printed-sweater.jpg"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://demos.codezeel.com/prestashop/PRS21/PRS210502/32-medium_default/brown-bear-printed-sweater.jpg"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://demos.codezeel.com/prestashop/PRS21/PRS210502/32-medium_default/brown-bear-printed-sweater.jpg"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://demos.codezeel.com/prestashop/PRS21/PRS210502/32-medium_default/brown-bear-printed-sweater.jpg"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://demos.codezeel.com/prestashop/PRS21/PRS210502/32-medium_default/brown-bear-printed-sweater.jpg"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://demos.codezeel.com/prestashop/PRS21/PRS210502/32-medium_default/brown-bear-printed-sweater.jpg"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={
                  "https://demos.codezeel.com/prestashop/PRS21/PRS210502/32-medium_default/brown-bear-printed-sweater.jpg"
                }
              />
            </SwiperSlide>
           
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
