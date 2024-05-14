import React from 'react';
import styles from './styles.module.scss';
import cl from 'classnames';

import Services from "./Services";
import About from "./About"
import Cover from '../components/Cover/Cover';
import Feedback from './Feedback';
import CallToAction from '../components/CTA/CallToAction';
import News from './News';


export default function Hero({ homeData }) {
  return (
    <section className={cl(styles.section)}>
      <Cover 
       title={homeData.title} 
       subtitle={homeData.subtitle}
       image={homeData.Image.asset.url}
       btnLabel={homeData.button}
       href='/kontakt'
       ariaLabel='Kontaktieren Sie uns'
        /> 
      <div className=''>
        <Services
        title={homeData.services.title}
        subtitle={homeData.services.subtitle}
        cards={homeData.services.cards}
        />
        <About
        text={homeData.about.text}
        image={homeData.about.Image.asset.url}
        button={homeData.about.button}
        ariaLabel={homeData.about.button}
        />
        <Feedback
        title={homeData.feedback.title} 
        subtitle={homeData.feedback.subtitle}
        cards={homeData.feedback.fbCards}
        />
        <News
        title={homeData.news.title}
        subtitle={homeData.news.subtitle}
        newsData={homeData.news.newsCards}
        />
        <CallToAction
        title={homeData.callToAction[0].title}
        subtitle={homeData.callToAction[0].subtitle}
        btnLabel={homeData.callToAction[0].button}
        ariaLabel={homeData.callToAction[0].button} 
        href={homeData.callToAction[0].link ? homeData.callToAction[0].link : '/kontakt'}
        /> 
      </div> 
    </section>
  );
}



