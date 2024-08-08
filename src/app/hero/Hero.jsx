"use client";
import React from 'react';
import styles from './styles.module.scss';
import cl from 'classnames';
import Cover from '../components/cover/Cover';
import Services from './Services';
import Feedback from './Feedback';
import About from './About';
import News from './News';
import CallToAction from '../components/callToAction/CallToAction';


export default function Hero({ data }) {

const callToAction = data.callToAction && data.callToAction[0];
  return (
    <section className={cl(styles.section)}>
        <Cover
        title={data.title}
        subtitle={data.subtitle}
        image={data.Image}
        btnLabel={data.button}
        ariaLabel="Kontaktieren Sie uns"
        href="/kontakt"
        />
        <div>
            <Services
            title={data.services.title}
            subtitle={data.services.subtitle}
            cards={data.services.cards}
             />
             <About
            text={data.about.text}
            image={data.about.Image.asset.url}
            button={data.about.button}
            ariaLabel={data.about.button}
            />
             <Feedback
              title={data.feedback.title}
              subtitle={data.feedback.subtitle}
              cards={data.feedback.fbCards}
            />
            <News
              title={data.news.title}
              subtitle={data.news.subtitle}
              posts={data.news.posts}
            />
            {callToAction && (
            <CallToAction
              title={callToAction.title}
              subtitle={callToAction.subtitle}
              btnLabel={callToAction.button}
              ariaLabel={callToAction.button}
              href={callToAction.link || '/kontakt'}
            />
          )}
        </div>
    </section>
  );
}



