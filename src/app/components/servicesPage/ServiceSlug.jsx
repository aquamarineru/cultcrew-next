"use client";
import React from 'react';
import cl from 'classnames';
import styles from './styles.module.scss';
import Cover from '../cover/Cover';
import Block from '../block/Block';
import Contact from '../contact/Contact';

export default function ServiceSlug({ data, contactData, className }) {
    return (
        <div>
            <Cover
                title={data.title}
                subtitle={data.subtitle}
                image={data.image}
            />
            <div className={cl(className, styles.servicesSlug)}>
                <Block value={data.body} />
            </div>
            <Contact 
                title={contactData[0].title}
                subtitle={contactData[0].subtitle}
                image={contactData[0].image}
                logo={contactData[0].contactDetails.logo}
                address={contactData[0].contactDetails.address} 
                phone={contactData[0].contactDetails.additionalPhone}
                email={contactData[0].contactDetails.additionalEmail}
                />
           
        </div>
    );
}