import React from "react"
import Link from "next/link"
import cl from 'classnames'
import styles from './styles.module.scss'


export default function Button({href, btnLabel, ariaLabel, className}) {
  return (
  <Link href={href} className={cl(styles.button)} aria-label={ariaLabel}>
        {btnLabel}
    </Link>
  )
}