import React from 'react';
import styles from './styles.module.scss';
import cl from 'classnames';
import Services from "./Services";
import About from "./About"
/* import Image from 'next/image';
import Button from '../components/Button';
import Blur from '../components/Blur';
import About from "./About";

import Test from '../components/Test'; */
import Cover from '../components/Cover/Cover';
import Feedback from './Feedback';
import CallToAction from '../components/CTA/CallToAction';
import News from './News';

const coverData = {
  image: '/bg.jpg',
  title: 'Lösungen für Ihre Sicherheit - Mit Expertise und Erfahrung',
  text: 'Unser Team aus Fachleuten bringt jahrelange Erfahrung in jeder Situation mit. Für nahezu jede Herausforderung finden wir eine Lösung – diskret, professionell und zuverlässig.',
  btnLabel: 'Kontaktieren Sie uns',
  href: '/kontakt',
  ariaLabel: 'Kontaktieren Sie uns'
}
const ctaData = {
  title: 'Machen Sie den ersten Schritt zu mehr Sicherheit!',
  subtitle: 'Kontaktieren Sie uns jetzt, um individuelle Sicherheitslösungen zu entdecken. Wir melden uns umgehend bei Ihnen.',
  btnLabel: 'Kontaktieren Sie uns',
  href: '/kontakt',
  ariaLabel: 'Kontaktieren Sie uns'
}
export default function Hero() {
  return (
    <section className={cl(styles.section)}>
       <Cover 
       image={coverData.image} 
       title={coverData.title} 
       text={coverData.text}
       btnLabel={coverData.btnLabel}
       href={coverData.href}
       ariaLabel={coverData.ariaLabel}
        /> 
      <div className=''>
        <Services />
        <About />  
        <Feedback />
        <News />
        <CallToAction
        title={ctaData.title}
        subtitle={ctaData.subtitle}
        btnLabel={ctaData.btnLabel}
        href={ctaData.href}
        ariaLabel={ctaData.ariaLabel} 
        />
      </div>
    </section>
  );
}

