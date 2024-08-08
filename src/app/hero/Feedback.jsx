"use client";
import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Image from 'next/legacy/image'
import FeedbackCard from '../components/slider/FeedbackCard'
import { SwiperSlide } from 'swiper/react';
import Block from '../components/block/Block'
import Slider from '../components/slider/Slider';

export default function Feedback({ className, title, subtitle, cards }) {
  return (
    <div  className={cl(className,  styles.feedback)}>
        <Image
        src='/quote-up.svg'
        alt= "quote up"
        width={50}
        height={50}
        />
        <h2 className={cl(className, styles.servicesTitle)}>{title} </h2>
        <p className={cl(className, styles.servicesDescr)}>{subtitle} </p>
        <Slider className={cl(className, styles.servicesSlider)}>
        {cards && cards.map((item, index) => (
          <SwiperSlide key={index}>
            <FeedbackCard 
              key={index}
              name={item.name} 
              company={item.company} 
              text={item.text} 
            />
          </SwiperSlide>
        ))}
      </Slider>
        <div  className={styles.feedbackQuoteDown}>
            <Image
            src='/quote-down.svg'
            alt= "quote up"
            width={50}
            height={50}
            />
        </div>
        
    </div>
  )
}
