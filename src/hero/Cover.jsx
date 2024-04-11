import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Image from 'next/image'
import Title from '@/components/Title/Title'
import Button from '@/components/Button/Button'

export default function Cover({className}) {
  return (
    <div className={cl(className, styles.cover)}>
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
        <div className={cl(className, styles.coverTitle)}>
        <Title type="large">
        Lösungen für Ihre Sicherheit - Mit Expertise und Erfahrung 
        </Title>
        <Title>
        Unser Team aus Fachleuten bringt jahrelange Erfahrung in jeder Situation mit. Für nahezu jede Herausforderung finden wir eine Lösung – diskret, professionell und zuverlässig.
        </Title>
        <Button href="/kontakt" btnLabel="Kontaktieren Sie uns" />

        </div>
        
    </div>
  )
}
