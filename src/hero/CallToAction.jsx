import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Title from '@/components/Title/Title'
import Button from '@/components/Button/Button'

export default function CallToAction({className}) {
  return (
    <div className={cl(className, styles.cta)}>
        <Title type='medium' className={cl(className, styles.ctaTitle)}>Machen Sie den ersten Schritt zu mehr Sicherheit!</Title>
        <Title className={cl(className, styles.ctaTitle)}>Kontaktieren Sie uns jetzt, um individuelle Sicherheitslösungen zu entdecken. Wir melden uns umgehend bei Ihnen.</Title>
        <Button href="/kontakt" btnLabel="Kontaktieren Sie uns"
        ariaLabel={CallToAction} />
    </div>
  )
}
