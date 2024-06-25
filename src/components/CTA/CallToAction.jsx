import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Title from '@/components/Title/Title'
import Button from '@/components/Button/Button'
import Link from "next/link";

export default function CallToAction({className, title, subtitle, btnLabel,  ariaLabel, href}) {
  const isExternal = href && (href.startsWith('http://') || href.startsWith('https://'));

  return (
    <div className={cl(className, styles.cta)}>
        <Title type='medium' className={cl(className, styles.ctaTitle)}>{title}</Title>
        <Title className={cl(className, styles.ctaTitle)}>{subtitle}</Title>
        {isExternal ? (
        <a href={href} target='_blank' rel='noopener noreferrer' aria-label={ariaLabel} className={cl(className, styles.ctaButton)}>
          <Button btnLabel={btnLabel} />
        </a>
      ) : (
        <Button
          href={href}
          btnLabel={btnLabel}
          ariaLabel={ariaLabel}
        />
      )} 
    </div>
  )
}
