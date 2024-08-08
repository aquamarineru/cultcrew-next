"use client";
import React from 'react';
import styles from './styles.module.scss';
import cl from 'classnames';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slider from '../slider/Slider';
import TeamMember from './TeamMember';

export default function Team({ className, teamData, title})  {
   return(
    <div className={cl(className, styles.team)}>
        <h2 className={cl(className, styles.teamTitle)}>{title} </h2>
        <div className=''>
            <Slider className={cl(className, styles.teamSlider)}>
                    {teamData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <TeamMember 
                                name={item.name}
                                position={item.position}
                                image={item.image}
                                email={item.email}
                                phone={item.phone}
                            />
                        </SwiperSlide>
                    ))}
                </Slider>
        </div>
        
    </div>
   )

}