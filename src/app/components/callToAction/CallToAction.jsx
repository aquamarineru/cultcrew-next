import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Button from '../button/Button'

export default function CallToAction({ className, title, subtitle, btnLabel, ariaLabel, href }) {
    const isExternal = href && (href.startsWith('http://') || href.startsWith('https://'));
  return (
    <div className={cl(className, styles.callToAction)}>
      <h2  className={cl(className, styles.callToActionTitle)}>{title}</h2>
      <p  className={cl(className, styles.callToActionSubtitle)}>{subtitle} </p>
      {isExternal ? (
        <a href={href} target='_blank' rel='noopener noreferrer' aria-label={ariaLabel} className={cl(className, styles.callToActionButton)}>
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
