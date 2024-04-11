import React from 'react'
import Image from 'next/image'
import Slider from './Slider/Slider'
import Cards from './Slider/Cards'
import { SwiperSlide } from 'swiper/react';
const data = [
    {
        image: "",
        title: "Image 1",
        description: "This is the first image"
    },
    {
        image: "",
        title: "Image 2",
        description: "This is the second image"
    },
    {
        image: "",
        title: "Image 3",
        description: "This is the third image"
    },
    {
        image: "",
        title: "Image 4",
        description: "This is the fourth image"
    },
    {
        image: "",
        title: "Image 5",
        description: "This is the fifth image"
    } 
  ]

export default function Test() {
  return (
    <div className="bg-light-blue px-24 py-16 rounded-md my-10">
        <h2 className="font-bold text-3xl text-center mb-4">Werfen Sie einen Blick auf unsere Serviceleistungen</h2>
        <p className="text-xl text-center mb-4">Lorem ipsum dolor sit amet...</p>
        <Slider>
            {data.map((item, index) => (
                <SwiperSlide key={index}>
                    <Cards image={item.image} title={item.title} description={item.description} />
                </SwiperSlide>
            ))}
        </Slider>
      
    </div>
  )
}
