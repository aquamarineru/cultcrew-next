import React from 'react'
import Image from 'next/image'

export default function Cards({image, title, description}) {
  return (
    <div className="bg-primary px-10 py-12 mb-16 rounded-md hover:bg-dark-blue ">
        <Image 
        src={image} 
        width={150} 
        height={150} 
        alt={title} />
    <h2 className="text-2xl text-text-light font-bold my-4">{title}</h2>
    <p className='text-text-light'>{description}</p>
  </div>
  )
}
