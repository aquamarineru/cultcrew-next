import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import { SwiperSlide } from 'swiper/react';
import Slider from '@/components/Slider/Slider';
import TeamMember from './TeamMember';
import Title from '@/components/Title/Title';

export default function Team({className, teamData, title}) {
  return (
    <div className={cl(className, styles.team)}>
      <Title type="medium">{title}</Title>
        <Slider className={cl(className, styles.teamSlider)}>
            {teamData.map((item, index) => (
                <SwiperSlide key={index}>
                    <TeamMember 
                    name={item.name} 
                    position={item.position} 
                    image={item.image} 
                    email={item.email} 
                    phone={item.phone} /> 
                </SwiperSlide>
            ))}
        </Slider>
    </div>
        
      
  )
}
