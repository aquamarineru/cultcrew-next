import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Image from 'next/image'
import Title from '@/components/Title/Title'
import Button from '@/components/Button/Button'

export default function Cover() {
  return (
    <div className={cl(styles.cover)}>
        <Image
        src="/bg.jpg"
        alt="Background"
        priority={true}
        quality={100}
        layout='fill'
        objectFit="cover" 
        objectPosition="left"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={cl(styles.coverCircleBlur)}></div> 
        <Title>
        Lösungen für Ihre Sicherheit - Mit Expertise und Erfahrung 
        </Title>
    </div>
  )
}
