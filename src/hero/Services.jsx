import React from 'react'
import Image from "next/legacy/image"
import Slider from '../components/Slider/Slider'
import Cards from '../components/Slider/Cards'
import Button from '../components/Button/Button'
import { SwiperSlide } from 'swiper/react';
import styles from './styles.module.scss'
import cl from 'classnames'
import Title from '@/components/Title/Title'
const data = [
    {
        image: "/service1.svg",
        title: "Private Investigation Services",
        description: "This We can help you find legal and efficient solutions to your problems using expert private investigator the first image",
    },
    {
        image: "/service2.png",
        title: "Personal Investigation Services",
        description: "This We can help you find legal and efficient solutions to your problems using expert private investigator the second image",
    },
    {
        image: "/service3.svg",
        title: "Armed Security Guard",
        description: "This We can help you find legal and efficient solutions to your problems using expert private investigator the third image",
    },
    {
        image: "/service4.svg",
        title: "Event Security",
        description: "This is We can help you find legal and efficient solutions to your problems using expert private investigator fourth image",
    },
    {
        image: "/service1.svg",
        title: "Private Investigation Services",
        description: "This is the fiftWe can help you find legal and efficient solutions to your problems using expert private investigatorh image",
    } 
  ]

export default function Services({className}) {
  return (
    <div className={cl(className, styles.services)}>
            <Title type="medium">Werfen Sie einen Blick auf unsere Serviceleistungen</Title>
            <h3
            className={cl(className, styles.servicesDescr)} 
            >
                Lorem ipsum dolor sit amet...
            </h3>
        
        <Slider>
            {data.map((item, index) => (
                <SwiperSlide key={index}>
                    <Cards 
                    image={item.image} 
                    title={item.title} description={item.description} />
                </SwiperSlide>
            ))}
        </Slider>
        <div className={cl(className, styles.servicesBtn)}>
            <Button 
            href="/services" 
            btnLabel="Unsere Services"
            ariaLabel={Services}
            />
        </div>
        
      
    </div>
  )
}
