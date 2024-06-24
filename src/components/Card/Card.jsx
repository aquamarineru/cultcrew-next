import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Image from "next/legacy/image"
import Link from 'next/link'
import { urlFor } from '../../../lib/client'
import Block from '@/components/blockContent/Block';
import { IoArrowForwardCircle } from "react-icons/io5";

export default function Card({className, image, title, subtitle, link}) {
  return (
    <div className={cl(className, styles.card)} >
       <Link
        href={`/news/${encodeURIComponent(link)}`}>
        <Image
        src={urlFor(image).url()} 
        width={250} 
        height={150} 
        alt={title}
        className={styles.cardImage}
        /> 
        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <Block blocks={subtitle} className={styles.cardText} />
          <div className={cl(className, styles.cardButton)}>
            Mehr 
            <IoArrowForwardCircle className={styles.cardButtonIcon} />
          </div>
        </div>
       </Link> 
    </div>
  )
}
