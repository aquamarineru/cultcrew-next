import React from 'react';
import styles from './styles.module.scss';
import cl from 'classnames';
import Link from 'next/link';

export default function Navigation() {

  return (
    <div className={cl(styles.nav)}>
      <nav className={cl(styles.navLinks)}>
        <Link 
        href="/" 
        passHref 
        className={cl(styles.navLink)}>Startseite</Link>
        <Link 
        href="/services" 
        passHref 
        className={cl(styles.navLink)}
        >Unsere Services</Link>
        <Link 
        href="/unternehmen" 
        passHref 
        className={cl(styles.navLink)}
        >Das Unternehmen</Link>
        <Link 
        href="/news" 
        passHref 
        className={cl(styles.navLink)}
        >News</Link>
        <Link 
        href="/kontakt" 
        passHref 
        className={cl(styles.navLink)}
        >Kontakt</Link>
      </nav>
    </div>
  )
}
