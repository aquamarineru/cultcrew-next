"use client";
import React from 'react';
import styles from './styles.module.scss';
import cl from 'classnames';
import Link from 'next/link';

export default function Navigation({ closeMenu, className }) {

  return (
    <div className={cl(className, styles.nav)}>
      <nav className={cl(className, styles.navLinks)}>
        <Link 
        href="/" 
        onClick={closeMenu}
        passHref 
        className={cl(className, styles.navLink)}>Startseite</Link>
        <Link 
        href="/services" 
        onClick={closeMenu}
        passHref 
        className={cl(className, styles.navLink)}
        >Unsere Services</Link>
        <Link 
        href="/unternehmen" 
        onClick={closeMenu}
        passHref 
        className={cl(className, styles.navLink)}
        >Das Unternehmen</Link>
        <Link 
        href="/karriere" 
        onClick={closeMenu}
        passHref 
        className={cl(className, styles.navLink)}
        >Karriere</Link>
        <Link 
        href="/news" 
        onClick={closeMenu}
        passHref 
        className={cl(className, styles.navLink)}
        >News</Link>
        <Link 
        href="/kontakt" 
        onClick={closeMenu}
        passHref 
        className={cl(className, styles.navLink)}
        >Kontakt</Link>
      </nav>
    </div>
  )
}
