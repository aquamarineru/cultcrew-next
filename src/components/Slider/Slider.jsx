import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import { Pagination } from 'swiper/modules';
import styles from './styles.module.scss'
import cl from 'classnames'

export default function Slider({children, className}) {
  return (
   <Swiper 
   className={cl(className, styles.slider)}
      modules={[Pagination]}
      spaceBetween={50}
      pagination={{ 
        clickable: true,
      }}
      breakpoints={{
        350: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        760: {
          slidesPerView: 2,
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
