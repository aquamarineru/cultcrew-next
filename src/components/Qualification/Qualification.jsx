import React from 'react';
import styles from './styles.module.scss';
import cl from 'classnames';
import Title from '@/components/Title/Title';
import { SwiperSlide } from 'swiper/react';
import { urlFor } from '../../../lib/client';
import Slider from '@/components/Slider/Slider';
import QualificationCard from './QualificationCard';

export default function Qualification({ className, data, title}) {
  console.log(data)
  return (
    <div className={cl(className, styles.qualificationContainer)}>
      <Title type ='medium'> {title} </Title>
      <div>
      <Slider>
       {data.map((item, index) => (
          <SwiperSlide key={index}>
            <QualificationCard 
              className={styles.qualificationCard}
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
