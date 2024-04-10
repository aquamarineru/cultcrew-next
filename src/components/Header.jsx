import React, { useState } from 'react';
import Image from 'next/image';
import Navigation from '../components/Navbar'; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className='bg-background sticky top-0 z-10 w-full'>
      <div className='container mx-auto flex items-center p-4 justify-between relative'>
        <Image
          src='/logo.png'
          width={150}
          height={150}
          alt='Logo'
          priority
        />
        {/* Hamburger/Close Icon */}
        <div className='lg:hidden z-20'>
          <button onClick={toggleMenu} className="focus:outline-none">
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
          className={`absolute lg:relative lg:flex flex-col lg:flex-row items-center justify-center transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 top-0 left-0 h-screen lg:h-auto w-full lg:w-auto bg-background lg:bg-transparent`}
        >
          <Navigation />
        </div>
      </div>
    </header>
  );
}
