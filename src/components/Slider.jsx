import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import { Pagination } from 'swiper/modules';

export default function Slider({children}) {
  return (
   <Swiper 
   className='mySwiper'
      modules={[Pagination]}
      spaceBetween={50}
      pagination={{ 
        clickable: true,
        

      }}
      breakpoints={{
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    >
        {children}
    </Swiper> 
  )
}
