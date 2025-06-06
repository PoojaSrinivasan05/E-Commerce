import React from 'react';
import "../bannerBoxV2/style.css";
import { Link } from 'react-router-dom';

const BannerBoxV2 = (props) => {
    return(
       <div className="bannerBoxV2 w-full overflow-hidden rounded-md group relative">
        <img src={props.image}
        className='w-full  transition-all duration-150 group hover:scale-105' />

        <div className={'info absolute top-0 ${props.info==="left" ? "left-0" : "right-0"}  w-[70%] h-[100%] z-50 flex-items-center justifyy-center flex-col gap-2 ${props.info==="left" ? "" : "pl-12"}'} >
            <h2 className='text-[18px] font-[600]'>Samsung Gear
                 VR Camera</h2>
                 <span className='text-[20px] text-primary font-[600] w-full'>20,000</span>
                 <div className='w-full'>
                 <Link to="/" className="text-[16px] font-[600]">SHOP NOW</Link>
                 </div>
        </div>
       </div>
    )
}

export default BannerBoxV2;