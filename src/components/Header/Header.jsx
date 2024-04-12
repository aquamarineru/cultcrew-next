import React, { useState } from 'react';
import styles from './styles.module.scss'
import cl from 'classnames'
import Image from "next/legacy/image";
import Navigation from './Navbar'; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={cl(styles.header)}>
      <div className={cl(styles.headerContainer)}>
        <Image
          src='/logo.png'
          width={140}
          height={70}
          alt='Logo'
          priority
          quality={80}
          className={cl(styles.headerLogo)}
        />
        {/* Hamburger/Close Icon */}
        <div className='lg:hidden z-20'>
          <button onClick={toggleMenu} className={cl(styles.headerButton)}>
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-16 6h16"}
              />
            </svg>
          </button>
        </div>
        {/* Navigation Menu */}
        <div 
          className={cl(styles.headerMenu, isOpen && styles.headerIsOpen)}
        >
          <Navigation />
        </div>
      </div>
    </header>
  );
}
