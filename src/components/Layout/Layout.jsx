import React from 'react'
import styles from './styles.module.scss';
import cl from 'classnames';


export default function Layout({ className, children }) {
  return (
   <div>
    <div className={cl(styles.layout, className)}>
      <div className={styles.layoutInner}>
        {children}
      </div>
    </div>
   </div>
  )
}
