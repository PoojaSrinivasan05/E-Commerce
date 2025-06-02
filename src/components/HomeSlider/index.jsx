import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

export const index = () => {
  return (
    <div className="homeSlider py-5">
      <div className="container">
        <Swiper
          spaceBetween={10}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className="sliderHome"
        >
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/1405760376/vector/online-shopping-design-graphic-elements-signs-symbols-mobile-marketing-and-digital-marketing.jpg?s=612x612&w=0&k=20&c=2DSpkY9ktsAfzBOcZUMkZThW3B6kvGYG1cHQ3yeaPJg="
                alt="Banner Name"
                className="w-full h-[400px]"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/1469956767/vector/super-sale-banner-template-online-marketing-banner-shopping-day-discount-holiday-deal.jpg?s=612x612&w=0&k=20&c=drM_nXTKWZnwzsV59yi1drazivvX_9wYI_tzj8hOWVY="
                alt="Banner Image"
                className="w-full h-[400px]"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/1463774566/vector/mega-sale-banner-template-online-marketing-banner.jpg?s=612x612&w=0&k=20&c=CeJuSJEkKQrGlkHOiL1QEZOHkSnJHouKciWNaB4jZOA="
                alt="Banner Image"
                className="w-full h-[400px]"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default index;
