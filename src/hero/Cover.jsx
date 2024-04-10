import React from 'react'
import Image from 'next/image'
import Blur from '../components/Blur'
import Title from '@/components/Title'

export default function Cover() {
  return (
    <div className='overflow-hidden'>
        <Image
        src="/bg.jpg"
        alt="Background"
        width={1920}
        height={1080}
        priority={true}
        className='bg-cover bg-no-repeat bg-center  w-full  z-0'
        />
        <Blur />
        <Title />
    </div>
  )
}
