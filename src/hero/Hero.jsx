import React from 'react';
import styles from './styles.module.scss';
import cl from 'classnames';
import Services from "./Services";
/* import Image from 'next/image';
import Button from '../components/Button';
import Blur from '../components/Blur';
import About from "./About";

import Test from '../components/Test'; */
import Cover from './Cover';

export default function Hero() {
  return (
    <section className={cl(styles.section)}>
        <Cover />
      <div className=''>
        <Services />
                {/* <About />  */}
      </div>
      
    </section>
  );
}

/**
 *         <div className='relative inset-0 z-0 overflow-hidden'>
            <Image
            src="/bg.jpg"
            alt="Background"
            width={1920}
            height={1080}
            className='bg-cover bg-no-repeat bg-center h-[100vh] w-full  z-0'
            /> 
            <div className="absolute right-10 top-1/3 z-20">
        <div className="w-[500px] text-text-light ">
          <h1 className="text-4xl bold font-bold mb-8 z-10">
            Lösungen für Ihre Sicherheit - <br />Mit Expertise und Erfahrung
          </h1>
          <p className="w-[450px] lg:text-xl mb-16">Unser Team aus Fachleuten bringt jahrelange Erfahrung in jeder Situation mit. Für nahezu jede Herausforderung finden wir eine Lösung – diskret, professionell und zuverlässig.</p>
          <Button href="/kontakt" btnLabel="Kontaktieren Sie uns" />
        </div>
      </div>
            <Blur />
            

        </div>
 */

/**
 *       <div className="absolute right-10 top-1/3 z-20">
        <div className="w-[500px] text-text-light ">
          <h1 className="text-4xl bold font-bold mb-8 z-10">
            Lösungen für Ihre Sicherheit - <br />Mit Expertise und Erfahrung
          </h1>
          <p className="w-[450px] lg:text-xl mb-16">Unser Team aus Fachleuten bringt jahrelange Erfahrung in jeder Situation mit. Für nahezu jede Herausforderung finden wir eine Lösung – diskret, professionell und zuverlässig.</p>
          <Button href="/kontakt" btnLabel="Kontaktieren Sie uns" />
        </div>
      </div>


          top: 150px;
    right: 100px;
    width: 500px;
    z-index: 10;
    color: white;
 */