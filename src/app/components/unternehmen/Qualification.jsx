"use client";
import React from 'react'
import cl from 'classnames';
import styles from './styles.module.scss';
import { SwiperSlide } from 'swiper/react';
import Slider from '../slider/Slider';
import QualificationCard from './QualificationCard';

export default function Qualification({ className, title, data }) {
  return (
    <div className={cl(className, styles.qualification)}> 
        <h2 className={cl(className, styles.qualificationTitle, styles.teamTitle)}> {title} </h2>
        <div className=''>
            <Slider className={cl(className, styles.teamSlider)}>
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <QualificationCard 
                                title={item.title}
                                image={item.image}
                            />
                        </SwiperSlide>
                    ))}
                </Slider>
        </div>
      
    </div>
  )
}
