import React from 'react'
import Image from 'next/image'
import Blur from '../components/Blur'
import Title from '@/components/Title'

export default function Cover() {
  return (
    <div className='relative w-full h-full min-h-screen min-w-full'>
        <Image
        src="/bg.jpg"
        alt="Background"
        priority={true}
        quality={100}
        layout='fill'
        objectFit="cover" 
        objectPosition="left"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className='z-0'
        />
        <Blur />
        <Title />
    </div>
  )
}
