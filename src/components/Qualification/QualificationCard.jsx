import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import cl from 'classnames'
import { urlFor } from '../../../lib/client';

export default function QualificationCard({className, title, image}) {
  return (
    <div className={cl(className, styles.qualificationCard)}>
       <Image 
        src={urlFor(image).url()}
        alt={title}
        width={200}
        height={200}
        className={cl(className, styles.qualificationCardImage)}
        /> 
    </div>
  )
}
