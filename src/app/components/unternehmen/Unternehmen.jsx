"use client";
import React from 'react';
import styles from './styles.module.scss';
import cl from 'classnames';
import Cover from '../cover/Cover';
import Education from './Education';
import Team from './Team';
import History from './History';
import Qualification from './Qualification';
import CallToAction from '../callToAction/CallToAction';
import Contact from '../contact/Contact';

export default function Unternehmen({data, contactData, className}) {
    return(
        <div>
            <Cover
            title={data.title}
            subtitle={data.subtitle}
            image={data.image}
            />
            <History description={data.aboutText || []} />
            <Team teamData={data.team || []} title={data.teamTitle} />
            {data.qualification.length > 0 && (
                <Qualification 
                    data={data.qualification[0].qualificationCards || []}
                    title={data.qualification[0].title || ''}
                />
            )}
            <Education
            title={data.education?.title || ''}
            text={data.education?.text || ''}
            image={data.education?.image?.asset?.url || ''}
            />
            {data.callToAction.length > 0 && (
            <CallToAction
                title={data.callToAction[0]?.title || ''}
                subtitle={data.callToAction[0]?.subtitle || ''}
                btnLabel={data.callToAction[0]?.button || ''}
                ariaLabel={data.callToAction[0]?.button || ''} 
                href={data.callToAction[0]?.link || '/karriere'}
            />
            )}
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
    )
}