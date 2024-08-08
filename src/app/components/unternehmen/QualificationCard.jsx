"use client";
import React from 'react'
import cl from 'classnames';
import styles from './styles.module.scss';
import Image from 'next/legacy/image';
import { urlFor } from '../../lib/client';

export default function QualificationCard({ className, title, image}) {
  return (
    <div className={cl(className, styles.qualificationCard)}>
      <div className={styles.imageWrapper}>
      <Image 
        src={urlFor(image).url()}
        alt={title}
        width={300}   
        height={250}  
        className={cl(className, styles.qualificationWrapperImage)}
        /> 
      </div>
       
        <h3 className={cl(className, styles.qualificationCardTitle)}>{title} </h3>
    </div>
  )
}
