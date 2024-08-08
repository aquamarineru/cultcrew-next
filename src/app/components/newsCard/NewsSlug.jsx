"use client";
import React from 'react'
import cl from 'classnames';
import styles from './styles.module.scss';
import Image from 'next/legacy/image';
import { urlFor } from '../../lib/client';
import { format } from "date-fns";
import Cover from '../cover/Cover';
import CallToAction from '../callToAction/CallToAction';
import Contact from '../contact/Contact';

export default function NewsSlug({ title, subtitle, body, image, contactData, className }) {
    console.log('NewsSlug data:', title, subtitle, body, image);

    let date = 'Invalid date';
    if (body.date) {
        try {
            date = format(new Date(body.date), 'dd/MM/yyyy');
        } catch (error) {
            console.error('Date parsing error:', error);
        }
    }

    return (
        <div className={cl(className, styles.post)}>
            <Cover 
                title={title}
                subtitle={subtitle}
                image={image}
                date={date}
                timeToRead={body.timeToRead}
            />
            <div className={cl(className, styles.postBody)}>
                <div className={styles.postBodyImg}>
                    {body.image && (
                        <Image
                            src={urlFor(body.image).url()}
                            alt="Post Image"
                            layout="responsive"
                            width={500}
                            height={500}
                        />
                    )}
                </div>

                <div className={cl(className, styles.postBodyText)}>
                    {body.postText &&
                        body.postText.map((block) =>
                            block.children.map((child) => (
                                <p key={child._key}>{child.text}</p>
                            ))
                        )}
                </div>
            </div>
            {body.callToAction && body.callToAction.length > 0 && (
                <CallToAction
                    title={body.callToAction[0].title}
                    subtitle={body.callToAction[0].subtitle}
                    ariaLabel={body.callToAction[0].button}
                    btnLabel={body.callToAction[0].button}
                    href={body.callToAction[0].link ? body.callToAction[0].link : '/kontakt'} 
                />
            )}
            {contactData && (
                <Contact 
                    title={contactData[0].title}
                    subtitle={contactData[0].subtitle}
                    image={contactData[0].image}
                    logo={contactData[0].contactDetails.logo}
                    address={contactData[0].contactDetails.address} 
                    phone={contactData[0].contactDetails.additionalPhone}
                    email={contactData[0].contactDetails.additionalEmail}
                />
            )}
        </div>
    )
}
