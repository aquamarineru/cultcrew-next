import React from 'react';
import styles from './styles.module.scss';
import cl from 'classnames';
import Title from '@/components/Title/Title';
import { SwiperSlide } from 'swiper/react';
import { urlFor } from '../../../lib/client';
import Slider from '@/components/Slider/Slider';
import QualificationCard from './QualificationCard';

export default function Qualification({ className, data, title}) {
  return (
    <div className={cl(className, styles.qualification)}>
      <Title type ='medium'> {title} </Title>
      <div className={cl(className, styles.qualificationSlider)}>
        <Slider className={cl(className, styles.qualificationSlider)}>
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
