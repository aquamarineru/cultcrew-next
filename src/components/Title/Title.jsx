import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'

export default function Title({children, type, className}) {
  if(type === 'large') {
    return(
      <h1 className={cl(className, styles.title, styles.titleLarge)}>
        {children }
      </h1>
    )
  }
  if(type ==='medium') {
    return(
      <h2 className={cl(className, styles.title, styles.titleMedium)}>
        {children }
      </h2>
    )
  }
  if(type ==='small') {
    return(
      <h3 className={cl(className, styles.title, styles.titleSmall)}>
        {children }
      </h3>
    )
  }
  return (
      <p className={cl(className, styles.title, className, styles.titleDescr)}> {children}</p>

  )
}
