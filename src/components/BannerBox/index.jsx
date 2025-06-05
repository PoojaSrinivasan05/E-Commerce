import React from "react";
import {Link} from "react-router-dom";

const BannerBox=(props)=>{
  return(
    <div className='box bannerBox overflow-hidden rounded-lg'>
        <Link to="/">
     <img scr={props.img}
      className='w-full transition-all group-hover:scale-105 group-hover:rotate-1'
      alt="Banner" />
     </Link>
    </div>
  )
}

export default BannerBox;