import React from 'react';
import HomeSlider from '../../components/HomeSlider';
import HomeCatSlider from '../../components/HomeCatSlider';
import { MdOutlineDeliveryDining } from "react-icons/md";
import ProductsSlider from '../../components/ProductsSlider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import BlogItem from '../../components/BlogItem';
import Footer from '../../components/Footer';


const Home=()=>{
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return(
        <>
        <HomeSlider />
        <HomeCatSlider />
         <section className='bg-white py-8'> 
        <div className="container">
            <div className="flex items-center justify-between">
                <div className="leftSec">
                    <h3 className='text-[20px] font-[600]'>Popular Products</h3>
                    <p className='text-[14px] font-[400]'>Do not miss the current offers until the end of June.</p>
                    </div>
                    <div className="rightSec W-[60%]">
                        <Tabs
                             value={value}
                             onChange={handleChange}
                             variant="scrollable"
                             scrollButtons="auto"
                             aria-label="scrollable auto tabs example"
      >
                             <Tab label="Fashion" />
                             <Tab label="Jewellery" />
                             <Tab label=" Bags " />
                             <Tab label="Footwear" />
                             <Tab label="Beauty" />
                             <Tab label="Wellness" />
                             
                        </Tabs>
                    </div>
                </div>

                <ProductsSlider items={5} />
            </div>
        </section>
        <section className='py-8 bg-white mt-5'>
            <div className="container">
                <div className='freeShipping w-[80%] m-auto h-[60px] py-2 p-4 border-1 border-[#ff5252] flex items-center justify-between rounded-md'>
                    <div className='col1 flex items-center gap-5'>
                <MdOutlineDeliveryDining className='text-[50px]' />
                <span className ="text-[20px] font-[600] uppercase">Free Shipping</span>
                </div>

                <div className="col 2">
                    <p className='mb-0 font-[500]'>Free Delivery on first Order and over ₹2500  </p>
                </div>
                <p className="font-bold text-[20px]">-Only ₹2500</p>
                </div>

             
            </div>
        </section>

  <section className='py-5 bg-white'>
    <div className='container'>
        <h3 className='text-[20px] font-[600]'>Latest Products</h3>
         <ProductsSlider items={5} />
         </div>
    </section>
  
  <section className='py-5 bg-white'>
    <div className='container'>
        <h3 className='text-[20px] font-[600]'>Featured Products</h3>
         <ProductsSlider items={5} />
         </div>
    </section>

    <section className='py-5 pb-8 bg-white blogSection'>
       <div className='container' >
        <h3 className='text-[20px] font-[600] mb-4'>From the Blog</h3>
        <Swiper
                slidesPerView={4}
                spaceBetween={30}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Navigation]}
                className="blogSlider"
              >
                <SwiperSlide>
                    <BlogItem />
                </SwiperSlide>
                <SwiperSlide>
                    <BlogItem />
                </SwiperSlide>
                <SwiperSlide>
                    <BlogItem />
                </SwiperSlide>
                <SwiperSlide>
                    <BlogItem />
                </SwiperSlide>
                <SwiperSlide>
                    <BlogItem />
                </SwiperSlide>
                </Swiper>

       </div>
    </section>


       <Footer />
 

       











































































































































































































        </>
    )
}

export default Home;