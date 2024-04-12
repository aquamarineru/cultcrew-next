import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'


export default function Footer({className}) {
  return (
    <div className={cl(className, styles.footer)}>
      footer
    </div>
  )
}
