import React, { useRef, useEffect } from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/swiper-bundle.css';

import { Pagination } from 'swiper/modules';
import styles from './styles.module.scss';
import cl from 'classnames';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

// Custom Arrow components
const NextArrow = ({ onClick }) => {
  return (
    <BsArrowRight 
      style={{ 
        color: "#0056b3", 
        fontSize: "25px", 
        position: "absolute",
        top: "50%",
        right: "5px",
        transform: "translateY(-50%)",
        zIndex: "1",
        cursor: "pointer",
      }} 
      onClick={onClick} 
    />
  );
}

const PrevArrow = ({ onClick }) => {
  return (
    <BsArrowLeft 
      style={{ 
        color: "#0056b3", 
        fontSize: "25px", 
        position: "absolute",
        top: "50%",
        left: "5px",
        transform: "translateY(-50%)",
        zIndex: "1",
        cursor: "pointer",
      }}  
      onClick={onClick} 
    />
  );
}

export default function Slider({ children, className }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    if (swiper) {
      swiper.navigation.prevEl = prevRef.current;
      swiper.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <div className={cl(className, styles.slider)} style={{ position: 'relative' }}>
      <Swiper
        ref={swiperRef}
        className={cl(className, styles.slider)}
        modules={[Pagination]}
        spaceBetween={20} 
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          786: {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
              clickable: true,
            },
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {children}
      </Swiper>
      <div ref={prevRef} className={cl(className, styles.sliderBtnPrev)}>
        <PrevArrow onClick={() => swiperRef.current?.slidePrev()} />
      </div>
      <div ref={nextRef} className={cl(className, styles.sliderBtnNext)}>
        <NextArrow onClick={() => swiperRef.current?.slideNext()} />
      </div>
    </div>
  );
}
