import React from 'react'
import Button from '../Button/Button'
import styles from './styles.module.scss'
import cl from 'classnames'

export default function Title({children, type}) {
  return (
    <div className={cl(styles.title)}>
    <div className="text-text-light">
      <h1 className={cl(styles.titleLarge)}>
        {children }
      </h1>
      <p className={cl(styles.titleDescr)}>Unser Team aus Fachleuten bringt jahrelange Erfahrung in jeder Situation mit. Für nahezu jede Herausforderung finden wir eine Lösung – diskret, professionell und zuverlässig.</p>
      <Button href="/kontakt" btnLabel="Kontaktieren Sie uns" />
    </div>
</div>
  )
}
