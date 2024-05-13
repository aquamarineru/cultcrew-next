import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import cl from 'classnames'
import { urlFor } from '../../../lib/client';

export default function QualificationCard({className, title, image}) {
  return (
    <div>
       <Image 
        src={urlFor(image).url()}
        alt={title}
        width={200}
        height={200}
        /> 
        <h3>{title}</h3>
    </div>
  )
}
