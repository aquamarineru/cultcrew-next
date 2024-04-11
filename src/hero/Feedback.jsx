import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Title from '@/components/Title/Title'
import Image from 'next/image'
import Slider from '@/components/Slider/Slider'
import { SwiperSlide } from 'swiper/react';
import FeedbackCard from '@/components/Slider/FeedbackCard';

const data = [
    {
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisl in turpis vehicula pharetra. Done  in turpis vehicula pharetra. Done"
    },
    {
        name: "Jane Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisl in turpis vehicula pharetra. Done"
    },
    {
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisl in turpis vehicula pharetra. Done"
    },
    {
        name: "Jane Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisl in turpis vehicula pharetra. Done"
    },
    {
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisl in turpis vehicula pharetra. Done"
    },
    {
        name: "Jane Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisl in turpis vehicula pharetra. Done"
    }
]

export default function Feedback({className}) {
  return (
    <div className={cl(className, styles.services, styles.feedback)}>
        <Image
        src="/quote-up.svg"
        alt="Quote"
        width={50}
        height={50}
        className={cl(styles.feedbackQuote)}
        />
        <Title type="medium">Das sagen unsere Kunden</Title>
        <Slider>
            {data.map((item, index) => (
                <SwiperSlide key={index}>
                    <FeedbackCard 
                    name={item.name} 
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
