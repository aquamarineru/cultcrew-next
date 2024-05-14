import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Title from '@/components/Title/Title'
import Image from "next/legacy/image"
import Slider from '@/components/Slider/Slider'
import { SwiperSlide } from 'swiper/react';
import FeedbackCard from '@/components/Slider/FeedbackCard';


export default function Feedback({className, title, company, subtitle, cards}) {
  return (
    <div className={cl(className, styles.services, styles.feedback)}>
        <Image
        src="/quote-up.svg"
        alt="Quote"
        width={50}
        height={50}
        className={cl(styles.feedbackQuote)}
        />
        <Title type="medium">{title}</Title>
        <p className={cl(className, styles.feedbackSubtitle)}>{subtitle} </p>
        <Slider>
            {cards.map((item, index) => (
                <SwiperSlide key={index}>
                    <FeedbackCard 
                    name={item.name} 
                    company={item.company}
                    text={item.text} />
                </SwiperSlide>
            ))} 
        </Slider>
        <Image
        src="/quote-down.svg"
        alt="Quote"
        width={50}
        height={50}
        className={cl(className, styles.feedbackQuoteDown)}
        />
            
      
    </div>
  )
}
