"use client";
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
            <p className={cl(className, styles.footerContactItems)}>Tittmoninger Str. 10 
              <br /> 83410 Laufen Deutschland</p>
            <p className={cl(className, styles.footerContactItems)}>
              <FaPhoneAlt />
              <a className={cl(className, styles.footerContactItem)} href="tel:+498682953649">+ 49-8682-953 649</a>
            </p>
            <p className={cl(className, styles.footerContactItems)}>
              <FaEnvelope />
              <a className={cl(className, styles.footerContactItem)} href="mailto:office@cult-crew.com"> office@cult-crew.com</a>
            </p>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <ul className={styles.footerLinksItems}>
          <li className={styles.footerLinksItemsItem}>
              <Link href="/" className={styles.link} >Startseite</Link>
            </li>
            <li className={styles.footerLinksItemsItem}>
              <Link href="/services"className={styles.link}>Services</Link>
            </li>
            <li className={styles.footerLinksItemsItem}>
              <Link href="/unternehmen" className={styles.link}>Unternehmen</Link>
            </li>
            <li className={styles.footerLinksItemsItem}>
              <Link href="/news" className={styles.link}>News</Link>
            </li>
            <li className={styles.footerLinksItemsItem}>
              <Link href="/karriere">Karriere</Link>
            </li>
            <li className={styles.footerLinksItemsItem}>
              <Link href="/kontakt" className={styles.link}>Kontakt</Link>
            </li>
          </ul>
          <ul className={styles.footerLinksItems}>
            <li className={styles.footerLinksItemsItem}>
              <Link href="/impressum" className={styles.link}>Impressum</Link>
            </li>
            <li className={styles.footerLinksItemsItem}>
              <Link href="/datenschutz" className={styles.link}>Datenschutz</Link>
            </li>
            <li className={styles.footerLinksItemsItem}>
              <Link href="/agb" className={styles.link}>AGB</Link>
            </li>
          </ul>
          <ul className={styles.footerLinksItems}>
            <li className={styles.footerLinksItemsItem}>
              <Link 
              href="https://www.facebook.com/cultcrew.sicherheit/"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
              >Facebook</Link>
            </li>
            <li className={styles.footerLinksItemsItem}>
              <Link href="#" className={styles.link}
              target="_blank"
              rel="noreferrer">Instagram</Link>
            </li>
            <li className={styles.footerLinksItemsItem}>
              <Link href="#"
              target="_blank"
              rel="noreferrer"
              className={styles.link}>LinkedIn</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
