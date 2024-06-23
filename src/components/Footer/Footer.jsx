import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";



export default function Footer({className}) {
  return (
    <div className={cl(className, styles.footer)}>
      <div className={cl(className, styles.footerContainer)}>
        <div className={styles.footerLogo}>
          <Image src='/logo.png'
          width={140}
          height={70}
          alt='Logo'
          priority
          quality={80}
          />
          <div className={cl(className, styles.footerContact)}>
            <p className={cl(className, styles.footerContactItem)}>2728 Hickory StreetSalt 
              <br />  Lake City, UT 84104</p>
            <p className={cl(className, styles.footerContactItem)}>
              <FaPhoneAlt />
              <a href="tel:+1801-328-8778">801-328-8778</a>
            </p>
            <p className={cl(className, styles.footerContactItem)}>
              <FaEnvelope />
              <a href="mailto:info@test.com"> info@test.com </a>
            </p>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <ul className={styles.footerLinksItems}>
          <li className={styles.footerLinksItemsItem}>
              <Link href="/">Startseite</Link>
            </li>
            <li className={styles.footerLinksItemsItem}>
              <Link href="/services">Services</Link>
            </li>
            <li className={styles.footerLinksItemsItem}>
              <Link href="/unternehmen">Unternehmen</Link>
            </li>
            <li className={styles.footerLinksItemsItem}>
              <Link href="/news">News</Link>
            </li>
            <li className={styles.footerLinksItemsItem}>
              <Link href="/jobs">Karierre</Link>
            </li>
            <li className={styles.footerLinksItemsItem}>
              <Link href="/kontakt">Kontakt</Link>
            </li>
          </ul>
          <ul className={styles.footerLinksItems}>
            <li className={styles.footerLinksItemsItem}>
              <Link href="/impressum">Impressum</Link>
            </li>
            <li className={styles.footerLinksItemsItem}>
              <Link href="/datenschutz">Datenschutz</Link>
            </li>
            <li className={styles.footerLinksItemsItem}>
              <Link href="/agb">AGB</Link>
            </li>
          </ul>
          <ul className={styles.footerLinksItems}>
            <li className={styles.footerLinksItemsItem}>
              <Link href="/">Facebook</Link>
            </li>
            <li className={styles.footerLinksItemsItem}>
              <Link href="/">Instagram</Link>
            </li>
            <li className={styles.footerLinksItemsItem}>
              <Link href="/">LinkedIn</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
