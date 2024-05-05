import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Image from "next/legacy/image"
import Link from 'next/link'
import { urlFor } from '../../../lib/client'

export default function Card({className, image, title, subtitle, link}) {
  return (
    <div className={cl(className, styles.card)} >
      <Link
      href={link}>
         <Image
          src={urlFor(image).url()} 
          width={250} 
          height={150} 
          alt={title}
          className={styles.cardImage}
        /> 
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardText}>{subtitle}</p>
      </div>
    </Link>

    </div>
    
  )
}
