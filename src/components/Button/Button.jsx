import React from "react";
import Link from "next/link";
import cl from 'classnames';
import styles from './styles.module.scss';

export default function Button({ href, btnLabel, ariaLabel, className }) {
  return href ? (
    <Link href={href} passHref>
      <div className={cl(styles.button, className)} aria-label={ariaLabel}>
        {btnLabel}
      </div>
    </Link>
  ) : (
    <button className={cl(styles.button, className)} aria-label={ariaLabel}>
      {btnLabel}
    </button>
  );
}
