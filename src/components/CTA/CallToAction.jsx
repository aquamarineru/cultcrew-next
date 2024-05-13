import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Title from '@/components/Title/Title'
import Button from '@/components/Button/Button'

export default function CallToAction({className, title, subtitle, btnLabel,  ariaLabel, href}) {
  return (
    <div className={cl(className, styles.cta)}>
        <Title type='medium' className={cl(className, styles.ctaTitle)}>{title}</Title>
        <Title className={cl(className, styles.ctaTitle)}>{subtitle}</Title>
        <Button
          href={href}
          btnLabel={btnLabel}
          ariaLabel={ariaLabel}
        /> 
    </div>
  )
}
