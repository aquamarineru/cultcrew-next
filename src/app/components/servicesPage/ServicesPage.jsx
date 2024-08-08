"use client";
import React from 'react'
import cl from 'classnames'
import styles from './styles.module.scss'
import Cover from '../cover/Cover'
import CallToAction from '../callToAction/CallToAction';
import Card from './Card';

export default function ServicesPage({ data, className }) {
  return (
    <div>
        <Cover 
        title={data.title}
        subtitle={data.subtitle}
        image={data.image}
        />
        <div className={cl(className, styles.servicesCards)}>
            {data.cards.map((card, index) => (
                <Card 
                key={index}
                title={card.title}
                text={card.text}
                slug={card.slug.current}
                />
            ))}
        </div>
        <CallToAction
        title={data.callToAction[0].title}
        subtitle={data.callToAction[0].subtitle}
        ariaLabel={data.callToAction[0].button}
        btnLabel={data.callToAction[0].button}
        href={data.callToAction[0].link}
        />
      
    </div>
  )
}
