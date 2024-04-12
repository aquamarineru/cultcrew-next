import React from 'react'
import styles from './styles.module.scss'
import cl from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Navigation from '../Header/Navbar'


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
            <p>2728 Hickory StreetSalt 
              <br />  Lake City, UT 84104</p>
            <p>
              <FaPhoneAlt />
              <a href="tel:+1801-328-8778">801-328-8778</a>
            </p>
            <p>
              <FaEnvelope />
              <a href="mailto:info@test.com"> info@test.com </a>
            </p>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <h4>Quick Links</h4>
          <ul>
          <li>
              <Link href="/">Startseite</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/unternehmen">Unternehmen</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>
            <li>
              <Link href="/jobs">Karierre</Link>
            </li>
            <li>
              <Link href="/kontakt">Kontakt</Link>
            </li>
          </ul>

        </div>
        <div>
          <ul>
            <li>
              <Link href="/services">Impressum</Link>
            </li>
            <li>
              <Link href="/services">Datenschutz</Link>
            </li>
            <li>
              <Link href="/services">AGB</Link>
            </li>
          </ul>
        </div>
        <div>
        <h4>Social Media:</h4>
          <ul>
            <li>
              <Link href="/">Facebook</Link>
            </li>
            <li>
              <Link href="/">Instagram</Link>
            </li>
            <li>
              <Link href="/">LinkedIn</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
