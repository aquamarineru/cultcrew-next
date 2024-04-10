import React from 'react'
import Image from 'next/image'
import Slider from '../components/Slider'
import Cards from '../components/Cards'
import Button from '../components/Button'
import { SwiperSlide } from 'swiper/react';
const data = [
    {
        image: "/image1.webp",
        title: "Image 1",
        description: "This is the first image",
    },
    {
        image: "/image2.webp",
        title: "Image 2",
        description: "This is the second image",
    },
    {
        image: "/image3.webp",
        title: "Image 3",
        description: "This is the third image",
    },
    {
        image: "/image1.webp",
        title: "Image 4",
        description: "This is the fourth image",
    },
    {
        image: "/image3.webp",
        title: "Image 5",
        description: "This is the fifth image",
    } 
  ]

export default function Services() {
  return (
    <div className="bg-light-blue px-24 py-10 mx-auto rounded-md">
        <h2 className="font-bold text-3xl">Werfen Sie einen Blick auf unsere Serviceleistungen</h2>
        <p className="text-4xl">Lorem ipsum dolor sit amet...</p>
        <Slider>
            {data.map((item, index) => (
                <SwiperSlide key={index}>
                    <Cards 
                    image={item.image} 
                    title={item.title} description={item.description} />
                </SwiperSlide>
            ))}
        </Slider>
        <Button href="/services" btnLabel="Unsere Leistungen" />
      
    </div>
  )
}
